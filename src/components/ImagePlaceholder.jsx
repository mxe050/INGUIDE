import { memo } from 'react'

/**
 * ImagePlaceholder component
 *
 * Usage:
 * - Place image files in /public/images/
 * - Set imageId to the filename (e.g., "fig1-1.png")
 * - The component will try to load /images/{imageId}
 * - If the image doesn't exist yet, it shows a dashed placeholder
 *
 * To replace a placeholder with a real image:
 * 1. Capture/export the figure from the source material
 * 2. Save it as /public/images/{imageId}
 * 3. The placeholder will automatically show the image
 */
function ImagePlaceholder({ imageId, alt, caption, description }) {
  // Construct the image path - images go in /public/images/
  const imageSrc = imageId ? `${import.meta.env.BASE_URL}images/${imageId}` : null

  return (
    <figure className="my-6">
      <div className="image-placeholder relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={alt}
            className="max-w-full h-auto rounded-lg"
            loading="lazy"
            onError={(e) => {
              // If image fails to load, show placeholder text
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        {/* Placeholder text - shown when image is missing */}
        <div
          className="flex flex-col items-center justify-center gap-2 min-h-[200px] w-full"
          style={{ display: imageSrc ? 'none' : 'flex' }}
        >
          <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-slate-400 text-sm font-medium">
            {/* <!-- [画像：ここに資料の図を挿入] --> */}
            [画像：ここに資料の図を挿入]
          </p>
          {imageId && (
            <p className="text-slate-300 text-xs">
              {/* <!-- ファイル名: /public/images/{imageId} --> */}
              ファイル: images/{imageId}
            </p>
          )}
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="text-center text-sm text-slate-500 mt-2 italic">
          {caption}
        </figcaption>
      )}

      {/* Description: 図の内容を文章で詳細に解説 */}
      {description && (
        <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
          <p className="text-xs font-semibold text-slate-400 mb-1">📊 図の解説</p>
          <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{description}</p>
        </div>
      )}
    </figure>
  )
}

export default memo(ImagePlaceholder)
