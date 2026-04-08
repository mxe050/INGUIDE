import { memo, useState } from 'react'
import { getImageUrl } from '../utils/imageLoader'

/**
 * パースされたコンテンツブロックをレンダリングするコンポーネント
 */
function MarkdownRenderer({ blocks, moduleNumber }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <div className="space-y-0">
      {blocks.map((block, index) => (
        <ContentBlock
          key={index}
          block={block}
          moduleNumber={moduleNumber}
        />
      ))}
    </div>
  )
}

const ContentBlock = memo(function ContentBlock({ block, moduleNumber }) {
  switch (block.type) {
    case 'heading':
      return (
        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3 flex items-center gap-2">
          {renderInlineMarkdown(block.text)}
        </h3>
      )

    case 'bold-heading':
      return (
        <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">
          {block.text}
        </h4>
      )

    case 'label':
      return (
        <h4 className="text-base font-bold text-slate-700 mt-5 mb-2">
          {block.text}
        </h4>
      )

    case 'paragraph':
      return (
        <p className="text-slate-700 leading-relaxed mb-3 whitespace-pre-wrap">
          {renderInlineMarkdown(block.text)}
        </p>
      )

    case 'image':
      return (
        <ImageBlock
          imageId={block.imageId}
          caption={block.caption}
          moduleNumber={moduleNumber}
        />
      )

    case 'checklist-ref':
      return (
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full mb-3">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {block.text}
        </div>
      )

    case 'note':
      return <NoteBlock title={block.title} blocks={block.blocks} moduleNumber={moduleNumber} />

    case 'gradebook':
      return <GradeBookBlock title={block.title} blocks={block.blocks} moduleNumber={moduleNumber} />

    case 'list':
      return (
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          {block.items.map((item, i) => (
            <li key={i} className="text-slate-700 leading-relaxed">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      )

    case 'sub-list':
      return (
        <ul className="list-[circle] pl-10 mb-3 space-y-1">
          {block.items.map((item, i) => (
            <li key={i} className="text-slate-600 leading-relaxed text-sm">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      )

    case 'ordered-list':
      return (
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-slate-700 leading-relaxed">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ol>
      )

    case 'reference':
      return (
        <div className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="break-all">{block.text}</span>
        </div>
      )

    case 'divider':
      return <hr className="border-slate-200 my-6" />

    default:
      return null
  }
})

/**
 * インラインマークダウン（**太字**）を処理する
 */
function renderInlineMarkdown(text) {
  if (!text) return null

  // **太字** をパース
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  if (parts.length === 1) return text

  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*(.+)\*\*$/)
    if (boldMatch) {
      return <strong key={i} className="font-semibold text-slate-800">{boldMatch[1]}</strong>
    }
    return part
  })
}

/**
 * 画像ブロックコンポーネント
 */
const ImageBlock = memo(function ImageBlock({ imageId, caption, moduleNumber }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const imageUrl = getImageUrl(moduleNumber, imageId)

  if (!imageUrl) {
    return null // 画像が見つからない場合はスキップ
  }

  return (
    <figure className="my-5">
      <div className={`relative overflow-hidden rounded-lg border ${loaded ? 'border-slate-200' : 'border-slate-200 bg-slate-50'}`}>
        <img
          src={imageUrl}
          alt={caption || imageId}
          className={`max-w-full h-auto block mx-auto transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
        {!loaded && !error && (
          <div className="flex items-center justify-center min-h-[100px] w-full">
            <div className="animate-pulse w-8 h-8 bg-slate-200 rounded-full" />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-slate-500 mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
})

/**
 * 補足ノートブロックコンポーネント
 */
const NoteBlock = memo(function NoteBlock({ title, blocks, moduleNumber }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="my-5 rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50/80 to-orange-50/40 overflow-hidden">
      <button
        onClick={() => setIsExpanded(prev => !prev)}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left cursor-pointer hover:bg-amber-100/40 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-amber-500 text-lg shrink-0">💡</span>
          <span className="text-sm font-semibold text-amber-800">
            補足{title ? `：${title}` : ''}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-amber-400 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-5 pb-4 pt-0 border-t border-amber-100">
          <div className="pt-3">
            <MarkdownRenderer blocks={blocks} moduleNumber={moduleNumber} />
          </div>
        </div>
      )}
    </div>
  )
})

/**
 * GRADEBookからの解説ブロックコンポーネント
 */
const GradeBookBlock = memo(function GradeBookBlock({ title, blocks, moduleNumber }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="my-5 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-teal-50/40 overflow-hidden">
      <button
        onClick={() => setIsExpanded(prev => !prev)}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left cursor-pointer hover:bg-emerald-100/40 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-emerald-600 text-lg shrink-0">📖</span>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">GRADEBookからの解説</span>
            {title && <span className="text-sm font-semibold text-emerald-800">{title}</span>}
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-emerald-400 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-5 pb-4 pt-0 border-t border-emerald-100">
          <div className="pt-3 text-sm">
            <MarkdownRenderer blocks={blocks} moduleNumber={moduleNumber} />
          </div>
        </div>
      )}
    </div>
  )
})

export default memo(MarkdownRenderer)
