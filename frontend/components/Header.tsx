import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="page-shell flex min-h-20 items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.nameEn} home`}>
          <Image src="/images/logo-kong-blue.png" alt={`${site.nameEn} logo`} width={48} height={48} className="object-contain" />
          <div>
            <div className="text-base font-semibold leading-tight text-ink">{site.nameZh}</div>
            <div className="text-xs font-medium text-mineral">{site.shortName}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded px-1 py-2 hover:text-mineral focus:outline-none focus:ring-2 focus:ring-mineral">
              <span>{item.zh}</span>
              <span className="ml-1 text-xs text-slate-500">{item.en}</span>
            </Link>
          ))}
        </nav>
        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none rounded border border-slate-300 px-3 py-2 text-sm font-semibold text-mineral focus:outline-none focus:ring-2 focus:ring-mineral">
            Menu
          </summary>
          <nav className="absolute right-0 mt-3 w-56 rounded bg-white p-3 shadow-soft ring-1 ring-slate-200" aria-label="Mobile navigation">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-cement hover:text-mineral">
                {item.zh} / {item.en}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
