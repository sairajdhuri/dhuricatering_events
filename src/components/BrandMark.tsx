import Link from "next/link";

type BrandMarkProps = {
  footer?: boolean;
};

export default function BrandMark({ footer = false }: BrandMarkProps) {
  return (
    <Link className={`brand-mark${footer ? " brand-mark--footer" : ""}`} href="/" aria-label="Dhuri home">
      <span className="brand-mark__monogram" aria-hidden="true">D</span>
      <span className="brand-mark__words">
        <strong>Dhuri</strong>
        <small>Catering &amp; Decorations</small>
      </span>
    </Link>
  );
}

