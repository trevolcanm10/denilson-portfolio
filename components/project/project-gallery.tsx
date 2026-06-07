import Image from "next/image";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface ProjectGalleryProps {
  images: GalleryItem[];
}

export function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      {images.map((item) => (
        <div
          key={item.image}
          className="overflow-hidden rounded-2xl border"
        >
          <div className="relative aspect-video">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}