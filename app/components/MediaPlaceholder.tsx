import Image from 'next/image';

export default function MediaPlaceholder({
  label,
  src,
  images = [],
  fit = 'cover',
  tone = 'aqua',
  className = '',
}: {
  label: string;
  src: string | null;
  images?: string[];
  fit?: 'cover' | 'contain';
  tone?: 'aqua' | 'coral' | 'green';
  className?: string;
}) {
  return (
    <figure
      className={`media-placeholder media-placeholder--${tone} ${className}`}
      role="img"
      aria-label={label}
    >
      {images.length > 0 ? (
        <div className="media-image-grid" aria-hidden="true">
          {images.map((image) => (
            <span className="media-image-cell" key={image}>
              <Image src={image} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" />
            </span>
          ))}
        </div>
      ) : src ? (
        <Image src={src} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: fit }} />
      ) : (
        <div className="placeholder-content" aria-hidden="true">
          <span className="placeholder-kicker">Image placeholder</span>
          <strong>{label}</strong>
        </div>
      )}
    </figure>
  );
}