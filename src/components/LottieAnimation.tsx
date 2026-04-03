"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottieAnimationProps {
  readonly src: string;
  readonly loop?: boolean;
  readonly autoplay?: boolean;
  readonly style?: React.CSSProperties;
  readonly className?: string;
}

export default function LottieAnimation({
  src,
  loop = true,
  autoplay = true,
  style,
  className,
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data: Record<string, unknown>) => setAnimationData(data))
      .catch(() => {
        // Silently fail — animation just won't render
      });
  }, [src]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
    />
  );
}
