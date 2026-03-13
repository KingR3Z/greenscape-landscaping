"use client";

interface CTALinkProps {
  label: string;
  href: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTALink({
  label,
  href,
  variant = "dark",
  size = "md",
  className = "",
}: CTALinkProps) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-lg md:text-xl lg:text-2xl",
    lg: "text-2xl md:text-3xl",
  };

  const colorClasses = {
    light: "text-white",
    dark: "text-[#212123]",
  };

  return (
    <a
      href={href}
      className={`cta-link ${sizeClasses[size]} ${colorClasses[variant]} ${className}`}
      data-cursor="link"
    >
      <span>{label}</span>
      <span className="cta-separator" />
      <span className="cta-arrow">→</span>
    </a>
  );
}
