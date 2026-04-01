import { memo, useState } from 'react'

/**
 * ImagePlaceholder component
 *
 * 画像の差し替え手順:
 * 1. 資料から図をキャプチャ / エクスポート
 * 2. /public/images/{imageId} として保存
 * 3. 自動的にプレースホルダーが画像に置き換わります
 *
 * コード内の imageId コメントで「どの画像を入れるべきか」を確認できます。
 */
function ImagePlaceholder({ imageId, alt, caption, description }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const imageSrc = imageId ? `${import.meta.env.BASE_URL}images/${imageId}` : null

  const showPlaceholder = !imageSrc || imageError || !imageLoaded

  return (
    <figure className="my-6">
      {/* Image container */}
      <div className={`relative overflow-hidden rounded-lg border-2 ${showPlaceholder ? 'border-dashed border-slate-300 bg-slate-50' : 'border-solid border-slate-200'}`}>
        {/* Actual image (hidden until loaded) */}
        {imageSrc && !imageError && (
          <img
            src={imageSrc}
            alt={alt}
            className={`max-w-full h-auto block mx-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}

        {/* Placeholder - shown when image is missing or not loaded */}
        {showPlaceholder && (
          <div className="flex flex-col items-center justify-center gap-3 min-h-[200px] w-full py-8 px-4">
            <svg className="w-14 h-14 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-center">
              {/* <!-- [画像：ここに資料の図を挿入] --> */}
              <p className="text-slate-400 text-sm font-medium mb-1">
                [画像：ここに資料の図を挿入]
              </p>
              {imageId && (
                <p className="text-slate-300 text-xs font-mono">
                  {/* <!-- 配置先: /public/images/{imageId} --> */}
                  /public/images/{imageId}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="text-center text-sm text-slate-500 mt-2.5 italic">
          {caption}
        </figcaption>
      )}

      {/* 図の言語化: 画像がなくても内容が100%理解できる解説 */}
      {description && (
        <div className="mt-3 bg-gradient-to-r from-slate-50 to-slate-100/50 border border-slate-200 rounded-lg px-5 py-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs font-semibold text-slate-400">図の解説</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{description}</p>
        </div>
      )}
    </figure>
  )
}

export default memo(ImagePlaceholder)
