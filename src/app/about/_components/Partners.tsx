import Image from "next/image";

export function Partners() {
  const logos = [
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
    "/about/PartnerLogo.png",
  ];

  return (
    <section className="py-12 bg-[#050810]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl text-center lg:text-left border border-white/10 bg-white/2">
            <h3 className="text-white font-bold text-2xl mb-4 uppercase">
              VÌ SAO CHỌN IWMC?
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Chúng tôi khác biệt nhờ sự kết hợp giữa tri thức chuyên sâu, kinh
              nghiệm thực chiến và mạng lưới toàn cầu – mang lại giá trị thực
              chất và bền vững cho khách hàng.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              <Feature
                icon="/home/HeroIcon1.png"
                title="CHUYÊN MÔN SÂU"
                desc="Đội ngũ chuyên gia nhiều năm kinh nghiệm thực chiến."
              />
              <Feature
                icon="/home/HeroIcon2.png"
                title="GIẢI PHÁP THỰC TIỄN"
                desc="Tư vấn sát với thực tế, đo lường bằng kết quả cụ thể."
              />
              <Feature
                icon="/home/HeroIcon3.png"
                title="MẠNG LƯỚI TOÀN CẦU"
                desc="Kết nối với các định chế tài chính và chuyên gia quốc tế."
              />
              <Feature
                icon="/home/HeroIcon4.png"
                title="ĐỒNG HÀNH DÀI HẠN"
                desc="Cam kết đồng hành cùng khách hàng trên hành trình phát triển bền vững."
              />
            </div>
          </div>

          <div className="p-8 rounded-2xl text-center lg:text-left border border-white/10 bg-white/2">
            <h3 className="text-white font-bold text-2xl mb-4 uppercase">
              MẠNG LƯỚI ĐỐI TÁC
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              IWMC tự hào hợp tác với các tổ chức tài chính, quỹ đầu tư, công ty
              luật và định chế giáo dục hàng đầu trong và ngoài nước.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="relative h-20 w-full border border-white/5 hover:border-white/20 rounded-lg bg-white/3 flex items-center justify-center p-4"
                >
                  <Image
                    src={logo}
                    alt="Partner"
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative size-16 mb-2">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <h4 className="text-[12px] lg:text-[10.5px] font-bold text-[#d5ad64] mb-2 uppercase flex items-center justify-center">
        {title}
      </h4>
      <p className="text-[10px] lg:text-[9px] text-gray-400">{desc}</p>
    </div>
  );
}
