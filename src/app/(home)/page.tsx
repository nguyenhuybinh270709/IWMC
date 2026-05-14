import {
  AboutIWMC,
  Hero,
  Mission,
  News,
  Programs,
} from "@/app/(home)/_components";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero />

      <Mission />

      <section id="about">
        <AboutIWMC />
      </section>

      <section id="program">
        <Programs />
      </section>

      <section id="news">
        <News />
      </section>

      <section id="contact" className="container mx-auto lg:px-12 py-12">
        <div className="bg-linear-to-br from-[#f9d696] to-[#cfa557] px-12 py-8 lg:rounded-lg flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="pt-1 text-2xl font-bold text-black uppercase">
              Sẵn sàng đồng hành cùng bạn
            </h2>
            <p className="text-base font-medium text-black">
              Hãy kết mối với IWMC để cùng kiến tạo những giá trị bền vững.
            </p>
          </div>
          <Button className="w-fit bg-black text-white hover:bg-black/90 px-10 py-6 text-base transition-all duration-200 hover:scale-103 active:scale-95 cursor-pointer">
            KẾT NỐI VỚI CHÚNG TÔI
            <ArrowRight />
          </Button>
        </div>
      </section>
    </main>
  );
}
