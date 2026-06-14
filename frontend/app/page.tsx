import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SectionTitle } from "@/components/SectionTitle";
import { ResearchCard } from "@/components/ResearchCard";
import { PublicationItem } from "@/components/PublicationItem";
import { site } from "@/content/site";
import { researchDirections } from "@/content/research";
import { homeSelectedPublications } from "@/content/publications";
import { news } from "@/content/news";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="bg-ink text-white">
        <div className="page-shell grid gap-8 py-12 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">{site.affiliationEn}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-white md:text-6xl">{site.nameZh}</h1>
            <p className="mt-3 text-2xl font-medium text-sky-100 md:text-3xl">{site.nameEn}</p>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-white">{site.taglineZh}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">{site.descriptionEn}</p>
          </div>
          <div className="rounded border border-white/15 bg-white/8 p-6 shadow-soft backdrop-blur">
            <p className="text-sm leading-7 text-slate-100">{site.descriptionZh}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/research/" className="rounded bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-cement focus:outline-none focus:ring-2 focus:ring-white">
                Research Directions
              </Link>
              <Link href="/join/" className="rounded border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Research Identity"
            titleZh="从分子组成到工程应用"
            titleEn="From molecular composition to engineering performance"
            introZh="课题组采用有机-无机复合思想，从分子组成和微纳尺度结构出发，理解并改造水泥基材料的宏观工程性能。"
            introEn="The group connects chemical functional materials with cementitious microstructure, aiming to support sustainable and high-performance civil engineering materials."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {researchDirections.slice(0, 5).map((direction) => (
              <ResearchCard key={direction.id} direction={direction} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cement">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Selected Publications"
              titleZh="代表性论文"
              titleEn="Selected Publications"
              introZh="选取近八年引用量较高且方向分散的代表性成果，覆盖水化调控、新型胶凝材料和耐久性提升。"
            />
            <div className="rounded border border-slate-200 bg-white px-6">
              {homeSelectedPublications.map((publication) => (
                <PublicationItem key={publication.title} publication={publication} />
              ))}
            </div>
          </div>
          <aside className="rounded border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Recent News</h2>
            <div className="mt-5 space-y-5">
              {news.map((item) => (
                <article key={`${item.date}-${item.titleEn}`} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <div className="text-xs font-semibold uppercase tracking-wide text-hydrate">{item.date}</div>
                  <h3 className="mt-2 text-base font-semibold text-ink">{item.titleZh}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.summaryEn}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Projects"
            titleZh="承担项目"
            titleEn="Selected Projects and Collaborations"
            introZh="课题组承担国家重点研发计划、国家自然科学基金以及企业合作项目，围绕水泥化学功能材料和工程应用开展研究。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.slice(0, 6).map((project) => (
              <article key={`${project.sponsorZh}-${project.titleZh}`} className="rounded border border-slate-200 bg-cement p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-hydrate">{project.categoryZh}</div>
                <h3 className="mt-2 text-base font-semibold leading-7 text-ink">{project.titleZh}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {project.sponsorZh} · {project.period}
                </p>
              </article>
            ))}
          </div>
          <Link href="/projects/" className="mt-7 inline-flex rounded border border-mineral px-5 py-3 text-sm font-semibold text-mineral hover:bg-cement">
            View all projects
          </Link>
        </div>
      </section>

      <section className="section-pad bg-cement">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Image
            src="/images/hero-group.jpg"
            alt="Kong research group activity photo"
            width={900}
            height={675}
            className="aspect-[4/3] w-full rounded object-cover shadow-soft"
          />
          <div>
            <SectionTitle
              eyebrow="Join Us"
              titleZh="欢迎关注水泥化学与建筑高分子材料"
              titleEn="Open to students and collaborators in cement chemistry and construction polymers"
              introZh="课题组面向水泥化学、建筑材料、化学外加剂、功能高分子材料和工程应用等方向开展研究。招生与访问机会请以后续正式通知为准。"
              introEn="Students and collaborators interested in cement chemistry, chemical admixtures, functional polymers, and engineering applications are welcome to join academic exchange with the group."
            />
            <Link href="/join/" className="inline-flex rounded bg-mineral px-5 py-3 text-sm font-semibold text-white hover:bg-ink focus:outline-none focus:ring-2 focus:ring-mineral">
              Join Us / 加入我们
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
