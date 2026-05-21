import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HomeData } from "@/services/home.service";

type AboutIWMCProps = Pick<HomeData, "about_iwmc">;

export function AboutIWMC({ about_iwmc }: AboutIWMCProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#010816]">
      <div className="absolute inset-0 z-0">
        <Image
          src={about_iwmc.background_image}
          alt="City Background"
          fill
          className="hidden lg:block object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#010816] to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12">
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="pt-1 text-white text-4xl lg:text-4xl font-bold mb-6 flex flex-col items-center lg:items-start gap-2">
            {about_iwmc.title}
            <span className="w-14 h-0.5 bg-[#d5ad64]" />
          </h2>

          <p className="text-white/90 text-[15px] lg:text-base leading-relaxed mb-12 max-w-xl">
            {about_iwmc.description}
          </p>

          <div className="bg-[#0a1628]/60 sm:bg-transparent p-6 sm:p-0 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 mb-12 w-full">
            {about_iwmc.stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center lg:items-start ${
                  index === 0
                    ? "px-4 lg:px-0"
                    : "border-t sm:border-t-0 sm:border-l border-white/15 pt-8 sm:pt-0 sm:pl-6"
                }`}
              >
                <div className="mx-auto flex flex-col items-center justify-center text-center">
                  <div className="relative size-16 mb-1">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-[#d5ad64] font-bold text-lg lg:text-sm uppercase mb-1 tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-base lg:text-xs whitespace-pre-wrap leading-relaxed lg:max-w-45">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="group flex items-center gap-4 bg-linear-to-r from-[#d5ad64] to-[#a67c37] px-8 py-3.5 rounded-lg text-[#010816] font-bold text-xs lg:text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg shadow-amber-900/20">
            KHÁM PHÁ CÂU CHUYỆN IWMC
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
