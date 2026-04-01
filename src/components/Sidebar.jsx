import { useState, useEffect, memo, useCallback } from 'react'

function SidebarItem({ section, selectedSection, selectedSubSection, onSelect, index }) {
  const isActive = selectedSection === section.id
  const [isExpanded, setIsExpanded] = useState(isActive)

  // Auto-expand when this section becomes active
  useEffect(() => {
    if (isActive && section.subSections?.length) {
      setIsExpanded(true)
    }
  }, [isActive, section.subSections])

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
          w-full text-left px-3 py-2.5 text-sm flex items-center justify-between gap-2
          transition-all duration-150 rounded-lg cursor-pointer group
          ${isActive
            ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm shadow-blue-100'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }
        `}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          <span className="text-base shrink-0">{section.icon || '📄'}</span>
          <span className="leading-snug truncate">{section.title}</span>
        </span>
        {section.subSections?.length > 0 && (
          <svg
            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 text-slate-400 group-hover:text-slate-600 ${isExpanded ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {/* Sub-sections with animation */}
      {isExpanded && section.subSections?.length > 0 && (
        <div className="ml-5 mt-0.5 border-l-2 border-slate-200 pl-3 py-0.5 space-y-0.5">
          {section.subSections.map(sub => (
            <button
              key={sub.id}
              onClick={() => handleSubSelect(sub.id)}
              className={`
                w-full text-left px-3 py-1.5 text-xs rounded-md transition-all duration-150 cursor-pointer
                ${selectedSubSection === sub.id && selectedSection === section.id
                  ? 'bg-blue-50 text-blue-600 font-medium'
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
    <nav className="py-2 px-2">
      <div className="px-3 py-2 mb-1">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">目次</p>
      </div>
      {sections.map((section, index) => (
        <MemoizedSidebarItem
          key={section.id}
          section={section}
          selectedSection={selectedSection}
          selectedSubSection={selectedSubSection}
          onSelect={onSelect}
          index={index}
        />
      ))}
    </nav>
  )
}

export default memo(Sidebar)
