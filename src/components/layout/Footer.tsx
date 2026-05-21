import { Input, Button } from "@/components/ui";
import Image from "next/image";
import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FooterService } from "@/services/footer.service";

export async function Footer() {
  const data = await FooterService.getData();
  if (!data) return null;

  const top = data.top;
  const bottom = data.bottom;

  return (
    <footer className="bg-[#010816] text-gray-300 relative overflow-hidden px-2 lg:px-0">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#d5ad64]/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="relative w-52 h-24 lg:w-48 lg:h-16 mb-6">
              <Link href={"/"}>
                <Image
                  src={top.column_1.logo}
                  alt="IWMC"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </Link>
            </div>
            <p className="text-base lg:text-sm leading-relaxed text-left text-white/70 max-w-xs">
              {top.column_1.text}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold text-xl lg:text-base uppercase mb-8 flex flex-col items-start gap-2">
              {top.column_2.title}
            </h4>
            <ul className="space-y-4 text-left text-base lg:text-[13px]">
              {top.column_2.links.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-[#d5ad64] hover:translate-x-1 transition-all cursor-pointer"
                >
                  <Link href={link.endpoint}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold text-xl lg:text-base uppercase mb-8 flex flex-col items-start gap-2">
              {top.column_3.title}
            </h4>
            <ul className="space-y-5 text-left text-base lg:text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{top.column_3.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 shrink-0 mt-0.5" />
                <span>{top.column_3.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 shrink-0 mt-0.5" />
                <span>{top.column_3.mail}</span>
              </li>
            </ul>
            <div className="flex gap-6 mt-6">
              <Link href={top.column_3.link_facebook}>
                <FaFacebook className="size-6 hover:text-[#d5ad64] cursor-pointer transition-colors" />
              </Link>
              <Link href={top.column_3.link_youtube}>
                <FaYoutube className="size-6 hover:text-[#d5ad64] cursor-pointer transition-colors" />
              </Link>
              <Link href={top.column_3.link_linkedin}>
                <FaLinkedin className="size-6 hover:text-[#d5ad64] cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold text-xl lg:text-base uppercase mb-4 lg:mb-8 flex flex-col items-start gap-2">
              {top.column_4.title}
            </h4>
            <p className="text-base lg:text-[13px] text-white/60 mb-6 text-left">
              {top.column_4.description}
            </p>
            <div className="relative w-full max-w-sm lg:max-w-none group">
              <Input
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 pr-14 focus:border-[#d5ad64]/50 rounded-lg"
                placeholder="Email của bạn"
              />
              <Button
                variant="ghost"
                className="absolute right-1 top-1 h-10 w-10 p-0 text-[#d5ad64] hover:bg-[#d5ad64] hover:text-black transition-all rounded-md"
              >
                <SendHorizontal className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-around items-start md:items-center gap-4 text-[12px] lg:text-[11px] tracking-wider text-white/40">
          <div>
            <p>{bottom.left.text}</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6 uppercase">
            {bottom.right.links.map((link, index) => (
              <header key={index} className="flex items-center gap-4 md:gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">
                  <Link href={link.endpoint}>{link.text}</Link>
                </span>
                {index < bottom.right.links.length - 1 && (
                  <span className="text-lg opacity-30">|</span>
                )}
              </header>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
