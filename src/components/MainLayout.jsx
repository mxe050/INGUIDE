import { useState, useCallback, useMemo, lazy, Suspense, memo } from 'react'
import Sidebar from './Sidebar'
import { contentData } from '../data/contentData'

const ContentPanel = lazy(() => import('./ContentPanel'))

// Flatten all sections across modules into a flat list for navigation
function flattenSections(data) {
  const flat = []
  for (const mod of data) {
    for (const sec of mod.sections) {
      flat.push(sec)
    }
  }
  return flat
}

function MainLayout() {
  const allSections = useMemo(() => flattenSections(contentData), [])

  const [selectedId, setSelectedId] = useState(allSections[0]?.id || '')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter modules/sections based on search
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return contentData
    const q = searchQuery.toLowerCase()
    return contentData
      .map((mod) => ({
        ...mod,
        sections: mod.sections.filter(
          (sec) =>
            sec.title.toLowerCase().includes(q) ||
            mod.title.toLowerCase().includes(q)
        ),
      }))
      .filter((mod) => mod.sections.length > 0)
  }, [searchQuery])

  const currentIndex = useMemo(
    () => allSections.findIndex((s) => s.id === selectedId),
    [allSections, selectedId]
  )

  const handleSelect = useCallback(
    (sectionId) => {
      setSelectedId(sectionId)
      setIsSidebarOpen(false)
      document.getElementById('content-panel')?.scrollTo({ top: 0, behavior: 'smooth' })
    },
    []
  )

  const handleNavigate = useCallback(
    (direction) => {
      const newIndex = currentIndex + direction
      if (newIndex >= 0 && newIndex < allSections.length) {
        setSelectedId(allSections[newIndex].id)
        document.getElementById('content-panel')?.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [currentIndex, allSections]
  )

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev)
  }, [])

  const currentSection = allSections[currentIndex] || null
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < allSections.length - 1
  const prevLabel = hasPrev ? allSections[currentIndex - 1].title : ''
  const nextLabel = hasNext ? allSections[currentIndex + 1].title : ''
  const progress = allSections.length > 0
    ? Math.round(((currentIndex + 1) / allSections.length) * 100)
    : 0

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 shrink-0 z-30">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="メニュー"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-lg font-bold text-slate-800">INGUIDE</h1>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            <span className="font-medium text-slate-600">{currentIndex + 1}</span>
            <span>/</span>
            <span>{allSections.length}</span>
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-20
            w-72 bg-white border-r border-slate-200 flex flex-col
            transform transition-transform duration-200 ease-in-out
            lg:transform-none lg:translate-x-0
            ${isSidebarOpen ? 'translate-x-0 top-[53px]' : '-translate-x-full'}
          `}
        >
          {/* Search */}
          <div className="px-3 pt-3 pb-1 shrink-0">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="セクションを検索..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40 focus:border-sky-300 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-slate-200 rounded cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Section list */}
          <div className="flex-1 overflow-y-auto">
            <Sidebar
              data={filteredData}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
            {filteredData.length === 0 && searchQuery && (
              <div className="px-6 py-8 text-center">
                <p className="text-sm text-slate-400">「{searchQuery}」に一致するセクションがありません</p>
              </div>
            )}
          </div>

          <div className="px-4 py-2 border-t border-slate-100 shrink-0">
            <p className="text-xs text-slate-400 text-center">{allSections.length} セクション</p>
          </div>
        </aside>

        {/* Content */}
        <main id="content-panel" className="flex-1 overflow-y-auto scroll-smooth">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin w-8 h-8 border-3 border-sky-500 border-t-transparent rounded-full" />
              </div>
            }
          >
            <ContentPanel
              section={currentSection}
              hasPrev={hasPrev}
              hasNext={hasNext}
              prevLabel={prevLabel}
              nextLabel={nextLabel}
              onNavigate={handleNavigate}
            />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default memo(MainLayout)
