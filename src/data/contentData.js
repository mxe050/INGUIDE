/**
 * INGUIDE コンテンツデータ
 *
 * M1〜M4.txtの原文テキストを読み込み、パースしてcontentData形式に変換する
 */

import m1Raw from './1/M1.txt?raw'
import m2Raw from './2/M2.txt?raw'
import m3Raw from './3/M3.txt?raw'
import m4Raw from './4/M4.txt?raw'
import { buildModuleData } from '../utils/parseContent'
import { quizData } from './quizData'

// モジュールメタ情報
const moduleInfo = [
  {
    number: 1,
    title: 'Module 1：学習目標と概要・ガイドラインプロセス・利益相反',
    icon: '📘',
    description: 'INGUIDEプログラムの導入。ガイドラインの定義、推奨の構造、信頼性の高いガイドラインの6原則、GIN-McMasterチェックリスト、ガイドラインプロセスに関わる人々、グループメンバーシップ、消費者・ステークホルダーの関与、利益相反の管理について学びます。',
    raw: m1Raw,
  },
  {
    number: 2,
    title: 'Module 2：ガイドライン開発プロセスとアウトカム',
    icon: '📗',
    description: 'ガイドライン開発プロセスの詳細。GIN-McMasterチェックリスト、ガイドラインと質問、適切な質問の生成、PICOフレームワーク、アウトカムの選定と重要度の評価について学びます。',
    raw: m2Raw,
  },
  {
    number: 3,
    title: 'Module 3：健康上の利益と害・システマティックレビュー・エビデンスの要約',
    icon: '📙',
    description: '健康上の利益と害のバランス、GRADEワーキンググループプロセス、システマティックレビューとメタアナリシス、エビデンスの確実性の判定について学びます。',
    raw: m3Raw,
  },
  {
    number: 4,
    title: 'Module 4：推奨の作成・推奨の種類・報告とピアレビュー',
    icon: '📕',
    description: '推奨の作成プロセス、推奨の方向性と強さ、条件付き推奨と強い推奨、Evidence to Decisionフレームワーク、投票とコンセンサス、推奨の文言、グッドプラクティスステートメント、報告・普及・更新について学びます。',
    raw: m4Raw,
  },
]

// 全モジュールをパースしてcontentDataを構築
function buildAllContent() {
  const welcomeEntry = {
    id: 'welcome',
    title: 'はじめに',
    icon: '🏠',
    category: 'ガイド',
    description: 'INGUIDE 学習アプリへようこそ。INGUIDE（International Guideline Development）プログラム Level 1の復習アプリです。INGUIDEの学習は、「https://inguide.org/」で行ってから、復習に使用してください。',
    moduleNumber: 0,
    content: [
      { type: 'heading', text: 'INGUIDE学習アプリの使い方' },
      { type: 'paragraph', text: 'このアプリでは、INGUIDEプログラム Level 1の4つのモジュールの学習資料を日本語で閲覧できます。各モジュールは複数のパートに分かれており、左側のサイドバーから選択して学習を進めることができます。' },
      { type: 'paragraph', text: '**注意：図は、場所が違う場合があります。**' },
      {
        type: 'list',
        items: [
          '左のサイドバーからモジュール・セクションを選択して学習を開始',
          'サブセクションをクリックして詳細な内容にジャンプ',
          '💡マークの補足情報をクリックして追加の解説を展開',
          '📖マークのGRADEBookからの解説をクリックしてGRADEBookの追加解説を展開',
          'モバイルではハンバーガーメニューからナビゲーション',
        ],
      },
      { type: 'divider' },
      { type: 'heading', text: 'モジュール構成' },
      {
        type: 'ordered-list',
        items: [
          '**Module 1** — 学習目標と概要・ガイドラインプロセス・利益相反への配慮',
          '**Module 2** — ガイドライン開発プロセスとアウトカム',
          '**Module 3** — 健康上の利益と害・システマティックレビュー・エビデンスの要約',
          '**Module 4** — 推奨の作成・推奨の種類・報告とピアレビュー',
        ],
      },
      { type: 'divider' },
      { type: 'heading', text: 'INGUIDEプログラムについて' },
      { type: 'paragraph', text: 'INGUIDEプログラムは、Guidelines International Network（GIN）とMcMaster大学GRADEセンター（McGRADE）の共同により開発された、ガイドライン開発の資格認定・認証プログラムです。Level 1は「ガイドラインパネルメンバー（ガイドライン開発グループメンバー）」の役割に焦点を当てたコースです。' },
    ],
    subSections: [],
  }

  const allEntries = [welcomeEntry]

  for (const info of moduleInfo) {
    const entries = buildModuleData(info.raw, info.number, info)
    allEntries.push(...entries)

    // モジュール末尾にクイズセクションを追加
    const quiz = quizData.find(q => q.moduleNumber === info.number)
    if (quiz) {
      allEntries.push({
        id: `quiz-module-${info.number}`,
        title: quiz.title,
        icon: '📝',
        category: `Module ${info.number} クイズ`,
        description: quiz.description,
        moduleNumber: info.number,
        isQuiz: true,
        quiz: quiz,
        content: [],
        subSections: [],
      })
    }
  }

  return allEntries
}

export const contentData = buildAllContent()
