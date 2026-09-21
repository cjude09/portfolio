import Image from "next/image";

export function ProjectVisual({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="project-visual">
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
