import { useState } from 'react';
import type { QuizQuestion } from './quiz-config';

interface QuizStepProps {
  question: QuizQuestion;
  onAnswer: (answer: string | string[]) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function QuizStep({ question, onAnswer, onBack, canGoBack }: QuizStepProps) {
  const [selectedSingle, setSelectedSingle] = useState<string>('');
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);

  const handleSingleSelect = (value: string) => {
    setSelectedSingle(value);

    // Add bling effect
    const button = document.querySelector(`[data-value="${value}"]`);
    button?.classList.add('bling-effect');

    // Auto-advance for single choice
    setTimeout(() => {
      onAnswer(value);
    }, 400);
  };

  const handleMultipleToggle = (value: string) => {
    setSelectedMultiple(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleMultipleSubmit = () => {
    if (selectedMultiple.length > 0) {
      onAnswer(selectedMultiple);
    }
  };

  return (
    <div className="card mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-brand font-bold text-neutral-900 mb-2">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.type === 'single' && question.options?.map(option => (
          <button
            key={option.value}
            data-value={option.value}
            onClick={() => handleSingleSelect(option.value)}
            className={`
              w-full p-6 rounded-xl text-left transition-all transform
              border-2 hover:border-primary hover:shadow-lg hover:scale-[1.02]
              ${selectedSingle === option.value
                ? 'border-primary bg-orange-50 shadow-md'
                : 'border-neutral-200 bg-white'
              }
            `}
          >
            <div className="flex items-center gap-4">
              {option.icon && (
                <span className="text-4xl transition-transform">{option.icon}</span>
              )}
              <div className="flex-1">
                <div className="font-semibold text-neutral-900">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-neutral-600 mt-1">{option.description}</div>
                )}
              </div>
              {selectedSingle === option.value && (
                <span className="text-2xl">✓</span>
              )}
            </div>
          </button>
        ))}

        {question.type === 'multiple' && question.options?.map(option => (
          <label
            key={option.value}
            className={`
              block w-full p-6 rounded-xl cursor-pointer transition-all transform
              border-2 hover:border-primary hover:shadow-lg hover:scale-[1.02]
              ${selectedMultiple.includes(option.value)
                ? 'border-primary bg-orange-50 shadow-md pulse-success'
                : 'border-neutral-200 bg-white'
              }
            `}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={selectedMultiple.includes(option.value)}
                onChange={() => handleMultipleToggle(option.value)}
                className="w-6 h-6 text-primary focus:ring-primary rounded border-2 border-neutral-300 transition-all"
              />
              {option.icon && (
                <span className="text-3xl transition-transform">{option.icon}</span>
              )}
              <div className="flex-1">
                <div className="font-semibold text-neutral-900">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-neutral-600 mt-1">{option.description}</div>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        {canGoBack ? (
          <button
            onClick={onBack}
            className="px-6 py-3 text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
          >
            ← Zurück
          </button>
        ) : (
          <div />
        )}

        {question.type === 'multiple' && (
          <button
            onClick={handleMultipleSubmit}
            disabled={selectedMultiple.length === 0}
            className={`
              px-8 py-3 rounded-full font-medium transition-all btn
              ${selectedMultiple.length > 0
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }
            `}
          >
            Weiter →
          </button>
        )}
      </div>
    </div>
  );
}
