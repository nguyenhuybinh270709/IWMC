import { Card, CardContent } from "@/components/ui";
import { HomeData } from "@/services/home.service";
import Image from "next/image";
import Link from "next/link";

type ProgramsProps = Pick<HomeData, "programs">;

export function Programs({ programs }: ProgramsProps) {
  return (
    <section className="py-24 bg-[#0a0f1a] text-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-4">
            {programs.title}
          </h2>
          <div className="w-18 h-0.5 bg-[#d5ad64] font-bold mx-auto" />
          <p className="text-base text-white/70 mt-6">{programs.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {programs.training_programs.map((item, i) => (
            <Card
              key={i}
              className={`${item.color} border-none text-white overflow-hidden group flex flex-col h-full`}
            >
              <Link href={item.link}>
                <div className="aspect-video bg-gray-800 relative overflow-hidden shrink-0">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>

                <CardContent className="px-4 py-6 text-center flex flex-col flex-1">
                  <h3 className="text-white/90 text-xl lg:text-[16.5px] font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-xs font-semibold">
                      <span className="text-amber-200">Độ tuổi: </span>
                      <span className="text-white/90">{item.age}</span>
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
