import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionTitle } from "@/components/SectionTitle";
import { researchDirections } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research directions of Cement and Polymer Kong's Lab."
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        titleZh="研究方向"
        titleEn="Research"
        descriptionZh="课题组围绕水泥混凝土化学功能材料，连接有机高分子、无机水化产物、微纳结构、宏观工程性能和工程应用。"
        descriptionEn="The research portfolio connects chemical functional materials, polymer-cement interactions, microstructure, engineering performance, and field applications."
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle titleZh="核心方向" titleEn="Core Directions" />
          <div className="grid gap-5 md:grid-cols-2">
            {researchDirections.map((direction) => (
              <ResearchCard key={direction.id} direction={direction} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-cement">
        <div className="page-shell">
          <SectionTitle
            titleZh="方法与证据链"
            titleEn="Methods and Evidence Chain"
            introZh="课题组将化学作用机制、微结构表征、宏观性能测试和工程应用反馈结合起来，形成从基础科学到工程技术的研究链条。"
            introEn="The group combines chemical mechanisms, microstructure characterization, macroscopic performance testing, and engineering feedback into a research chain from fundamental science to technology."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {["化学作用机制", "微结构与孔结构", "工程性能与应用反馈"].map((item) => (
              <div key={item} className="rounded border border-slate-200 bg-white p-6 text-base font-semibold text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
