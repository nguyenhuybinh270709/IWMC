"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, Check, ArrowRight, X } from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui";

const TRAINING_PROGRAMS = [
  {
    title: "Đào tạo đội ngũ kế thừa",
    description: "Xây dựng đội ngũ kế thừa vững mạnh và phát triển bền vững",
    icon: "/navbar/team.png",
    // href: "/program/succession",
    href: "#program",
  },
  {
    title: "Junior CEO",
    description: "Chương trình dành cho lãnh đạo trẻ tương lai",
    icon: "/navbar/junior-ceo.png",
    href: "https://juniorceo.edu.vn/",
  },
  {
    title: "Legacy 18",
    description: "Hành trình 18 tháng kiến tạo thế hệ doanh nhân kế thừa",
    icon: "/navbar/legacy.png",
    // href: "/program/legacy-18",
    href: "#program",
  },
  {
    title: "Global Citizen Elite",
    description: "Phát triển tư duy toàn cầu và năng lực lãnh đạo vượt trội",
    icon: "/navbar/global.png",
    // href: "/program/global-citizen",
    href: "#program",
  },
  {
    title: "Global Scholar Launchpad",
    description: "Trang bị nền tảng học thuật và kỹ năng hội nhập quốc tế",
    icon: "/navbar/scholar.png",
    // href: "/program/scholar",
    href: "#program",
  },
];

const NAV_ITEMS = [
  { title: "TRANG CHỦ", href: "/" },
  { title: "VỀ IWMC", href: "/about" },
  { title: "HỖ TRỢ IPO", href: "/support" },
  { title: "ĐÀO TẠO KẾ CẬN", href: "/program", dropdown: true },
  { title: "TIN TỨC", href: "/news" },
  { title: "LIÊN Hệ", href: "/contact" },
];

const LANGUAGES = [
  { id: "vi", label: "Tiếng Việt", flag: "/navbar/Vietnam.png" },
  { id: "en", label: "English", flag: "/navbar/English.png" },
];

