import { Card, CardContent } from "@/components/ui";

export function Programs() {
  const trainingPrograms = [
    {
      title: "JUNIOR CEO",
      desc: "Trang bị tư duy lãnh đạo, quản trị doanh nghiệp và kỹ năng thực chiến cho thế hệ trẻ.",
      age: "12 - 17",
      color: "bg-emerald-900/40",
    },
    {
      title: "LEGACY 18",
      desc: "Hành trình 18 tháng định hình bản lĩnh độc lập, tư duy tài chính và di sản cá nhân.",
      age: "15 - 18",
      color: "bg-amber-900/40",
    },
    {
      title: "GLOBAL CITIZEN ELITE",
      desc: "Phát triển năng lực toàn cầu, tư duy quốc tế, kỹ năng mềm, trách nhiệm xã hội.",
      age: "18 - 21",
      color: "bg-blue-900/40",
    },
    {
      title: "GLOBAL SCHOLAR LAUNCHPAD",
      desc: "Chuẩn bị du học & học bổng bậc đại học; thuật hồ sơ phỏng vấn, định hướng tương lai.",
      age: "15 - 22",
      color: "bg-purple-900/40",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0f1a] text-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Chương trình đào tạo thế hệ kế cận
          </h2>
          <div className="w-18 h-0.5 bg-[#d5ad64] font-bold mx-auto" />
          <p className="text-base text-white/70 mt-6">
            Hành trình học tập được thiết kế chuyên biệt, truyền cảm hứng và
            trao quyền cho thế hệ trẻ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {trainingPrograms.map((p, i) => (
            <Card
              key={i}
              className={`${p.color} border-none text-white overflow-hidden group flex flex-col h-full`}
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 bg-[url('/program-thumb.jpg')] bg-cover" />
              </div>

              <CardContent className="p-6 text-center flex flex-col flex-1">
                <h3 className="text-white/90 text-xl font-bold mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  {p.desc}
                </p>

                <div className="mt-auto">
                  <p className="text-xs font-semibold">
                    <span className="text-amber-200">Độ tuổi: </span>
                    <span className="text-white/90">{p.age}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
