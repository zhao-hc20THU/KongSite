import type { Publication } from "@/content/publications";

export function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <article className="border-b border-slate-200 py-6">
      <div className="text-sm font-semibold text-mineral">{publication.year}</div>
      <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">
        <a href={publication.url} className="hover:text-mineral hover:underline" target="_blank" rel="noreferrer">
          {publication.title}
        </a>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{publication.authors}</p>
      <p className="mt-1 text-sm italic text-slate-600">
        {publication.journal}, {publication.year}. DOI:{" "}
        <a href={publication.url} className="text-mineral hover:underline" target="_blank" rel="noreferrer">
          {publication.doi}
        </a>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {publication.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
