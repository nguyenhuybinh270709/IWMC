import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutIWMC() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#010816]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/AboutIWMC.png"
          alt="City Background"
          fill
          className="hidden lg:block object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#010816] to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12">
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6 flex flex-col items-center lg:items-start gap-2">
            VỀ IWMC
            <span className="w-14 h-0.5 bg-[#d5ad64]" />
          </h2>

          <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-12 max-w-xl">
            IWMC là doanh nghiệp tiên phong kết hợp Tư vấn Quản lý tài sản và
            Phát triển thế hệ kế cận, đồng hành cùng doanh nghiệp, gia tộc và cá
            nhân kiến tạo giá trị bền vững, nâng tầm vị thế trên thị trường và
            chuẩn bị cho tương lai.
          </p>

          <div className="bg-[#0a1628]/60 sm:bg-transparent p-6 sm:p-0 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 mb-12 w-full">
            <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
              <div className="mx-auto flex flex-col items-center justify-center">
                <div className="relative size-16 mb-1">
                  <Image
                    src="/home/AboutIWMCIcon1.png"
                    alt="Sứ mệnh"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[#d5ad64] font-bold text-lg lg:text-sm uppercase mb-1 lg:mb-3 tracking-wider">
                  SỨ MỆNH
                </h4>
              </div>
              <p className="text-gray-300 text-base lg:text-xs leading-relaxed lg:max-w-45">
                Kiến tạo doanh nghiệp trường tồn và thế hệ lãnh đạo kế thừa xuất
                sắc.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0 sm:pl-6">
              <div className="mx-auto flex flex-col items-center justify-center">
                <div className="relative size-16 mb-1">
                  <Image
                    src="/home/AboutIWMCIcon2.png"
                    alt="Tầm nhìn"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[#d5ad64] font-bold text-lg lg:text-sm uppercase mb-1 lg:mb-3 tracking-wider">
                  TẦM NHÌN
                </h4>
              </div>
              <p className="text-gray-300 text-base lg:text-xs leading-relaxed lg:max-w-45">
                Trở thành hệ sinh thái tư vấn và đào tạo hàng đầu Châu Á.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0 sm:pl-6">
              <div className="mx-auto flex flex-col items-center justify-center">
                <div className="relative size-16 mb-1">
                  <Image
                    src="/home/AboutIWMCIcon3.png"
                    alt="Giá trị cốt lõi"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[#d5ad64] font-bold text-lg lg:text-sm uppercase mb-1 lg:mb-3 tracking-wider">
                  GIÁ TRỊ CỐT LÕI
                </h4>
              </div>
              <p className="text-gray-300 text-base lg:text-xs leading-relaxed lg:max-w-45">
                Chính trực – Chuyên sâu
                <br />
                Bền vững – Truyền thừa
              </p>
            </div>
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
