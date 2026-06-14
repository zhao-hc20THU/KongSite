import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Representative engineering applications and project directions."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        titleZh="项目与应用"
        titleEn="Projects"
        descriptionZh="本页整理课题组材料中出现的工程应用方向，正式项目名称、项目编号和合作单位需后续核实。"
        descriptionEn="This page summarizes application directions visible in the supplied materials. Formal project titles, numbers, and partners should be verified."
        image="/images/news-defense.jpg"
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle titleZh="应用方向" titleEn="Application Directions" />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.titleEn} className="rounded border border-slate-200 bg-cement p-6">
                <h2 className="text-xl font-semibold text-ink">{project.titleZh}</h2>
                <p className="mt-1 text-sm font-medium text-mineral">{project.titleEn}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700">{project.summaryZh}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.summaryEn}</p>
                <p className="mt-5 text-xs font-semibold text-clay">{project.statusZh}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
