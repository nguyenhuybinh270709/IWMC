"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "IWMC cung cấp những dịch vụ gì?",
    a: "Chúng tôi cung cấp các dịch vụ tư vấn tài chính, IPO & Thị trường vốn, M&A, Quản trị gia sản, và Đào tạo doanh nghiệp.",
  },
  {
    q: "Làm thế nào để bắt đầu hợp tác với IWMC?",
    a: "Bạn có thể điền biểu mẫu liên hệ trực tiếp cho chúng tôi. Chuyên gia sẽ liên hệ để tư vấn chi tiết.",
  },
  {
    q: "Thời gian phản hồi là bao lâu?",
    a: "IWMC cam kết phản hồi mọi yêu cầu trong vòng 24 giờ làm việc.",
  },
  {
    q: "Thông tin của tôi có được bảo mật không?",
    a: "Có, IWMC cam kết bảo mật tuyệt đối mọi thông tin của khách hàng theo chính sách bảo mật của chúng tôi.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const halfIndex = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, halfIndex);
  const rightColumn = faqs.slice(halfIndex);

  return (
    <>
      <section className="bg-[#050810] text-white py-12 px-6 md:px-12 font-sans">
        <div className="mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[28px] lg:text-3xl font-bold text-white/90 uppercase mb-2">
              Câu hỏi thường gặp
            </h2>
            <p className="text-[15px] lg:text-base text-white/60">
              Dưới đây là một số câu hỏi phổ biến từ khách hàng của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-4">
              {leftColumn.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={`left-${index}`}
                    className="bg-[#0b1120]/40 border border-white/10 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-base lg:text-lg text-gray-200 hover:text-[#f0debd] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#d5ad64] shrink-0 ml-4">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? "max-h-75 md:max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="custom-scrollbar overflow-y-auto max-h-75 md:max-h-96 px-5 pb-5 pt-2 text-sm lg:text-base text-gray-400 bg-[#050810]/30 whitespace-pre-wrap">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              {rightColumn.map((faq, index) => {
                const actualIndex = index + halfIndex;
                const isOpen = openIndex === actualIndex;
                return (
                  <div
                    key={`right-${actualIndex}`}
                    className="bg-[#0b1120]/40 border border-white/10 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-base lg:text-lg text-gray-200 hover:text-[#f0debd] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#d5ad64] shrink-0 ml-4">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? "max-h-75 md:max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="custom-scrollbar overflow-y-auto max-h-75 md:max-h-96 px-5 pb-5 pt-2 text-sm lg:text-base text-gray-400 bg-[#050810]/30 whitespace-pre-wrap">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c29555;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8e6b3e;
        }
      `}</style>
    </>
  );
}
