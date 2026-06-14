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
        descriptionZh="课题组围绕水泥混凝土化学功能材料，连接有机高分子、无机水化产物、微纳结构和宏观工程性能。"
        descriptionEn="The research portfolio connects chemical functional materials, polymer-cement interactions, microstructure, and engineering performance."
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
            introZh="研究页面第一版只呈现经材料支持的方向性描述；具体仪器、平台、项目编号和成果数据需在正式发布前逐项核对。"
            introEn="The first version presents only source-supported research positioning. Facilities, project numbers, and quantitative achievements should be verified before public release."
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
