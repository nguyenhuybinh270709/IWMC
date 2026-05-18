"use client";

import Image from "next/image";
import Link from "next/link";

const MOST_READ_POSTS = [
  {
    image: "/news/post-1.png",
    title: "Vì sao 2024 là thời điểm vàng để doanh nghiệp Việt IPO?",
    views: "12.5K lượt xem",
  },
  {
    image: "/news/post-2.png",
    title: "Chiến lược M&A: Gia tăng giá trị và mở rộng thị trường",
    views: "8.7K lượt xem",
  },
  {
    image: "/news/post-3.png",
    title: "Đầu tư công nghệ: Động lực tăng trưởng dài hạn",
    views: "6.1K lượt xem",
  },
  {
    image: "/news/post-4.png",
    title: "Gia sản không chỉ là tiền, mà là di sản",
    views: "5.3K lượt xem",
  },
  {
    image: "/news/post-5.png",
    title: "Xu hướng tài chính xanh và cơ hội cho doanh nghiệp",
    views: "4.8K lượt xem",
  },
];

const TOPICS = [
  "Kinh tế vĩ mô",
  "Thị trường chứng khoán",
  "IPO",
  "Quản trị doanh nghiệp",
  "Quản lý gia sản",
  "Đầu tư",
  "M&A",
  "Chuyển đổi số",
];

export function Sidebar() {
  return (
    <div className="mt-8 lg:mt-0 space-y-8">
      <div className="border border-white/20 bg-slate-950/20 p-4 rounded-lg">
        <h3 className="text-lg lg:text-base font-bold text-slate-100 uppercase py-1 mb-4 border-b border-slate-800 pb-2">
          Bài viết xem nhiều
        </h3>
        <div className="space-y-8 lg:space-y-4">
          {MOST_READ_POSTS.map((post) => (
            <Link
              href={`/news/${post.title}`}
              key={post.title}
              className="grid lg:grid-cols-12 gap-4 group"
            >
              <div className="lg:col-span-5 relative w-full h-40 lg:h-[76.5px] rounded-md border border-white/10 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-7 space-y-1">
                <h4 className="text-[14.5px] lg:text-[14px] font-semibold text-slate-300 group-hover:text-[#dfba7d] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-[12px] lg:text-[12px] text-slate-500 block">
                  {post.views}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border border-white/20 bg-slate-950/20 p-4 rounded-lg">
        <h3 className="text-lg lg:text-base font-bold text-slate-100 uppercase py-1 mb-4 border-b border-slate-800 pb-2">
          Chủ đề nổi bật
        </h3>
        <div className="flex flex-wrap gap-3 lg:gap-4">
          {TOPICS.map((topic) => (
            <Link
              key={topic}
              href={`/news/${topic}`}
              className="text-[14px] lg:text-[12.5px] font-medium text-slate-400 bg-slate-900/40 hover:bg-slate-800/60 hover:text-[#dfba7d] border border-slate-800 px-2.5 py-1 transition-colors rounded-xs"
            >
              # {topic}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
