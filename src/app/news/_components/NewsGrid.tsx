"use client";

import Image from "next/image";
import Link from "next/link";

const FEATURED_POST = {
  title:
    "Triển vọng kinh tế Việt Nam 2024-2025: Cơ hội bứt phá trong chu kỳ mới",
  excerpt:
    "Phân tích chuyên sâu về các động lực tăng trưởng, dòng vốn đầu tư và triển vọng thị trường trong giai đoạn tới.",
  category: "Thị trường",
  date: "15 THÁNG 5, 2024",
  image: "/news/featured.png",
};

const RECENT_POSTS = [
  {
    title:
      "Chiến lược đầu tư 6 tháng cuối năm 2024 trong bối cảnh nhiều biến động",
    category: "Đầu tư",
    date: "10 THÁNG 5, 2024",
    image: "/news/post-1.png",
  },
  {
    title:
      "Quản trị doanh nghiệp gia đình: Bài toán kế thừa và phát triển bền vững",
    category: "Quản trị doanh nghiệp",
    date: "05 THÁNG 5, 2024",
    image: "/news/post-2.png",
  },
];

const GRID_POSTS = [
  {
    title: "Lộ trình IPO bài bản: Chìa khóa nâng tầm giá trị doanh nghiệp Việt",
    category: "IPO & Thị trường vốn",
    date: "02 THÁNG 5, 2024",
    image: "/news/post-3.png",
  },
  {
    title: "Quản lý gia sản thế hệ mới: Bảo toàn, tăng trưởng và chuyển giao",
    category: "Gia sản",
    date: "28 THÁNG TƯ, 2024",
    image: "/news/post-4.png",
  },
  {
    title: "IWMC Summit 2024: Kiến tạo giá trị bền vững, dẫn dắt tương lai",
    category: "Sự kiện",
    date: "20 THÁNG TƯ, 2024",
    image: "/news/post-5.png",
  },
];

export function NewsGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 relative group rounded-lg border border-white/20 bg-slate-950/40 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-linear-to-b from-[#f5e3c3] to-[#a88244] rounded-md uppercase">
            <p className="text-black text-[10px] lg:text-sm font-semibold px-3 py-1">
              Nổi bật
            </p>
          </div>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-full mb-4 overflow-hidden">
            <Image
              src={FEATURED_POST.image}
              alt={FEATURED_POST.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3 text-[11px] font-semibold mb-2">
              <span className="text-[#a88244]">{FEATURED_POST.date}</span>
              <span className="font-light text-gray-300">|</span>
              <span className="text-[#f3d9a9] uppercase">
                {FEATURED_POST.category}
              </span>
            </div>
            <Link href={`/news/${FEATURED_POST.title}`}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-[#f3d9a9] transition-colors line-clamp-2">
                {FEATURED_POST.title}
              </h2>
              <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                {FEATURED_POST.excerpt}
              </p>
              <div className="inline-flex items-center text-xs font-semibold text-[#a88244] hover:text-[#f3d9a9] transition-colors group/btn">
                Đọc thêm
                <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-between">
          {RECENT_POSTS.map((post) => (
            <div
              key={post.title}
              className="group border border-white/20 bg-slate-950/40 flex flex-col justify-between flex-1 rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-45 lg:h-30 mb-3 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-104"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-[9px] font-semibold mb-1">
                  <span className="text-[#a88244]">{post.date}</span>
                  <span className="font-light text-gray-300">|</span>
                  <span className="text-[#f3d9a9] uppercase">
                    {post.category}
                  </span>
                </div>
                <Link href={`/news/${post.title}`}>
                  <h3 className="text-sm font-bold text-slate-200 line-clamp-2 group-hover:text-[#f3d9a9] transition-colors">
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center text-xs font-semibold text-[#a88244] hover:text-[#f3d9a9] transition-colors group/btn">
                    Đọc thêm
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
        {GRID_POSTS.map((post) => (
          <div
            key={post.title}
            className="group border border-white/20 bg-slate-950/40 flex flex-col justify-between rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-45 lg:h-30 mb-3 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 text-[9px] font-semibold mb-1">
                <span className="text-[#a88244]">{post.date}</span>
                <span className="font-light text-gray-300">|</span>
                <span className="text-[#f3d9a9] uppercase">
                  {post.category}
                </span>
              </div>
              <Link href={`/news/${post.title}`}>
                <h3 className="text-sm font-bold text-slate-200 line-clamp-2 group-hover:text-[#f3d9a9] transition-colors mb-3">
                  {post.title}
                </h3>
                <div className="inline-flex items-center text-[11px] font-semibold text-slate-400 hover:text-[#f3d9a9] transition-colors group/btn">
                  Đọc thêm
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
