import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { people } from "@/content/people";

export const metadata: Metadata = {
  title: "People",
  description: "People page for Cement and Polymer Kong's Lab."
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        titleZh="团队成员"
        titleEn="People"
        descriptionZh="本页仅展示已由提供材料支持的信息；完整成员名单、照片和个人方向待正式确认后补充。"
        descriptionEn="This page displays only source-supported information. Full member profiles should be added after confirmation."
        image="/images/hero-group.jpg"
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle titleZh="负责人" titleEn="Principal Investigator" />
          <article className="grid gap-8 rounded border border-slate-200 bg-cement p-8 md:grid-cols-[220px_1fr]">
            <div className="flex h-48 items-center justify-center rounded bg-white text-center text-sm font-semibold text-mineral ring-1 ring-slate-200">
              Photo
              <br />
              TODO
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-ink">{people.principalInvestigator.nameZh}</h2>
              <p className="mt-1 text-lg font-medium text-mineral">{people.principalInvestigator.nameEn}</p>
              <p className="mt-4 text-base text-slate-700">{people.principalInvestigator.titleZh}</p>
              <p className="mt-1 text-sm text-slate-600">{people.principalInvestigator.titleEn}</p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700">{people.principalInvestigator.bioZh}</p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{people.principalInvestigator.bioEn}</p>
              <a className="mt-5 inline-flex text-sm font-semibold text-mineral hover:text-ink" href={`mailto:${people.principalInvestigator.email}`}>
                {people.principalInvestigator.email}
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="section-pad bg-cement">
        <div className="page-shell">
          <SectionTitle titleZh="成员分类" titleEn="Member Sections" />
          <div className="grid gap-4 md:grid-cols-2">
            {people.sections.map((section) => (
              <article key={section.titleEn} className="rounded border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-semibold text-ink">{section.titleZh}</h2>
                <p className="mt-1 text-sm font-medium text-mineral">{section.titleEn}</p>
                <p className="mt-4 text-sm text-slate-600">{section.noteZh}</p>
                <p className="mt-1 text-sm text-slate-500">{section.noteEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
