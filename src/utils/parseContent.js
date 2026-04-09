/**
 * M*.txt ファイルのカスタムマークダウン形式をパースする
 *
 * 対応フォーマット:
 * - # ヘッダー → メインセクション (パート)
 * - ## ヘッダー → サブセクション
 * - ### ヘッダー → 小見出し
 * - 【図】figure_X.jpg（...）— 説明 → 画像ブロック
 * - >>>補足【タイトル】...<<< → 補足ノートブロック
 * - 【チェックリスト対応】... → チェックリスト参照
 * - - リスト項目 → 箇条書き
 * - 1. 番号付きリスト → 番号リスト
 * - **太字** → ボールドテキスト
 * - --- → ディバイダー
 * - 表の出典：... → 参考リンク
 * - 参考文献：... → 参考文献
 */

/**
 * M*.txtの生テキストをセクション構造にパースする
 * @param {string} rawText - M*.txtの生テキスト
 * @param {number} moduleNumber - モジュール番号 (1-4)
 * @returns {{ title: string, description: string, sections: Array }}
 */
export function parseModuleContent(rawText, moduleNumber) {
  const lines = rawText.split('\n')

  // モジュールタイトルと説明を抽出
  let moduleTitle = `Module ${moduleNumber}`
  let moduleDescription = ''

  // 最初の数行からタイトルと説明を抽出
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    const line = lines[i].trim()
    if (line.startsWith('# ') && !line.startsWith('# 目次') && !line.startsWith('# 抽出')) {
      moduleTitle = line.replace(/^#\s+/, '')
      break
    }
    if (line.includes('INGUIDE Level 1: Module')) {
      moduleTitle = line.replace(/^#+\s*/, '')
    }
  }

  // ドキュメント概要を探す
  const descStart = rawText.indexOf('## ドキュメント概要')
  if (descStart !== -1) {
    const descEnd = rawText.indexOf('\n---', descStart)
    if (descEnd !== -1) {
      const descBlock = rawText.substring(descStart, descEnd)
      const descLines = descBlock.split('\n').filter(l => {
        const t = l.trim()
        return t && !t.startsWith('#') && !t.startsWith('-') && !t.startsWith('*')
      })
      if (descLines.length > 0) {
        moduleDescription = descLines[0].trim()
      }
    }
  }

  // メインセクション（# ヘッダー）で分割
  const sections = []
  let currentMainIdx = -1

  // 目次と概要以降のコンテンツ開始位置を見つける
  let contentStartLine = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    // "インストラクター紹介" か "パート1" あたりから本文開始
    if (line.startsWith('# インストラクター') || line.startsWith('# パート') ||
        line.startsWith('# PART') || line.match(/^#\s+(MEET|INSTRUCTOR|PROCESS|DEVELOPING)/)) {
      contentStartLine = i
      break
    }
  }

  // コンテンツ部分をパース
  for (let i = contentStartLine; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // # ヘッダー → 新しいメインセクション
    if (trimmed.match(/^#\s+[^#]/) && !trimmed.startsWith('# 抽出された') && !trimmed.startsWith('# 目次')) {
      const title = trimmed.replace(/^#\s+/, '')
      sections.push({
        id: `m${moduleNumber}-section-${sections.length}`,
        title,
        content: [],
        subSections: [],
      })
      currentMainIdx = sections.length - 1
      continue
    }

    if (currentMainIdx < 0) continue

    const currentSection = sections[currentMainIdx]

    // ## ヘッダー → サブセクション
    if (trimmed.match(/^##\s+[^#]/)) {
      const subTitle = trimmed.replace(/^##\s+/, '')
      currentSection.subSections.push({
        id: `m${moduleNumber}-sub-${currentMainIdx}-${currentSection.subSections.length}`,
        title: subTitle,
        content: [],
      })
      continue
    }

    // コンテンツを適切な場所に追加
    const target = currentSection.subSections.length > 0
      ? currentSection.subSections[currentSection.subSections.length - 1]
      : currentSection

    addLineToContent(target.content, trimmed, lines, i)
  }

  // 空のセクションを除去し、コンテンツを整理
  const cleanedSections = sections
    .filter(s => s.content.length > 0 || s.subSections.length > 0)
    .map(s => ({
      ...s,
      subSections: s.subSections.filter(sub => sub.content.length > 0),
    }))

  return {
    title: moduleTitle,
    description: moduleDescription,
    sections: cleanedSections,
  }
}

/**
 * 行をコンテンツブロックの配列に追加する
 */
function addLineToContent(contentArray, trimmedLine, allLines, lineIdx) {
  if (!trimmedLine) return

  // --- ディバイダー
  if (trimmedLine === '---') {
    // 連続するディバイダーを防止
    if (contentArray.length > 0 && contentArray[contentArray.length - 1].type === 'divider') return
    contentArray.push({ type: 'divider' })
    return
  }

  // 【図】画像参照
  if (trimmedLine.startsWith('【図】')) {
    const imageMatch = trimmedLine.match(/【図】(figure_\d+\.(?:jpg|jpeg|png))(?:（.*?）)?(?:\s*[—–-]\s*(.+))?/)
    if (imageMatch) {
      contentArray.push({
        type: 'image',
        imageId: imageMatch[1],
        caption: imageMatch[2] || '',
      })
    }
    return
  }

  // 【チェックリスト対応】
  if (trimmedLine.startsWith('【チェックリスト対応】')) {
    contentArray.push({
      type: 'checklist-ref',
      text: trimmedLine.replace('【チェックリスト対応】', '').trim(),
    })
    return
  }

  // ### 小見出し
  if (trimmedLine.match(/^###\s+/)) {
    const headingText = trimmedLine.replace(/^###\s+/, '')
    contentArray.push({ type: 'heading', level: 3, text: headingText })
    return
  }

  // >>>gradebook ブロック開始（GRADEBookからの追加解説）
  if (trimmedLine.startsWith('>>>gradebook')) {
    contentArray.push({ type: 'gradebook-start', text: trimmedLine.replace(/^>>>gradebook【(.+?)】/, '$1') })
    return
  }

  // >>>補足 ノートブロック開始（これは複数行にまたがるので特別処理が必要）
  // parseModuleContent内で処理済みなので、ここでは行単位で扱う
  if (trimmedLine.startsWith('>>>補足')) {
    contentArray.push({ type: 'note-start', text: trimmedLine.replace(/^>>>補足【(.+?)】/, '$1') })
    return
  }

  if (trimmedLine === '<<<') {
    contentArray.push({ type: 'note-end' })
    return
  }

  // **太字のみの行** → ボールドヘッディング
  if (trimmedLine.match(/^\*\*(.+)\*\*$/) && !trimmedLine.includes('：')) {
    const boldText = trimmedLine.match(/^\*\*(.+)\*\*$/)[1]
    contentArray.push({ type: 'bold-heading', text: boldText })
    return
  }

  // **太字ラベル：** テキスト
  if (trimmedLine.match(/^\*\*(.+?)\*\*[：:]$/)) {
    const label = trimmedLine.match(/^\*\*(.+?)\*\*/)[1]
    contentArray.push({ type: 'label', text: label })
    return
  }

  // 番号付きリスト (1. 2. 3. ...)
  if (trimmedLine.match(/^\d+\.\s+/)) {
    const text = trimmedLine.replace(/^\d+\.\s+/, '')
    // 最後のブロックが ordered-list なら追加、そうでなければ新規
    const lastBlock = contentArray[contentArray.length - 1]
    if (lastBlock && lastBlock.type === 'ordered-list') {
      lastBlock.items.push(text)
    } else {
      contentArray.push({ type: 'ordered-list', items: [text] })
    }
    return
  }

  // 箇条書きリスト (- item or • item)
  if (trimmedLine.match(/^[-•]\s+/)) {
    const text = trimmedLine.replace(/^[-•]\s+/, '')
    const lastBlock = contentArray[contentArray.length - 1]
    if (lastBlock && lastBlock.type === 'list') {
      lastBlock.items.push(text)
    } else {
      contentArray.push({ type: 'list', items: [text] })
    }
    return
  }

  // インデント付きリスト (  - item or  o item)
  if (trimmedLine.match(/^\s+[-o•]\s+/)) {
    const text = trimmedLine.replace(/^\s+[-o•]\s+/, '')
    const lastBlock = contentArray[contentArray.length - 1]
    if (lastBlock && lastBlock.type === 'sub-list') {
      lastBlock.items.push(text)
    } else {
      contentArray.push({ type: 'sub-list', items: [text] })
    }
    return
  }

  // 参考文献 / 参考リンク
  if (trimmedLine.startsWith('参考文献：') || trimmedLine.startsWith('表の出典：')) {
    contentArray.push({ type: 'reference', text: trimmedLine })
    return
  }

  // 通常のパラグラフ
  contentArray.push({ type: 'paragraph', text: trimmedLine })
}

/**
 * パースされたモジュールコンテンツから補足ブロックを整理する
 * note-start と note-end の間のコンテンツを1つの note ブロックにまとめる
 */
export function consolidateNotes(sections) {
  return sections.map(section => ({
    ...section,
    content: consolidateNoteBlocks(section.content),
    subSections: section.subSections.map(sub => ({
      ...sub,
      content: consolidateNoteBlocks(sub.content),
    })),
  }))
}

function consolidateNoteBlocks(blocks) {
  const result = []
  let noteTitle = null
  let noteContent = []
  let inNote = false
  let noteType = 'note' // 'note' or 'gradebook'

  for (const block of blocks) {
    if (block.type === 'note-start' || block.type === 'gradebook-start') {
      inNote = true
      noteType = block.type === 'gradebook-start' ? 'gradebook' : 'note'
      noteTitle = block.text
      noteContent = []
      continue
    }

    if (block.type === 'note-end') {
      inNote = false
      result.push({
        type: noteType,
        title: noteTitle,
        blocks: noteContent,
      })
      noteTitle = null
      noteContent = []
      continue
    }

    if (inNote) {
      noteContent.push(block)
    } else {
      result.push(block)
    }
  }

  // 閉じられなかったノートがある場合
  if (inNote && noteContent.length > 0) {
    result.push({
      type: noteType,
      title: noteTitle,
      blocks: noteContent,
    })
  }

  return result
}

/**
 * モジュールをパースして最終的なcontentData形式に変換する
 */
export function buildModuleData(rawText, moduleNumber, moduleInfo) {
  const parsed = parseModuleContent(rawText, moduleNumber)
  const sections = consolidateNotes(parsed.sections)

  // セクションからcontentDataエントリを構築
  const entries = []

  // モジュールの導入セクション
  if (moduleInfo.description) {
    entries.push({
      id: `module-${moduleNumber}`,
      title: moduleInfo.title,
      icon: moduleInfo.icon,
      category: `Module ${moduleNumber}`,
      description: moduleInfo.description,
      moduleNumber,
      content: [],
      subSections: [],
    })
  }

  // 各セクションをエントリに変換
  for (const section of sections) {
    entries.push({
      id: section.id,
      title: section.title,
      icon: moduleInfo.icon,
      category: `Module ${moduleNumber}`,
      description: '',
      moduleNumber,
      content: section.content,
      subSections: section.subSections,
    })
  }

  return entries
}
