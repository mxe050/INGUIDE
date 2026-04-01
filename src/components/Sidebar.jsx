import { useState, memo, useCallback } from 'react'

function SidebarItem({ section, selectedSection, selectedSubSection, onSelect }) {
  const isActive = selectedSection === section.id
  const [isExpanded, setIsExpanded] = useState(isActive)

  const handleToggle = useCallback(() => {
    if (section.subSections?.length) {
      setIsExpanded(prev => !prev)
    }
    onSelect(section.id)
  }, [section.id, section.subSections, onSelect])

  const handleSubSelect = useCallback((subId) => {
    onSelect(section.id, subId)
  }, [section.id, onSelect])

  return (
    <div className="mb-0.5">
      <button
        onClick={handleToggle}
        className={`
          w-full text-left px-4 py-2.5 text-sm flex items-center justify-between
          transition-colors rounded-lg mx-1 cursor-pointer
          ${isActive
            ? 'bg-blue-50 text-blue-700 font-semibold'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }
        `}
      >
        <span className="flex items-center gap-2 pr-2">
          <span className="text-xs opacity-50">{section.icon || '📄'}</span>
          <span className="leading-snug">{section.title}</span>
        </span>
        {section.subSections?.length > 0 && (
          <svg
            className={`w-4 h-4 shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {/* Sub-sections */}
      {isExpanded && section.subSections?.length > 0 && (
        <div className="ml-6 mt-0.5 border-l-2 border-slate-200 pl-2">
          {section.subSections.map(sub => (
            <button
              key={sub.id}
              onClick={() => handleSubSelect(sub.id)}
              className={`
                w-full text-left px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer
                ${selectedSubSection === sub.id && selectedSection === section.id
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }
              `}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const MemoizedSidebarItem = memo(SidebarItem)

function Sidebar({ sections, selectedSection, selectedSubSection, onSelect }) {
  return (
    <nav className="py-3 px-2">
      <div className="px-4 py-2 mb-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">目次</p>
      </div>
      {sections.map(section => (
        <MemoizedSidebarItem
          key={section.id}
          section={section}
          selectedSection={selectedSection}
          selectedSubSection={selectedSubSection}
          onSelect={onSelect}
        />
      ))}
    </nav>
  )
}

export default memo(Sidebar)
