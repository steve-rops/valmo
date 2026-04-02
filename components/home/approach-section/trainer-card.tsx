import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Image as IKImage } from "@imagekit/next";
import Link from "next/link";

export default function TrainerCard({
  image,
  title,
  name,
  description,
  link,
  cta,
  ikimage,
  photoIsRight,
  bgImageTransparency = 60,
}: {
  ikimage: string;
  photoIsRight: boolean;
  image: string;
  cta: string;
  title: string;
  name: string;
  description: string;
  link: string;
  bgImageTransparency?: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2.5rem]">
      <div className="absolute inset-0 w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700">
        <Image
          src={image}
          alt="Serene pilates studio with reformer equipment"
          fill
          sizes="100vw"
          className="object-cover brightness-75"
        />
        <div
          className={`bg-black/${bgImageTransparency} absolute w-full h-full`}
        />
      </div>

      <div className="relative z-10 py-8 px-4 md:px-12 md:py-12 text-white w-full">
        <div
          className={`flex flex-col gap-8 w-full justify-between items-center ${photoIsRight ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <div className="max-w-xl">
            <h3 className="text-4xl font-medium mb-6">
              {title}{" "}
              <span className="hidden md:inline text-secondary underline text-2xl">
                with {name}
              </span>
            </h3>
            <p className="text-lg text-balanced font-light text-white/90 leading-relaxed mb-8">
              {description}
            </p>
            <Link
              href={link}
              className="inline-flex items-center gap-2 text-white font-semibold tracking-wide uppercase text-sm border-b-2 border-white/30 pb-1 hover:border-white transition-all"
            >
              {cta}
              <ArrowRight />
            </Link>
          </div>

          <div className="hidden md:block relative h-96 w-1/4 aspect-2/3">
            <IKImage
              src={ikimage}
              alt="Serene pilates studio with reformer equipment"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
