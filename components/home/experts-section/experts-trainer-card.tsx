import { Image } from "@imagekit/next";

export default function ExpertsTrainerCard({
  name,
  title,
  description,
  ikimage,
  studies,
  imageClassName,
}: {
  name: string;
  title: string;
  description: string;
  ikimage: string;
  studies: string[];
  imageClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-8 bg-accent rounded-4xl shadow-lg shadow-accent-foreground/80">
      <div className="relative h-126 rounded-2xl overflow-hidden ">
        <Image
          src={ikimage}
          alt="Portrait of trainer Valia in a serene studio setting"
          fill
          className={`object-cover hover:scale-105 transition-transform duration-500 ${imageClassName}`}
        />
      </div>
      <div className="p-4">
        <h4 className="text-3xl font-medium mb-2">{name}</h4>
        <p className="text-primary font-medium tracking-widest uppercase text-xs mb-6">
          {title}
        </p>
        <p className="text-on-surface-variant font-light leading-relaxed mb-6">
          {description}
        </p>
        <ul className="flex list-disc flex-wrap gap-8 pl-4">
          {studies.map((study, index) => (
            <li key={index} className="rounded-full text-sm font-medium">
              {study}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
