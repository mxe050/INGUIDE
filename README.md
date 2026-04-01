# INGUIDE - 学習Webアプリケーション

パスワード認証付きの高密度学習Webアプリケーション。React + Tailwind CSS で構築。

## 機能

- **パスワード認証**: アプリ起動時にログイン画面を表示（セッション管理付き）
- **2カラムレイアウト**: 左に階層メニュー、右に詳細解説パネル
- **バイリンガル対応**: 英語原文と日本語解説を対照表示
- **画像プレースホルダー**: 図表の差し替え用枠 + テキストによる図の言語化
- **検索機能**: サイドバーのセクション検索
- **前後ナビゲーション**: セクション間の移動ボタン
- **レスポンシブ**: モバイル・タブレット・デスクトップ対応
- **パフォーマンス最適化**: React.lazy, React.memo, 画像遅延読み込み

## 技術スタック

- React 19
- Tailwind CSS 4
- Vite 8

## ローカル開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run preview
```

## デプロイ方法

### 方法A: GitHub Pages（無料）

1. GitHubでリポジトリ設定 → Pages → Source を「GitHub Actions」に変更
2. `.github/workflows/deploy.yml` が自動的にビルド＆デプロイを実行
3. `main` ブランチへの push で自動デプロイ
4. 公開URL: `https://<username>.github.io/INGUIDE/`

### 方法B: Vercel（無料）

1. [vercel.com](https://vercel.com) でGitHubリポジトリをインポート
2. `vercel.json` により自動設定される
3. 注意: Vercelの場合、`vite.config.js` の `base` を `'/'` に変更してください

```js
// vite.config.js (Vercel用)
base: '/',
```

## 画像の追加方法

1. 資料から図をキャプチャ
2. `/public/images/` フォルダに配置
3. `src/data/contentData.js` の `imageId` にファイル名を設定
4. アプリが自動的にプレースホルダーを画像に置換

## コンテンツの追加方法

`src/data/contentData.js` を編集してください。詳細なフォーマットはファイル内のコメントを参照。

```js
{
  id: 'section-id',
  title: 'セクション名',
  icon: '📘',
  category: 'カテゴリ',
  description: '概要',
  content: [
    { type: 'english', text: '英語原文' },
    { type: 'japanese', text: '日本語解説' },
    { type: 'bilingual', english: '英語', japanese: '日本語' },
    { type: 'image', imageId: 'fig1.png', caption: '図1', description: '図の解説' },
    { type: 'table', headers: ['列1'], rows: [['値1']] },
  ],
  subSections: [ ... ],
}
```
