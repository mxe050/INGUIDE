import { memo, useState, useEffect, useCallback } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

function ContentPanel({ section, onNavigate, hasPrev, hasNext, prevLabel, nextLabel }) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const panel = document.getElementById('content-panel')
    if (!panel) return
    const handleScroll = () => setShowScrollTop(panel.scrollTop > 400)
    panel.addEventListener('scroll', handleScroll, { passive: true })
    return () => panel.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    document.getElementById('content-panel')?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!section) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p className="text-lg font-medium text-slate-500">セクションを選択してください</p>
          <p className="text-sm text-slate-400 mt-1">左のメニューから学習するセクションを選びましょう</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-6 py-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">{section.title}</h1>
        </div>

        {/* Content Blocks */}
        {section.content?.map((block, index) => (
          <ContentBlock key={`${section.id}-${index}`} block={block} />
        ))}

        {/* Prev / Next Navigation */}
        <div className="mt-16 mb-8 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hasPrev ? (
              <button
                onClick={() => onNavigate(-1)}
                className="group text-left p-4 border border-slate-200 rounded-xl hover:border-sky-300 hover:bg-sky-50/50 transition-all cursor-pointer"
              >
                <span className="text-xs text-slate-400 flex items-center gap-1 mb-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  前のセクション
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-sky-700">{prevLabel}</span>
              </button>
            ) : <div />}
            {hasNext ? (
              <button
                onClick={() => onNavigate(1)}
                className="group text-right p-4 border border-slate-200 rounded-xl hover:border-sky-300 hover:bg-sky-50/50 transition-all cursor-pointer sm:col-start-2"
              >
                <span className="text-xs text-slate-400 flex items-center justify-end gap-1 mb-1">
                  次のセクション
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-sky-700">{nextLabel}</span>
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all z-10 cursor-pointer"
          aria-label="トップへ"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

const ContentBlock = memo(function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return (
        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{block.text}</h3>
      )

    case 'paragraph':
      return <p className="text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap">{block.text}</p>

    case 'english':
      return (
        <div className="bg-blue-50/80 border-l-4 border-blue-400 px-5 py-4 mb-4 rounded-r-lg">
          <p className="text-xs font-semibold text-blue-500 mb-1.5 uppercase tracking-wide">Original (English)</p>
          <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.text}</p>
        </div>
      )

    case 'japanese':
      return (
        <div className="bg-emerald-50/80 border-l-4 border-emerald-400 px-5 py-4 mb-4 rounded-r-lg">
          <p className="text-xs font-semibold text-emerald-600 mb-1.5 tracking-wide">日本語解説</p>
          <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.text}</p>
        </div>
      )

    case 'bilingual':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50/80 border-l-4 border-blue-400 px-5 py-4 rounded-r-lg">
            <p className="text-xs font-semibold text-blue-500 mb-1.5 uppercase tracking-wide">Original (English)</p>
            <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.english}</p>
          </div>
          <div className="bg-emerald-50/80 border-l-4 border-emerald-400 px-5 py-4 rounded-r-lg">
            <p className="text-xs font-semibold text-emerald-600 mb-1.5 tracking-wide">日本語解説</p>
            <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.japanese}</p>
          </div>
        </div>
      )

    case 'image':
      return (
        <ImagePlaceholder
          imageId={block.imageId}
          alt={block.alt || ''}
          caption={block.caption || ''}
          description={block.description || ''}
        />
      )

    case 'note':
      return (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-4 flex gap-3">
          <span className="text-amber-500 text-lg shrink-0 mt-0.5">&#x1F4A1;</span>
          <div>
            <p className="text-xs font-semibold text-amber-600 mb-1">補足</p>
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{block.text}</p>
          </div>
        </div>
      )

    case 'list':
      return (
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          {block.items.map((item, i) => (
            <li key={i} className="text-slate-700 leading-relaxed">{item}</li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto mb-4 rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-sm">
            {block.headers && (
              <thead>
                <tr className="bg-slate-100">
                  {block.headers.map((h, i) => (
                    <th key={i} className="border-b border-slate-200 px-4 py-2.5 text-left font-semibold text-slate-700">{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows?.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="border-b border-slate-100 px-4 py-2.5 text-slate-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'divider':
      return <hr className="border-slate-200 my-8" />

    default:
      return null
  }
})

export default memo(ContentPanel)
