import React, { useState, useRef, useEffect } from "react";

type DraggableWhiteCardProps = {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
};

const DraggableWhiteCard: React.FC<DraggableWhiteCardProps> = ({
  children,
  containerRef,
}: DraggableWhiteCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (container && card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      setPosition({
        x: (containerRect.width - cardRect.width) / 2,
        y: (containerRect.height - cardRect.height) / 2,
      });
    }
  }, [containerRef]);

  const handleMouseDown = (_e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    const card = cardRef.current;
    if (container && card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      let newX = position.x + e.movementX;
      let newY = position.y + e.movementY;

      newX = Math.max(0, Math.min(newX, containerRect.width - cardRect.width));
      newY = Math.max(
        0,
        Math.min(newY, containerRect.height - cardRect.height),
      );

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, position]);

  return (
    <div
      ref={cardRef}
      className="border-gray-200 bg-dark absolute cursor-move rounded-md border p-6 shadow-md"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableWhiteCard;
