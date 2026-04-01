import { memo, useEffect, useRef } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

function ContentPanel({ section, selectedSubSection }) {
  const subRef = useRef(null)

  useEffect(() => {
    if (selectedSubSection && subRef.current) {
      const el = document.getElementById(`sub-${selectedSubSection}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedSubSection])

  if (!section) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        <p>セクションを選択してください</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 lg:px-10">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
          <span>{section.icon || '📄'}</span>
          <span>{section.category || 'コンテンツ'}</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h1>
        {section.description && (
          <p className="text-slate-600 text-lg leading-relaxed">{section.description}</p>
        )}
      </div>

      {/* Section Content Blocks */}
      {section.content?.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}

      {/* Sub-sections */}
      {section.subSections?.map(sub => (
        <div key={sub.id} id={`sub-${sub.id}`} ref={selectedSubSection === sub.id ? subRef : null} className="mt-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            {sub.title}
          </h2>
          {sub.description && (
            <p className="text-slate-600 mb-4">{sub.description}</p>
          )}
          {sub.content?.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </div>
      ))}
    </div>
  )
}

const ContentBlock = memo(function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{block.text}</h3>

    case 'paragraph':
      return <p className="text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap">{block.text}</p>

    case 'english':
      return (
        <div className="bg-blue-50 border-l-4 border-blue-400 px-5 py-4 mb-4 rounded-r-lg">
          <p className="text-xs font-semibold text-blue-500 mb-1">Original (English)</p>
          <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.text}</p>
        </div>
      )

    case 'japanese':
      return (
        <div className="bg-emerald-50 border-l-4 border-emerald-400 px-5 py-4 mb-4 rounded-r-lg">
          <p className="text-xs font-semibold text-emerald-500 mb-1">日本語解説</p>
          <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.text}</p>
        </div>
      )

    case 'bilingual':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 px-5 py-4 rounded-r-lg">
            <p className="text-xs font-semibold text-blue-500 mb-1">Original (English)</p>
            <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{block.english}</p>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-400 px-5 py-4 rounded-r-lg">
            <p className="text-xs font-semibold text-emerald-500 mb-1">日本語解説</p>
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
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-4">
          <p className="text-xs font-semibold text-amber-600 mb-1">📝 Note</p>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{block.text}</p>
        </div>
      )

    case 'list':
      return (
        <ul className="list-disc pl-6 mb-4 space-y-1">
          {block.items.map((item, i) => (
            <li key={i} className="text-slate-700 leading-relaxed">{item}</li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-slate-200 rounded-lg text-sm">
            {block.headers && (
              <thead>
                <tr className="bg-slate-100">
                  {block.headers.map((h, i) => (
                    <th key={i} className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows?.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-slate-200 px-4 py-2 text-slate-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'divider':
      return <hr className="border-slate-200 my-6" />

    default:
      return null
  }
})

export default memo(ContentPanel)
