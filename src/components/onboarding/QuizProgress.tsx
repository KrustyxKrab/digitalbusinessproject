interface QuizProgressProps {
  progress: number;
  currentStep: number;
}

export default function QuizProgress({ progress, currentStep }: QuizProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-600">
          Schritt {currentStep}
        </span>
        <span className="text-sm font-medium text-neutral-600">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
