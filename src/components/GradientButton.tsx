type GradientButtonProps = {
  children: React.ReactNode;
};

export default function GradientButton({ children }: GradientButtonProps) {
  return (
    <div className="mt-4 inline-flex rounded-full bg-funky px-1 py-1">
      <div className="rounded-full bg-white px-4 py-2">{children}</div>
    </div>
  );
}
