import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.nameZh} | ${site.nameEn}`,
    template: `%s | ${site.nameEn}`
  },
  description: site.descriptionEn,
  openGraph: {
    title: `${site.nameZh} | ${site.nameEn}`,
    description: site.descriptionEn,
    url: `https://${site.domain}`,
    siteName: site.nameEn,
    images: [{ url: "/images/hero-lab-discussion.jpg", width: 1600, height: 900 }],
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
