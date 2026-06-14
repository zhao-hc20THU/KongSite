import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { news } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates of Cement and Polymer Kong's Lab."
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        titleZh="组内动态"
        titleEn="News"
        descriptionZh="用于发布论文、会议、招生、学生培养和工程应用进展。第一版包含网站建设记录和占位条目。"
        descriptionEn="This section can host publication news, conference activities, recruitment notices, student achievements, and application updates."
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle titleZh="最新动态" titleEn="Latest Updates" />
          <div className="space-y-5">
            {news.map((item) => (
              <article key={`${item.date}-${item.titleEn}`} className="rounded border border-slate-200 bg-cement p-6">
                <div className="text-sm font-semibold text-hydrate">{item.date}</div>
                <h2 className="mt-3 text-xl font-semibold text-ink">{item.titleZh}</h2>
                <p className="mt-1 text-sm font-medium text-mineral">{item.titleEn}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700">{item.summaryZh}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.summaryEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
