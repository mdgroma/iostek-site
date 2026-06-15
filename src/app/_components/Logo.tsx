export default function Logo({
  size = 30,
  textClass = "text-xl",
}: {
  size?: number;
  textClass?: string;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <g transform="translate(16,16)">
          <rect x="-4.4" y="-14.4" width="8.8" height="28.8" rx="4" fill="#2BD4CD" transform="rotate(-45)" />
          <rect x="-4.4" y="-14.4" width="8.8" height="28.8" rx="4" fill="#0A7E78" transform="rotate(45)" />
          <circle r="3" fill="#fff" />
        </g>
      </svg>
      <span className={`${textClass} font-bold tracking-tight font-display`}>iOStek</span>
    </span>
  );
}
