"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/news/Hero.png"
          alt="Background City"
          fill
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container z-10 mx-auto px-4 md:px-8 py-12 lg:py-16 flex flex-col items-center justify-center text-center">
        <div className="lg:mb-10 max-w-3xl">
          <h1 className="py-2 text-5xl lg:text-7xl font-bold bg-linear-to-b from-[#f5e3c3] via-[#dfba7d] to-[#a88244] bg-clip-text text-transparent uppercase tracking-wider mb-3">
            TIN TỨC
          </h1>
          <p className="text-gray-300 text-lg md:text-base lg:text-xl max-w-2xl mx-auto">
            Cập nhật những xu hướng mới nhất về tài chính, đầu tư, quản trị
            doanh nghiệp và hành trình phát triển bền vững.
          </p>
        </div>
      </div>
    </section>
  );
}
