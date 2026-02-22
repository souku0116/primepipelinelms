import { Link } from "react-router-dom";
import clsx from "clsx";

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variantClasses = {
  primary:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-600 shadow-md hover:shadow-lg",
  secondary: "text-blue-700 bg-blue-50 hover:bg-blue-100 focus:ring-blue-600",
  outline:
    "text-slate-700 border border-slate-300 bg-white hover:bg-slate-50 focus:ring-blue-600",
  light:
    "text-slate-900 bg-white hover:bg-slate-100 focus:ring-white shadow-md hover:shadow-lg",
  outlineOnDark:
    "text-white border border-white/30 bg-white/10 hover:bg-white/15 focus:ring-white",
};

export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Link
      to={to}
      className={clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
