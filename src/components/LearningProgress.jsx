import ToLearnIcon from "../icons/ToLearnIcon";
import InProgressIcon from "../icons/InProgressIcon";
import DoneIcon from "../icons/DoneIcon";

function LearningStep({ text, children, textStyle }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      {children}
      <strong className={textStyle}>{text}</strong>
    </div>
  );
}

export default function LearningProgress({ learningStep }) {
  switch (learningStep) {
    case 0:
      return (
        <LearningStep textStyle="" text="To be learned">
          <ToLearnIcon className="size-5" />
        </LearningStep>
      );
    case 1:
      return (
        <LearningStep textStyle="text-[#f1ea1e]" text="In progress">
          <InProgressIcon className="size-5" />
        </LearningStep>
      );
    case 2:
      return (
        <LearningStep textStyle="text-[#46c224]" text="Done">
          <DoneIcon className="size-5" />
        </LearningStep>
      );
  }
}
