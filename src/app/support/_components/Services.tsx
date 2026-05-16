import Image from "next/image";

export function Services() {
  const services = [
    {
      image: "/support/ServicesIcon1.png",
      title: "TƯ VẤN CHIẾN LƯỢC IPO",
      desc: "Xây dựng chiến lược tối ưu về thời điểm, sàn niêm yết và định giá.",
    },
    {
      image: "/support/ServicesIcon2.png",
      title: "CHUẨN HÓA QUẢN TRỊ",
      desc: "Hoàn thiện mô hình quản trị, quy trình, chính sách theo chuẩn mực công ty đại chúng.",
    },
    {
      image: "/support/ServicesIcon3.png",
      title: "TÁI CẤU TRÚC TÀI CHÍNH VÀ VẬN HÀNH",
      desc: "Tối ưu cấu trúc vốn, hệ thống kế toán, kiểm soát nội bộ và hiệu quả hoạt động.",
    },
    {
      image: "/support/ServicesIcon4.png",
      title: "TƯ VẤN ĐỊNH GIÁ DOANH NGHIỆP",
      desc: "Áp dụng các phương pháp định giá tiên tiến, tối ưu giá trị dưới góc nhìn các bên.",
    },
    {
      image: "/support/ServicesIcon5.png",
      title: "HỖ TRỢ PHÁP LÝ & HỒ SƠ IPO",
      desc: "Chuẩn bị hồ sơ, làm việc với cơ quan quản lý và đảm bảo tuân thủ pháp lý.",
    },
    {
      image: "/support/ServicesIcon6.png",
      title: "ĐỒNG HÀNH ROADSHOW & NIÊM YẾT",
      desc: "Xây dựng thông điệp đầu tư, kết nối NĐT và hỗ trợ doanh nghiệp trong ngày giao dịch đầu tiên.",
    },
  ];

  return (
    <section className="px-7 lg:px-6 py-8 my-8 bg-[#001020] border border-white/15 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase lg:px-4 py-2">
          DỊCH VỤ IWMC CUNG CẤP TRONG SUỐT HÀNH TRÌNH IPO
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="px-3 py-4 rounded-xl border border-white/10 bg-[#0a1a30] hover:border-white/20 transition-all duration-200 flex flex-col items-center text-center group hover:scale-103"
          >
            <div className="relative size-12 md:size-14 mb-3 md:mb-4">
              <Image
                src={svc.image}
                alt="Icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="py-1 text-sm lg:text-[12.5px] font-bold text-[#d5ad64] mb-1 flex items-center">
              {svc.title}
            </h3>
            <p className="text-xs lg:text-[11.5px] text-gray-400">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
