import Image from "next/image";

export function WhyChoose() {
  const reasons = [
    {
      image: "/support/WhyIcon1.png",
      title: "CHUYÊN MÔN SÂU",
      desc: "Đội ngũ chuyên gia giàu kinh nghiệm thực chiến, am hiểu thị trường Việt Nam.",
    },
    {
      image: "/support/WhyIcon2.png",
      title: "PHƯƠNG PHÁP CHUẨN QUỐC TẾ",
      desc: "Áp dụng chuẩn mực quốc tế, đảm bảo tuân thủ và hiệu quả.",
    },
    {
      image: "/support/WhyIcon3.png",
      title: "MẠNG LƯỚI MẠNH MẼ",
      desc: "Kết nối với quỹ đầu tư, NĐT tổ chức và các định chế tài chính trong & ngoài nước.",
    },
    {
      image: "/support/WhyIcon4.png",
      title: "GIẢI PHÁP TOÀN DIỆN",
      desc: "Từ chiến lược đến triển khai và hậu IPO.",
    },
    {
      image: "/support/WhyIcon5.png",
      title: "TẬP TRUNG VÀO GIÁ TRỊ THỰC",
      desc: "Tối ưu giá trị doanh nghiệp, không chỉ để niêm yết mà để phát triển bền vững.",
    },
    {
      image: "/support/WhyIcon6.png",
      title: "BẢO MẬT TUYỆT ĐỐI",
      desc: "Cam kết bảo mật thông tin và dữ liệu của khách hàng.",
    },
  ];

  return (
    <section className="px-7 lg:px-6 py-8 my-8 bg-[#001020] border border-white/15 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase lg:px-4 py-2">
          VÌ SAO CHỌN IWMC
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="px-3 py-4 rounded-xl border border-white/10 bg-[#0a1a30] hover:border-white/20 transition-all duration-200 flex flex-col items-center text-center group hover:scale-103"
          >
            <div className="relative size-12 md:size-14 mb-3 md:mb-4">
              <Image
                src={reason.image}
                alt="Icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="py-1 text-sm lg:text-[12.5px] font-bold text-[#d5ad64] mb-1 flex items-center">
              {reason.title}
            </h3>
            <p className="text-xs lg:text-[11.5px] text-gray-400">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
