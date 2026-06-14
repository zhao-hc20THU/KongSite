import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cement and Polymer Kong's Lab."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        titleZh="联系"
        titleEn="Contact"
        descriptionZh="欢迎围绕水泥混凝土化学功能材料、建筑高分子材料和相关工程应用进行学术交流。"
        descriptionEn="Academic exchange and collaboration around chemical functional materials for cement and concrete are welcome."
        image="/images/hero-group.jpg"
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle titleZh="联系方式" titleEn="Contact Information" />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded border border-slate-200 bg-cement p-6">
              <h2 className="text-xl font-semibold text-ink">Email</h2>
              <a className="mt-4 block text-mineral hover:text-ink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </article>
            <article className="rounded border border-slate-200 bg-cement p-6">
              <h2 className="text-xl font-semibold text-ink">Address</h2>
              <p className="mt-4 text-sm text-slate-700">{site.addressZh}</p>
              <p className="mt-2 text-sm text-slate-600">{site.addressEn}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
