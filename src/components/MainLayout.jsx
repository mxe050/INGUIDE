import { useState, useCallback, lazy, Suspense, memo } from 'react'
import Sidebar from './Sidebar'
import { contentData } from '../data/contentData'

const ContentPanel = lazy(() => import('./ContentPanel'))

function MainLayout() {
  const [selectedSection, setSelectedSection] = useState(contentData[0]?.id || '')
  const [selectedSubSection, setSelectedSubSection] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSelectSection = useCallback((sectionId, subSectionId = null) => {
    setSelectedSection(sectionId)
    setSelectedSubSection(subSectionId)
    setIsSidebarOpen(false)
    // Scroll to top of content
    document.getElementById('content-panel')?.scrollTo(0, 0)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev)
  }, [])

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('inguide_auth')
    window.location.reload()
  }, [])

  // Find current section data
  const currentSection = contentData.find(s => s.id === selectedSection)

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="メニューを開く"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-lg font-bold text-slate-800">INGUIDE</h1>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-slate-500 hover:text-slate-700 px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          ログアウト
        </button>
      </header>

      {/* Main Body */}
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
            w-72 bg-white border-r border-slate-200
            transform transition-transform duration-200 ease-in-out
            lg:transform-none lg:translate-x-0
            ${isSidebarOpen ? 'translate-x-0 top-[57px]' : '-translate-x-full'}
            overflow-y-auto
          `}
        >
          <Sidebar
            sections={contentData}
            selectedSection={selectedSection}
            selectedSubSection={selectedSubSection}
            onSelect={handleSelectSection}
          />
        </aside>

        {/* Content Panel */}
        <main id="content-panel" className="flex-1 overflow-y-auto">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full" />
              </div>
            }
          >
            <ContentPanel
              section={currentSection}
              selectedSubSection={selectedSubSection}
            />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default memo(MainLayout)
