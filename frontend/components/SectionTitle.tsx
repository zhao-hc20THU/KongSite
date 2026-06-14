type SectionTitleProps = {
  eyebrow?: string;
  titleZh: string;
  titleEn: string;
  introZh?: string;
  introEn?: string;
};

export function SectionTitle({ eyebrow, titleZh, titleEn, introZh, introEn }: SectionTitleProps) {
  return (
    <div className="mb-9 max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-hydrate">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-normal text-ink md:text-4xl">{titleZh}</h2>
      <p className="mt-2 text-lg font-medium text-mineral">{titleEn}</p>
      {introZh ? <p className="mt-5 text-base leading-8 text-slate-700">{introZh}</p> : null}
      {introEn ? <p className="mt-3 text-sm leading-7 text-slate-600">{introEn}</p> : null}
    </div>
  );
}
