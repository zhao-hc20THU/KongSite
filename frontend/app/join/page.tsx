import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Join Cement and Polymer Kong's Lab."
};

export default function JoinPage() {
  const audiences = [
    ["博士生 / PhD Students", "围绕水泥化学、化学外加剂、功能高分子材料和工程应用开展系统研究。"],
    ["硕士生 / Master Students", "适合对材料化学、建筑材料测试和工程应用感兴趣的同学。"],
    ["博士后与访问学者 / Postdocs and Visitors", "欢迎在胶凝材料、聚合物材料、微结构表征或工程耐久性方面开展合作。"]
  ];

  return (
    <>
      <PageHero
        titleZh="加入我们"
        titleEn="Join Us"
        descriptionZh="欢迎对水泥混凝土化学功能材料、建筑高分子材料和可持续土木工程材料感兴趣的同学与合作者联系。"
        descriptionEn="Students and collaborators interested in cement chemistry, construction polymers, and sustainable civil engineering materials are welcome to join academic exchange with the group."
        image="/images/hero-lab-discussion.jpg"
      />
      <section className="section-pad bg-white">
        <div className="page-shell">
          <SectionTitle
            titleZh="开放方向"
            titleEn="Opportunities"
            introZh="具体招生名额、申请流程和奖助政策请以后续正式通知为准。"
            introEn="Openings, application procedures, and funding details should be confirmed through official notices."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map(([title, body]) => (
              <article key={title} className="rounded border border-slate-200 bg-cement p-6">
                <h2 className="text-xl font-semibold text-ink">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
          <a className="mt-8 inline-flex rounded bg-mineral px-5 py-3 text-sm font-semibold text-white hover:bg-ink" href={`mailto:${site.email}`}>
            Email: {site.email}
          </a>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded border border-slate-200 bg-cement p-5">
              <h2 className="text-lg font-semibold text-ink">联系地址 / Address</h2>
              <p className="mt-3 text-sm text-slate-700">{site.addressZh}</p>
              <p className="mt-1 text-sm text-slate-600">{site.addressEn}</p>
            </div>
            <div className="rounded border border-slate-200 bg-cement p-5">
              <h2 className="text-lg font-semibold text-ink">教师主页 / Faculty Profile</h2>
              <a href={site.profileUrl} target="_blank" rel="noreferrer" className="mt-3 block text-sm text-mineral hover:underline">
                {site.profileUrl}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
