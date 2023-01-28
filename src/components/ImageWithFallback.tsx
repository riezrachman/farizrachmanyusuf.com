import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Image as ImageIcon } from "react-feather";

interface ImageWithFallbackProps {
  src?: string | null;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string;
  fill?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
}: ImageWithFallbackProps) {
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    setError(null);
  }, [src]);

  return src && !error ? (
    <Image
      src={src}
      alt={alt}
      onError={setError}
      width={width}
      height={height}
      className={className}
      fill={fill}
    />
  ) : (
    <div
      className={clsx(
        "object-cover bg-zinc-300 flex items-center justify-center text-zinc-700",
        className
      )}
    >
      <ImageIcon />
    </div>
  );
}
