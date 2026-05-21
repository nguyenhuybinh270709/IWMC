import { Button } from "@/components/ui";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { HomeData } from "@/services/home.service";

type HeroProps = Pick<HomeData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#050810] overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.background_image}
          alt="Background"
          fill
          priority
          className="w-full h-full object-cover object-bottom-left lg:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 py-12 lg:py-10 flex-1 flex flex-col justify-end">
        <div className="mb-6">
          <h1 className="text-center lg:text-left space-y-2 lg:space-y-px font-bold text-white mb-2 lg:mb-3 uppercase leading-10 lg:leading-tight">
            <p className="text-[34px] lg:text-[52px]">{hero.title.top_text}</p>
            <p className="text-[34px] lg:text-[52px]">
              {hero.title.middle_text}
            </p>
            <p className="lg:py-2 text-[31px] lg:text-[56px] bg-linear-to-b from-[#e8bd6d] to-[#d5ad64] bg-clip-text text-[#f3d9a9] lg:text-transparent leading-12">
              {hero.title.bottom_text}
            </p>
          </h1>

          <p className="text-gray-300 text-base md:text-lg lg:w-110 mb-6 lg:mb-4 opacity-90">
            {hero.description}
          </p>

          <div className="flex flex-col lg:flex-row flex-wrap items-center gap-6">
            <Button className="w-full lg:w-fit rounded-lg bg-[#d5ad64] p-6 text-base font-semibold text-black hover:bg-[#c49a50] uppercase transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95">
              Khám phá dịch vụ <span>→</span>
            </Button>

            <Button className="w-full lg:w-fit bg-black/5 border border-white/40 hover:border-[#c49a50] flex items-center p-6 gap-2 text-white/90 hover:text-[#c49a50] transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95 uppercase text-base font-semibold">
              Về IWMC
              <PlayCircle className="size-4.5 opacity-80 group-hover:opacity-100" />
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md">
          {hero.stats.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-4 lg:flex lg:flex-col items-center lg:text-center px-4 border-b lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0 border-white/15 pb-4 lg:py-0`}
            >
              <div className="col-span-1 flex justify-center items-center">
                <div className="relative size-16 lg:size-14 lg:mb-1">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="col-span-3 flex flex-col pl-4 lg:pl-0">
                <span className="text-3xl lg:text-3xl font-bold text-[#d5ad64] leading-tight">
                  {item.text_1}
                </span>
                <span className="text-sm lg:text-[11px] text-gray-400 uppercase tracking-[0.12em] leading-4 mt-1">
                  {item.text_2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
