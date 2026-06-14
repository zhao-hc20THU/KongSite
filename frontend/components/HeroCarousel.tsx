"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero-lab-discussion.jpg",
    alt: "Professor Kong discussing research with students in the laboratory",
    captionZh: "课题组讨论与实验室交流",
    captionEn: "Lab discussion and research exchange",
    position: "object-center"
  },
  {
    src: "/images/hero-group.jpg",
    alt: "Kong research group activity photo",
    captionZh: "课题组活动",
    captionEn: "Group activity",
    position: "object-[center_42%]"
  },
  {
    src: "/images/news-defense.jpg",
    alt: "Doctoral defense group photo from Kong's research group",
    captionZh: "学生培养与学术交流",
    captionEn: "Student training and academic exchange",
    position: "object-[center_34%]"
  }
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive(index);
  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <section className="relative bg-ink" aria-label="Group photo carousel">
      <div className="relative h-[52vh] min-h-[390px] overflow-hidden md:h-[62vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== active}
          >
            <Image src={slide.src} alt={slide.alt} fill priority={index === 0} sizes="100vw" className={`object-cover ${slide.position}`} />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 text-white md:p-8">
          <div className="page-shell flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-lg font-semibold">{slides[active].captionZh}</p>
              <p className="mt-1 text-sm text-slate-100">{slides[active].captionEn}</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={previous} className="rounded bg-white/90 px-3 py-2 text-sm font-semibold text-ink hover:bg-white">
                Prev
              </button>
              <div className="flex gap-2 px-2" aria-label="Choose slide">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.captionEn}`}
                    className={`h-2.5 w-8 rounded-full ${index === active ? "bg-white" : "bg-white/45"}`}
                  />
                ))}
              </div>
              <button type="button" onClick={next} className="rounded bg-white/90 px-3 py-2 text-sm font-semibold text-ink hover:bg-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
