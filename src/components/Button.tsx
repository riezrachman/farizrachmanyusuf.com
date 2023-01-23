import clsx from "clsx";
import Link from "next/link";
import { UrlObject } from "url";

const SizeClassNames = {
  xs: "rounded px-2.5 py-1.5 text-xs",
  sm: "rounded-md px-3 py-2 text-sm",
  md: "rounded-md px-4 py-2 text-sm",
  lg: "rounded-md px-4 py-2 text-base",
  xl: "rounded-md px-6 py-3 text-base",
};

const VariantClassNames = {
  primary: "border-transparent bg-zinc-600 text-white hover:bg-zinc-700",
  secondary: "border-transparent bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
  outline:
    "border-zinc-900 bg-transparent text-black hover:bg-zinc-900 hover:border-transparent hover:text-white",
};

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  href?: string | UrlObject;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<any>;
}

export default function Button({
  size = "md",
  variant = "primary",
  type = "button",
  loading = false,
  disabled = false,
  rounded = false,
  href,
  target,
  children = "Default Button",
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={clsx(
          "inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 duration-300",
          SizeClassNames[size],
          VariantClassNames[variant],
          rounded ? "!rounded-full" : ""
        )}
        onClick={onClick}
      >
        {loading ? "Loading..." : children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 duration-300",
        SizeClassNames[size],
        VariantClassNames[variant],
        rounded ? "!rounded-full" : ""
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
