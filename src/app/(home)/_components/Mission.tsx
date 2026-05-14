import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function Mission() {
  return (
    <section className="py-12 bg-[#010816] flex flex-col items-center">
      <div className="mb-8 text-center">
        <h2 className="text-white text-xl lg:text-3xl font-bold uppercase flex flex-col items-center gap-3">
          Hai trụ cột – Một sứ mệnh
          <span className="w-14 h-[1.5px] bg-[#d5ad64]"></span>
        </h2>
      </div>

      <div className="container w-[95%] mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="size-64 rounded-full bg-[#010816] flex items-center justify-center p-2 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
            <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
              <Image
                src="/home/Logo.png"
                alt="IWMC Logo"
                fill
                className="object-contain scale-110"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div className="bg-[#0a1628]/60 p-10 lg:pr-36 backdrop-blur-xl relative">
            <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-1 mb-6">
              <Image
                src="/home/MissionIcon1.png"
                alt="Icon"
                width={48}
                height={48}
                className="size-18 lg:size-12 object-contain shrink-0 mx-auto"
              />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#d5ad64] uppercase leading-tight tracking-tight">
                  Tư vấn & Hỗ trợ
                  <br />
                  Doanh nghiệp niêm yết
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed mt-3 max-w-70">
                  Đồng hành cùng doanh nghiệp trên hành trình niêm yết và tăng
                  trưởng bền vững.
                </p>
                <ul className="space-y-3 mt-3 my-6">
                  {[
                    "Tư vấn niêm yết (IPO)",
                    "Tái cấu trúc & Quản trị",
                    "Quản lý tài sản doanh nghiệp",
                    "IR & Truyền thông tài chính",
                    "Tăng trưởng bền vững",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-gray-300/90 font-medium"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-[#d5ad64]"
                        strokeWidth={3}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-[#d5ad64] text-[12px] font-black uppercase tracking-widest hover:translate-x-1 transition-transform group cursor-pointer">
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1628]/60 p-10 lg:pl-36 backdrop-blur-xl relative">
            <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-1 mb-6">
              <Image
                src="/home/MissionIcon2.png"
                alt="Icon"
                width={48}
                height={48}
                className="size-18 lg:size-12 object-contain shrink-0 mx-auto"
              />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#d5ad64] uppercase leading-tight tracking-tight">
                  Đào tạo thế hệ kế cận
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed mt-3 max-w-70">
                  Kiến tạo thế hệ công dân toàn cầu – lãnh đạo tương lai.
                </p>
                <ul className="space-y-3 mt-3 mb-6">
                  {[
                    "Junior CEO",
                    "Legacy 18",
                    "Global Citizen Elite",
                    "Global Scholar Launchpad",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-gray-300/90 font-medium"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-[#d5ad64]"
                        strokeWidth={3}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-[#d5ad64] text-[12px] font-black uppercase tracking-widest hover:translate-x-1 transition-transform group cursor-pointer">
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
