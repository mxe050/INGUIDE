import { memo, useState, useCallback } from 'react'

const Sidebar = memo(function Sidebar({ data, selectedId, onSelect }) {
  const [expandedModules, setExpandedModules] = useState(() => {
    const expanded = {}
    for (const mod of data) {
      if (mod.sections.some((s) => s.id === selectedId)) {
        expanded[mod.id] = true
      }
    }
    return expanded
  })

  const toggleModule = useCallback((moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }))
  }, [])

  return (
    <nav className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-4 py-5 border-b border-slate-200">
        <h1 className="text-lg font-bold text-sky-700 tracking-wide">INGUIDE</h1>
        <p className="text-xs text-slate-400 mt-1">Level 1 Learning App</p>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto py-2">
        {data.map((mod) => (
          <ModuleItem
            key={mod.id}
            module={mod}
            isExpanded={!!expandedModules[mod.id]}
            selectedId={selectedId}
            onToggle={toggleModule}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-100 text-xs text-slate-400">
        © INGUIDE Learning
      </div>
    </nav>
  )
})

const ModuleItem = memo(function ModuleItem({
  module,
  isExpanded,
  selectedId,
  onToggle,
  onSelect,
}) {
  const handleToggle = useCallback(() => {
    onToggle(module.id)
  }, [onToggle, module.id])

  return (
    <div className="mb-1">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="text-base">{module.icon}</span>
        <span className="flex-1 truncate">{module.title}</span>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="ml-4 border-l-2 border-slate-100">
          {module.sections.map((section) => (
            <SectionItem
              key={section.id}
              section={section}
              isSelected={section.id === selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
})

const SectionItem = memo(function SectionItem({ section, isSelected, onSelect }) {
  const handleClick = useCallback(() => {
    onSelect(section.id)
  }, [onSelect, section.id])

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
        isSelected
          ? 'text-sky-700 bg-sky-50 font-medium border-l-2 border-sky-500 -ml-[2px]'
          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
      }`}
    >
      {section.title}
    </button>
  )
})

export default Sidebar
