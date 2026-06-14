import type { ResearchDirection } from "@/content/research";

export function ResearchCard({ direction }: { direction: ResearchDirection }) {
  return (
    <article className="rounded border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-1 w-14 rounded bg-mineral" />
      <h3 className="text-xl font-semibold text-ink">{direction.titleZh}</h3>
      <p className="mt-1 text-sm font-medium text-mineral">{direction.titleEn}</p>
      <p className="mt-4 text-sm leading-7 text-slate-700">{direction.summaryZh}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{direction.summaryEn}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {direction.applications.map((item) => (
          <span key={item} className="rounded-full bg-cement px-3 py-1 text-xs font-medium text-slate-700">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
