import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HomeData } from "@/services/home.service";

type NewsProps = Pick<HomeData, "news">;

export function News({ news }: NewsProps) {
  const mock_news = [
    {
      tag: "SỰ KIỆN",
      date: "10/06/2024",
      title: "5 YẾU TỐ QUAN TRỌNG ĐỂ NIÊM YẾT THÀNH CÔNG",
      desc: "Những yếu tố doanh nghiệp cần chuẩn bị để IPO thuận lợi và bền vững.",
    },
    {
      tag: "KIẾN THỨC",
      date: "28/05/2024",
      title: "QUẢN TRỊ GIA SẢN: TƯ DUY DÀI HẠN, GIÁ TRỊ BỀN VỮNG",
      desc: "Bí quyết bảo toàn và phát triển tài sản cho nhiều thế hệ.",
    },
    {
      tag: "GIÁO DỤC",
      date: "15/05/2024",
      title: "ĐẦU TƯ CHO GIÁO DỤC LÃNH ĐẠO LÀ ĐẦU TƯ CHO TƯƠNG LAI",
      desc: "Vai trò của giáo dục trong việc kiến tạo thế hệ lãnh đạo tương lai.",
    },
  ];

  return (
    <section className="py-12 px-2 bg-[#010816] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="pt-1 text-3xl lg:text-4xl font-bold uppercase mb-4">
            {news.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#d5ad64] mx-auto mb-6" />
          <p className="text-base text-white/70 mx-auto">{news.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mock_news.map((item, i) => (
            <article
              key={i}
              className="group p-5 rounded-xl border border-white/10 bg-linear-to-b from-white/5 to-transparent hover:border-[#d5ad64]/30 transition-all duration-300"
            >
              <div className="aspect-video relative mb-6 overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={`/news-${i + 1}.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 bg-[#d5ad64] border border-[#d5ad64]/30 rounded text-xs font-bold text-black">
                  {item.tag}
                </span>
                <span className="text-[10px] text-white/60 font-semibold">
                  {item.date}
                </span>
              </div>

              <h3 className="text-sm font-bold mb-4 group-hover:text-[#d5ad64] transition-colors uppercase leading-relaxed min-h-10 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={"news"}>
            <button className="group flex items-center gap-3 bg-linear-to-r from-[#d5ad64] to-[#a67c37] px-8 py-3 rounded-lg text-[#010816] font-bold text-sm uppercase hover:brightness-110 transition-all duration-200 hover:scale-103 active:scale-95 cursor-pointer">
              Xem tất cả bài viết
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
