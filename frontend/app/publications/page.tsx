import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PublicationItem } from "@/components/PublicationItem";
import { SectionTitle } from "@/components/SectionTitle";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Selected publication records for Cement and Polymer Kong's Lab."
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        titleZh="论文成果"
        titleEn="Publications"
        descriptionZh="第一版仅列出提供材料中明确出现的论文条目，不补造 DOI、卷期页码或通讯作者信息。"
        descriptionEn="The first version lists only records visible in the supplied materials and does not invent DOI, volume, pages, or authorship metadata."
      />
      <section className="section-pad bg-cement">
        <div className="page-shell">
          <SectionTitle
            titleZh="已录入条目"
            titleEn="Records Entered"
            introZh="请在正式上线前用完整论文清单替换或补全这些条目。"
            introEn="Replace or complete these records with a verified publication list before public release."
          />
          <div className="rounded border border-slate-200 bg-white px-6">
            {publications.map((publication) => (
              <PublicationItem key={publication.title} publication={publication} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
