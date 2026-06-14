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
        descriptionZh="课题组承担国家重点研发计划、国家自然科学基金及工程合作项目，推动水泥混凝土化学功能材料从机理研究走向工程应用。"
        descriptionEn="The group undertakes national research programs, NSFC projects, and industrial collaborations to connect materials chemistry with engineering practice."
        image="/images/news-defense.jpg"
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle titleZh="承担项目" titleEn="Funded Projects and Industrial Collaborations" />
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={`${project.sponsorZh}-${project.titleZh}`} className="grid gap-4 rounded border border-slate-200 bg-cement p-5 md:grid-cols-[180px_1fr_130px] md:items-start">
                <div>
                  <div className="text-sm font-semibold text-mineral">{project.categoryZh}</div>
                  <div className="mt-1 text-xs text-slate-500">{project.categoryEn}</div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold leading-7 text-ink">{project.titleZh}</h2>
                  <p className="mt-2 text-sm text-slate-600">{project.sponsorZh}</p>
                </div>
                <div className="text-sm font-semibold text-clay md:text-right">{project.period}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
