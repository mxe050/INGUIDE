/**
 * 各モジュールフォルダから画像をロードするユーティリティ
 * Vite の import.meta.glob を使用して静的にバンドルする
 */

// 各フォルダの画像を eager import
const module1Images = import.meta.glob('../data/1/*.{jpg,jpeg,png}', { eager: true })
const module2Images = import.meta.glob('../data/2/*.{jpg,jpeg,png}', { eager: true })
const module3Images = import.meta.glob('../data/3/*.{jpg,jpeg,png}', { eager: true })
const module4Images = import.meta.glob('../data/4/*.{jpg,jpeg,png}', { eager: true })

// モジュール番号でインデックス化
const imageModules = {
  1: module1Images,
  2: module2Images,
  3: module3Images,
  4: module4Images,
}

/**
 * モジュール番号とファイル名から画像URLを取得する
 * @param {number} moduleNumber - モジュール番号 (1-4)
 * @param {string} filename - 画像ファイル名 (例: "figure_1.jpg")
 * @returns {string|null} - 画像のURL、見つからなければnull
 */
export function getImageUrl(moduleNumber, filename) {
  const images = imageModules[moduleNumber]
  if (!images) return null

  // パスのキーを検索
  const key = Object.keys(images).find(k => k.endsWith(`/${filename}`))
  if (!key) return null

  return images[key].default
}
