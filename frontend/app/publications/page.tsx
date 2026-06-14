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
        descriptionZh="本页整理孔祥明课题组在水泥化学、化学外加剂、建筑高分子材料和水泥基材料性能调控方面的代表性论文。"
        descriptionEn="This page lists representative publications on cement chemistry, chemical admixtures, construction polymers, and performance regulation of cement-based materials."
      />
      <section className="section-pad bg-cement">
        <div className="page-shell">
          <SectionTitle
            titleZh="代表性论文"
            titleEn="Selected Publications"
            introZh="论文题名链接至 DOI 页面，可进一步查看期刊页面、摘要和出版信息。"
            introEn="Publication titles link to DOI pages for journal records, abstracts, and publisher information."
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