export function Navbar() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050b16] border-b border-white/5">
      <div className="mx-auto flex h-22 w-full items-center justify-between px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <div className="relative block h-16 w-52.5">
            <Image
              src="/navbar/Logo.png"
              alt="IWMC Logo"
              fill
              className="object-contain object-left lg:object-center"
              priority
              unoptimized
            />
          </div>
        </Link>

        <div className="hidden h-full items-center lg:flex">
          <nav className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`group relative flex items-center gap-1 text-base font-bold uppercase transition-colors py-2 outline-none cursor-pointer ${
                          isActive
                            ? "text-[#c49a50]"
                            : "text-white hover:text-[#c49a50]"
                        }`}
                      >
                        {item.title}
                        <ChevronDown className="size-4 transition-transform group-data-[state=open]:rotate-180" />
                        <span
                          className={`absolute -bottom-2.5 left-0 h-0.75 bg-[#c49a50] transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-85 bg-[#0a121e] border-white/10 p-4 backdrop-blur-xl"
                      align="start"
                      sideOffset={20}
                    >
                      <div className="flex flex-col gap-1">
                        {TRAINING_PROGRAMS.map((prog) => (
                          <Link key={prog.title} href={prog.href}>
                            <DropdownMenuItem className="group/item flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/5 focus:bg-white/5">
                              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#c49a50]/20 bg-[#c49a50]/10 transition-colors group-hover/item:border-[#c49a50]">
                                <Image
                                  src={prog.icon}
                                  alt="Icon"
                                  width={36}
                                  height={36}
                                  className="size-9 object-contain"
                                />
                              </div>
                              <div className="flex-1 space-y-1">
                                <h4 className="text-[13px] font-bold text-[#c49a50] uppercase leading-none">
                                  {prog.title}
                                </h4>
                                <p className="text-[11px] text-white/50 leading-snug">
                                  {prog.description}
                                </p>
                              </div>
                              <ArrowRight className="size-4 text-[#c49a50] opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative flex flex-col items-start text-base font-bold leading-tight uppercase transition-colors py-2 ${
                    isActive
                      ? "text-[#c49a50]"
                      : "text-white hover:text-[#c49a50]"
                  }`}
                >
                  <span className="whitespace-pre-line">{item.title}</span>
                  <span
                    className={`absolute -bottom-2.5 left-0 h-0.75 bg-[#c49a50] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="ml-8 flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer group/lang outline-none">
                  <div className="relative size-6 overflow-hidden rounded-md border border-white/10">
                    <Image
                      src={currentLang.flag}
                      alt={currentLang.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ChevronDown className="size-4 text-white/70 transition-transform group-data-[state=open]/lang:rotate-180 group-hover/lang:text-[#c49a50]" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 bg-[#0a121e] border-white/10 p-1"
              >
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.id}
                    onClick={() => setCurrentLang(lang)}
                    className="flex items-center justify-between px-3 py-2.5 hover:bg-white/5 text-white transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative size-5 overflow-hidden rounded-sm">
                        <Image
                          src={lang.flag}
                          alt={lang.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{lang.label}</span>
                    </div>
                    {currentLang.id === lang.id && (
                      <Check className="size-4 text-[#c49a50]" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="rounded-xl bg-[#d5ad64] px-4 py-5 text-sm font-bold text-black hover:bg-[#c49a50] transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95">
              KẾT NỐI VỚI CHÚNG TÔI
            </Button>
          </div>
        </div>

        {/* Mobile  menu */}
        <div className="lg:hidden">
          <Button
            size="icon"
            variant="ghost"
            className="size-12 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="size-8" />
            ) : (
              <Menu className="size-8" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full w-full bg-[#050b16] transition-all duration-200 ease-in-out overflow-hidden lg:hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 border-t border-white/5 shadow-2xl"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ height: isMobileMenuOpen ? "calc(100vh - 88px)" : "0" }}
      >
        <div className="flex flex-col h-full px-6 pt-2 pb-6 overflow-y-auto">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              if (item.dropdown) {
                return (
                  <Accordion
                    type="single"
                    collapsible
                    key={item.title}
                    className="w-full"
                  >
                    <AccordionItem
                      value={item.title}
                      className="border-b border-white/5"
                    >
                      <AccordionTrigger
                        className={`py-5 text-[17px] font-bold uppercase hover:no-underline ${isActive ? "text-[#c49a50]" : "text-white"}`}
                      >
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 py-2">
                          {TRAINING_PROGRAMS.map((prog) => (
                            <Link
                              key={prog.title}
                              href={prog.href}
                              onClick={closeMenu}
                              className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                            >
                              <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-[#c49a50]/20 bg-[#c49a50]/10">
                                <Image
                                  src={prog.icon}
                                  alt={prog.title}
                                  fill
                                  className="object-contain p-2"
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <h4 className="text-[13px] font-bold uppercase text-[#c49a50]">
                                  {prog.title}
                                </h4>
                                <p className="text-[11px] text-white/50">
                                  {prog.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-5 border-b border-white/5 text-[17px] font-bold uppercase ${isActive ? "text-[#c49a50]" : "text-white"}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 flex flex-col gap-6">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-medium text-white/70 text-sm uppercase">
                Ngôn ngữ
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                    <div className="relative size-5 overflow-hidden rounded-sm">
                      <Image
                        src={currentLang.flag}
                        alt={currentLang.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {currentLang.label}
                    </span>
                    <ChevronDown className="size-4 text-white/50" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-44 bg-[#0a121e] border-white/10"
                >
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.id}
                      onClick={() => setCurrentLang(lang)}
                      className="flex items-center justify-between py-2 text-white"
                    >
                      <div className="flex items-center gap-2">
                        <div className="relative size-5 overflow-hidden rounded-sm">
                          <Image
                            src={lang.flag}
                            alt={lang.label}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm">{lang.label}</span>
                      </div>
                      {currentLang.id === lang.id && (
                        <Check className="size-4 text-[#c49a50]" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              className="w-full py-7 rounded-2xl bg-[#d5ad64] text-black font-bold text-base"
              onClick={closeMenu}
            >
              KẾT NỐI VỚI CHÚNG TÔI
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
