interface ArrowSvgProps {
  isOpen: boolean;
  className: string;
}

export default function ArrowSvg({ isOpen, className }: ArrowSvgProps) {
  return (
    <span>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        role="img"
        className={`${className}${isOpen ? ` rotate-180` : ''}`}
      >
        <path
          stroke="none"
          d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z"
        ></path>
      </svg>
    </span>
  );
}
