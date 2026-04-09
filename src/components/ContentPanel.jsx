import { memo, useEffect, useRef, useState, useCallback } from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import QuizPanel from './QuizPanel'

function ContentPanel({ section, selectedSubSection, hasPrev, hasNext, prevSection, nextSection, onNavigate }) {
  const subRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Scroll to sub-section when selected
  useEffect(() => {
    if (selectedSubSection) {
      const el = document.getElementById(`sub-${selectedSubSection}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedSubSection])

  // Show/hide scroll-to-top button
  useEffect(() => {
    const panel = document.getElementById('content-panel')
    if (!panel) return
    const handleScroll = () => {
      setShowScrollTop(panel.scrollTop > 400)
    }
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

  const moduleNumber = section.moduleNumber || 0

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-6 py-8 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
          <span>{section.icon || '📄'}</span>
          <span>{section.category || 'コンテンツ'}</span>
          {selectedSubSection && section.subSections && (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="truncate max-w-[200px]">{section.subSections.find(s => s.id === selectedSubSection)?.title}</span>
            </>
          )}
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">{section.title}</h1>
          {section.description && (
            <p className="text-slate-600 text-lg leading-relaxed">{section.description}</p>
          )}
        </div>

        {/* Quiz section */}
        {section.isQuiz && section.quiz && (
          <QuizPanel quiz={section.quiz} moduleNumber={moduleNumber} />
        )}

        {/* Section Content - using MarkdownRenderer for parsed content */}
        {!section.isQuiz && section.content && section.content.length > 0 && (
          <MarkdownRenderer blocks={section.content} moduleNumber={moduleNumber} />
        )}

        {/* Sub-sections */}
        {section.subSections?.map(sub => (
          <div
            key={sub.id}
            id={`sub-${sub.id}`}
            ref={selectedSubSection === sub.id ? subRef : null}
            className="mt-12 scroll-mt-6"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-3 border-b-2 border-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full shrink-0" />
              {sub.title}
            </h2>
            {sub.description && (
              <p className="text-slate-600 mb-4">{sub.description}</p>
            )}
            {sub.content && sub.content.length > 0 && (
              <MarkdownRenderer blocks={sub.content} moduleNumber={moduleNumber} />
            )}
          </div>
        ))}

        {/* Prev / Next Navigation */}
        <div className="mt-16 mb-8 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hasPrev && prevSection ? (
              <button
                onClick={() => onNavigate(-1)}
                className="group text-left p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer"
              >
                <span className="text-xs text-slate-400 flex items-center gap-1 mb-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  前のセクション
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {prevSection.icon} {prevSection.title}
                </span>
              </button>
            ) : <div />}
            {hasNext && nextSection ? (
              <button
                onClick={() => onNavigate(1)}
                className="group text-right p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer sm:col-start-2"
              >
                <span className="text-xs text-slate-400 flex items-center justify-end gap-1 mb-1">
                  次のセクション
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {nextSection.icon} {nextSection.title}
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all z-10 cursor-pointer"
          aria-label="ページ上部へスクロール"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default memo(ContentPanel)
