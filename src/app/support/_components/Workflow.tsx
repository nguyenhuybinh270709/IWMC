import Image from "next/image";

export function Workflow() {
  const features = [
    {
      image: "/support/WorkflowIcon1.png",
      title: "TƯ VẤN 1:1 CHUYÊN SÂU",
      desc: "Mỗi doanh nghiệp có một nhóm chuyên gia riêng, hiểu sâu ngành và mô hình kinh doanh.",
    },
    {
      image: "/support/WorkflowIcon2.png",
      title: "KẾ HOẠCH RÕ RÀNG, ĐO LƯỜNG ĐƯỢC",
      desc: "Xác định KPI, mốc thời gian và kết quả cho từng giai đoạn.",
    },
    {
      image: "/support/WorkflowIcon3.png",
      title: "LIÊN LẠC LIÊN TỤC, MINH BẠCH",
      desc: "Cập nhật tiến độ thường xuyên, báo cáo rõ ràng, cùng doanh nghiệp ra quyết định.",
    },
    {
      image: "/support/WorkflowIcon4.png",
      title: "ĐỒNG HÀNH DÀI HẠN",
      desc: "Hỗ trợ sau IPO: quản trị, IR, M&A, huy động vốn, phát triển bền vững.",
    },
  ];

  const flows = [
    "PHÂN TÍCH & TƯ VẤN",
    "LẬP KẾ HOẠCH & TRIỂN KHAI",
    "THỰC THI & GIÁM SÁT",
    "BÁO CÁO & TỐI ƯU",
    "ĐỒNG HÀNH SAU IPO",
  ];

  return (
    <section className="py-8 lg:py-12 px-6 mx-auto border border-white/15 bg-linear-to-br from-[#001020] to-[#0a1a30] rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase mb-2">
          MÔ HÌNH LÀM VIỆC CÙNG IWMC
        </h2>
        <p className="text-sm text-gray-400">
          Minh bạch – Đồng hành – Hiệu quả
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 space-y-6">
          {features.map((f, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="relative size-10 lg:size-13 shrink-0">
                <div className="w-full h-full relative flex items-center justify-center">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-bold text-[#e5c185] mb-1 uppercase">
                  {f.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7 flex items-center justify-center w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 w-full max-w-2xl relative">
            <div className="size-36 lg:size-40 rounded-full border border-[#d5ad64] bg-black/40 flex items-center justify-center text-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(213,173,100,0.15),inset_0_0_15px_rgba(213,173,100,0.1)] shrink-0 z-10">
              IWMC
            </div>

            <div className="flex flex-col gap-3 w-full relative px-2">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-[#d5ad64]/30 to-transparent sm:hidden" />

              {flows.map((flow, i) => (
                <div
                  key={i}
                  className="text-[11px] lg:text-sm font-bold text-center text-[#e5c185] py-2 px-4 border border-[#d5ad64]/40 rounded-lg bg-[#040d1a] whitespace-nowrap shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10"
                >
                  {flow}
                </div>
              ))}
            </div>

            <div className="size-36 lg:size-40 rounded-full border border-[#d5ad64] bg-black/40 flex items-center justify-center text-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(213,173,100,0.15),inset_0_0_15px_rgba(213,173,100,0.1)] shrink-0 z-10 uppercase">
              Doanh <br /> Nghiệp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
