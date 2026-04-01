/**
 * INGUIDE コンテンツデータ構造
 *
 * このファイルが全コンテンツのマスターデータです。
 * 資料を追加する際は、以下のフォーマットに従ってセクションを追加してください。
 *
 * === データ構造 ===
 *
 * section: {
 *   id: 'unique-id',           // ユニークID
 *   title: 'セクション名',      // サイドバーに表示されるタイトル
 *   icon: '📘',                // アイコン（絵文字）
 *   category: 'カテゴリ名',     // パンくず表示用
 *   description: '概要説明',    // セクションの概要
 *   content: [ ... ],          // コンテンツブロックの配列
 *   subSections: [ ... ],      // サブセクション配列（任意）
 * }
 *
 * === コンテンツブロックの種類 ===
 *
 * { type: 'heading', text: '見出し' }
 * { type: 'paragraph', text: '本文テキスト' }
 * { type: 'english', text: '英語原文' }
 * { type: 'japanese', text: '日本語解説' }
 * { type: 'bilingual', english: '英語', japanese: '日本語' }
 * { type: 'image', imageId: 'fig1-1.png', alt: '説明', caption: 'キャプション', description: '図の詳細解説' }
 * { type: 'note', text: '補足情報' }
 * { type: 'list', items: ['項目1', '項目2'] }
 * { type: 'table', headers: ['列1', '列2'], rows: [['値1', '値2']] }
 * { type: 'divider' }
 *
 * === 画像の追加方法 ===
 * 1. 画像ファイルを /public/images/ に配置
 * 2. imageId にファイル名を指定（例: 'fig1-1.png'）
 * 3. description に図の内容を文章で詳細に記述（画像がなくても内容が理解できるように）
 */

export const contentData = [
  {
    id: 'welcome',
    title: 'はじめに',
    icon: '🏠',
    category: 'ガイド',
    description: 'INGUIDE 学習アプリへようこそ。このアプリでは、資料の内容を体系的に学習できます。',
    content: [
      {
        type: 'heading',
        text: 'このアプリの使い方',
      },
      {
        type: 'paragraph',
        text: '左側のサイドバーから学習したいセクションを選択してください。各セクションには英語原文と日本語の詳細解説が対照表示されています。',
      },
      {
        type: 'list',
        items: [
          '📖 サイドバーからセクションを選択して学習を開始',
          '🔍 サブセクションをクリックして詳細な内容にジャンプ',
          '📱 モバイルではハンバーガーメニューからナビゲーション',
          '🖼️ 図表のプレースホルダーは後ほど実際の画像に差し替え可能',
        ],
      },
      {
        type: 'note',
        text: 'このアプリはフェーズ1（基盤）の段階です。資料の内容はフェーズ2で追加されます。',
      },
    ],
    subSections: [],
  },
  {
    id: 'sample-section',
    title: 'サンプルセクション',
    icon: '📘',
    category: 'サンプル',
    description: 'これはコンテンツの表示サンプルです。実際の資料が投入される際のレイアウト例を示しています。',
    content: [
      {
        type: 'heading',
        text: 'バイリンガル表示例',
      },
      {
        type: 'bilingual',
        english: 'This is a sample text demonstrating the bilingual display format. The original English text appears on the left side, while the detailed Japanese explanation appears on the right side.',
        japanese: 'これはバイリンガル表示フォーマットのデモンストレーションです。英語原文が左側に、日本語の詳細解説が右側に表示されます。',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        text: '図表の表示例',
      },
      {
        type: 'image',
        // <!-- 画像ファイル: /public/images/sample-figure.png -->
        imageId: 'sample-figure.png',
        alt: 'サンプル図表',
        caption: '図1: サンプル図表 - 資料からキャプチャした画像をここに配置',
        description: 'この図は、プロセスの全体的な流れを示しています。左から右へ、入力データが処理段階を経て最終的な出力に変換される様子を矢印で表現しています。各処理段階はボックスで表現され、データの変換内容がラベルとして記載されています。',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        text: 'テーブル表示例',
      },
      {
        type: 'table',
        headers: ['用語', '英語', '説明'],
        rows: [
          ['サンプル1', 'Sample 1', 'テーブル表示の例です'],
          ['サンプル2', 'Sample 2', '行と列の構造化データを表示します'],
          ['サンプル3', 'Sample 3', 'スクロール対応で大きなテーブルも扱えます'],
        ],
      },
    ],
    subSections: [
      {
        id: 'sub-sample-1',
        title: 'サブセクション例 1',
        description: 'サブセクションの表示例です。',
        content: [
          {
            type: 'english',
            text: 'This is the original English text for sub-section 1. All content from the source material will be displayed here without any summarization or omission.',
          },
          {
            type: 'japanese',
            text: 'これはサブセクション1の日本語解説です。資料の内容は一切要約せず、原文のまま表示されます。',
          },
        ],
      },
      {
        id: 'sub-sample-2',
        title: 'サブセクション例 2',
        description: 'さらなるサブセクションの例です。',
        content: [
          {
            type: 'paragraph',
            text: 'サブセクション2のコンテンツです。階層構造によって、複雑な資料も整理された形で学習できます。',
          },
          {
            type: 'image',
            // <!-- 画像ファイル: /public/images/sample-diagram.png -->
            imageId: 'sample-diagram.png',
            alt: 'サンプル構造図',
            caption: '図2: 構造図のサンプル',
            description: 'この構造図は、システムの階層構造を示しています。最上位にメインコンポーネントがあり、そこから複数のサブコンポーネントが枝分かれしています。各コンポーネント間の依存関係が矢印で示され、データの流れが上から下へと示されています。',
          },
        ],
      },
    ],
  },
]
