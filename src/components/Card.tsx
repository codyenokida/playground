type CardProps = {
  title: string;
};

export default function Card({ title }: CardProps) {
  return (
    <div className="border-gray-200 bg-dark rounded-md border p-6 shadow-md w-full h-full">
      {title}
    </div>
  );
}
