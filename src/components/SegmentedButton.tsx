type SegmenetedButtonProps = {
  active: string;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SegmenetedButton({
  active,
  onButtonClick,
}: SegmenetedButtonProps) {
  const phoneActive = active === "phone" ? "text-white" : "text-lavendar";
  const watchActive = active === "watch" ? "text-white" : "text-lavendar";

  return (
    <div className="align-center relative flex flex-row justify-center rounded-full border border-solid border-lavendar bg-steel">
      {/* background of active item */}
      <div
        className={`duration-250 linear absolute top-0 h-full w-1/2 rounded-full bg-white transition-all ${
          active === "phone" ? "left-1/2" : "left-0"
        }`}
      />
      <button
        className={`flex-1 rounded-full bg-transparent ${phoneActive} z-10`}
        onClick={onButtonClick}
      >
        Phone
      </button>
      <button
        className={`flex-1 rounded-full bg-transparent ${watchActive} z-10`}
        onClick={onButtonClick}
      >
        Watch
      </button>
    </div>
  );
}
