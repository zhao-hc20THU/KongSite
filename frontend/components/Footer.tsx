import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="page-shell grid gap-8 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href={site.profileUrl} className="text-xl font-semibold hover:text-sky-100" target="_blank" rel="noreferrer">
            {site.nameZh}
          </a>
          <div className="mt-1 text-sm text-slate-300">{site.nameEn}</div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{site.descriptionZh}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">{site.descriptionEn}</p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-200">联系方式 / Information</div>
          <a className="mt-4 block text-sm text-slate-300 hover:text-white" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-2 text-sm text-slate-300">{site.addressZh}</p>
          <p className="mt-1 text-sm text-slate-300">{site.addressEn}</p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-200">链接 / Links</div>
          <a className="mt-4 block text-sm text-slate-300 hover:text-white" href={site.profileUrl} target="_blank" rel="noreferrer">
            孔祥明教师主页 / Faculty Profile
          </a>
          <a className="mt-2 block text-sm text-slate-300 hover:text-white" href={site.departmentUrl} target="_blank" rel="noreferrer">
            清华大学土木工程系 / Department Website
          </a>
          <p className="mt-4 text-sm text-slate-300">{site.domain}</p>
          <p className="mt-2 text-xs text-slate-400">{site.icpPlaceholder}</p>
          <p className="mt-1 text-xs text-slate-400">{site.publicSecurityPlaceholder}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        Copyright © {new Date().getFullYear()} {site.nameEn}. Content should be verified before public release.
      </div>
    </footer>
  );
}
