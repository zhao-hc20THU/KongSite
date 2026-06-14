import Image from "next/image";

type PageHeroProps = {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  image?: string;
};

export function PageHero({ titleZh, titleEn, descriptionZh, descriptionEn, image = "/images/hero-group.jpg" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-30" aria-hidden="true" priority={false} />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
      <div className="page-shell relative py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">{titleEn}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-normal md:text-6xl">{titleZh}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100">{descriptionZh}</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{descriptionEn}</p>
      </div>
    </section>
  );
}
