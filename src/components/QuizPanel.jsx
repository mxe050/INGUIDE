import { memo, useState, useCallback } from 'react'

/**
 * クイズパネルコンポーネント
 * 各モジュールのクイズを表示し、回答と解説を提供する
 */
function QuizPanel({ quiz, moduleNumber }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState({})
  const [score, setScore] = useState(null)

  const handleSelect = useCallback((qIndex, optIndex) => {
    if (showResults[qIndex]) return // 回答済みなら変更不可
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }))
  }, [showResults])

  const handleCheck = useCallback((qIndex) => {
    setShowResults(prev => ({ ...prev, [qIndex]: true }))
  }, [])

  const handleCheckAll = useCallback(() => {
    const allResults = {}
    quiz.questions.forEach((_, i) => {
      if (answers[i] !== undefined) {
        allResults[i] = true
      }
    })
    setShowResults(allResults)

    // スコア計算
    let correct = 0
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) correct++
    })
    setScore({ correct, total: quiz.questions.length })
  }, [quiz, answers])

  const handleReset = useCallback(() => {
    setAnswers({})
    setShowResults({})
    setScore(null)
  }, [])

  const answeredCount = Object.keys(answers).length
  const totalQuestions = quiz.questions.length

  return (
    <div>
      {/* クイズヘッダー */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-5 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📝</span>
          <h3 className="text-lg font-bold text-indigo-800">{quiz.title}</h3>
        </div>
        <p className="text-sm text-indigo-600 mb-3">{quiz.description}</p>
        <div className="flex items-center gap-4 text-xs text-indigo-500">
          <span>全{totalQuestions}問</span>
          <span>回答済み: {answeredCount}/{totalQuestions}</span>
          {score && (
            <span className="font-bold text-indigo-700">
              スコア: {score.correct}/{score.total} ({Math.round((score.correct / score.total) * 100)}%)
            </span>
          )}
        </div>
      </div>

      {/* 質問リスト */}
      {quiz.questions.map((q, qIndex) => (
        <QuestionCard
          key={qIndex}
          question={q}
          qIndex={qIndex}
          selectedAnswer={answers[qIndex]}
          showResult={showResults[qIndex]}
          onSelect={handleSelect}
          onCheck={handleCheck}
          moduleNumber={moduleNumber}
        />
      ))}

      {/* 一括採点ボタン */}
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={handleCheckAll}
          disabled={answeredCount === 0}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          すべて採点する
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 cursor-pointer transition-colors"
        >
          リセット
        </button>
      </div>

      {/* スコア結果 */}
      {score && (
        <div className={`mt-6 p-5 rounded-xl border-2 ${
          score.correct / score.total >= 0.8
            ? 'bg-emerald-50 border-emerald-300'
            : score.correct / score.total >= 0.6
              ? 'bg-amber-50 border-amber-300'
              : 'bg-red-50 border-red-300'
        }`}>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">
              {score.correct / score.total >= 0.8 ? '🎉' : score.correct / score.total >= 0.6 ? '📚' : '💪'}
            </p>
            <p className="text-xl font-bold text-slate-800">
              {score.correct} / {score.total} 正解
              <span className="text-lg ml-2">({Math.round((score.correct / score.total) * 100)}%)</span>
            </p>
            <p className="text-sm text-slate-600 mt-2">
              {score.correct / score.total >= 0.8
                ? '素晴らしい結果です！よく理解できています。'
                : score.correct / score.total >= 0.6
                  ? '良い結果です。不正解の部分を復習しましょう。'
                  : '解説を確認して、該当セクションを復習しましょう。'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

const QuestionCard = memo(function QuestionCard({
  question, qIndex, selectedAnswer, showResult, onSelect, onCheck, moduleNumber,
}) {
  const isCorrect = selectedAnswer === question.correctIndex
  const hasAnswered = selectedAnswer !== undefined

  return (
    <div className={`mb-6 rounded-xl border-2 overflow-hidden transition-colors ${
      showResult
        ? isCorrect
          ? 'border-emerald-300 bg-emerald-50/30'
          : 'border-red-300 bg-red-50/30'
        : 'border-slate-200 bg-white'
    }`}>
      {/* 問題文 */}
      <div className="px-5 py-4 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            showResult
              ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
              : 'bg-slate-200 text-slate-600'
          }`}>
            {showResult ? (isCorrect ? '✓' : '✗') : qIndex + 1}
          </span>
          <p className="text-slate-800 font-medium leading-relaxed pt-1">{question.question}</p>
        </div>
      </div>

      {/* 選択肢 */}
      <div className="px-5 py-3 space-y-2">
        {question.options.map((opt, optIndex) => {
          const isSelected = selectedAnswer === optIndex
          const isCorrectOption = optIndex === question.correctIndex
          let optClass = 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/30'

          if (showResult) {
            if (isCorrectOption) {
              optClass = 'border-emerald-400 bg-emerald-50'
            } else if (isSelected && !isCorrectOption) {
              optClass = 'border-red-400 bg-red-50'
            } else {
              optClass = 'border-slate-200 opacity-60'
            }
          } else if (isSelected) {
            optClass = 'border-blue-400 bg-blue-50'
          }

          return (
            <button
              key={optIndex}
              onClick={() => onSelect(qIndex, optIndex)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all cursor-pointer disabled:cursor-default flex items-start gap-3 ${optClass}`}
            >
              <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5 ${
                showResult && isCorrectOption
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : showResult && isSelected && !isCorrectOption
                    ? 'border-red-500 bg-red-500 text-white'
                    : isSelected
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-slate-300 text-slate-400'
              }`}>
                {String.fromCharCode(65 + optIndex)}
              </span>
              <span className="text-sm text-slate-700 leading-relaxed">{opt}</span>
            </button>
          )
        })}
      </div>

      {/* 個別チェックボタン */}
      {!showResult && hasAnswered && (
        <div className="px-5 pb-3">
          <button
            onClick={() => onCheck(qIndex)}
            className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
          >
            回答を確認
          </button>
        </div>
      )}

      {/* 解説 */}
      {showResult && (
        <div className="px-5 pb-4">
          <div className="mt-2 bg-white/80 border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-bold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                {isCorrect ? '✅ 正解！' : '❌ 不正解'}
              </span>
              <span className="text-xs text-slate-400">
                正解: {String.fromCharCode(65 + question.correctIndex)}
              </span>
            </div>

            {/* 参照セクション */}
            {question.reference && (
              <div className="mb-3 inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Module {moduleNumber}「{question.reference}」参照
              </div>
            )}

            {/* 解説テキスト */}
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap mb-3">
              {question.explanation}
            </p>

            {/* 原文引用 */}
            {question.quote && (
              <div className="bg-emerald-50/80 border-l-4 border-emerald-400 px-4 py-3 rounded-r-lg">
                <p className="text-xs font-semibold text-emerald-600 mb-1">📖 該当箇所の原文</p>
                <p className="text-sm text-slate-700 leading-relaxed italic whitespace-pre-wrap">{question.quote}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
})

export default memo(QuizPanel)
