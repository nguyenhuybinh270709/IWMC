import { Input, Button } from "@/components/ui";
import Image from "next/image";
import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#010816] text-gray-300 relative overflow-hidden px-2 lg:px-0">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#d5ad64]/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="relative w-48 h-16 mb-6">
              <Link href={"/"}>
                <Image
                  src="/home/FooterLogo.png"
                  alt="IWMC"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-left text-white/70 max-w-xs">
              Kết nối tầm nhìn. Quản trị giá trị. Kiến tạo tương lai.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold text-base uppercase mb-8 flex flex-col items-start gap-2">
              Liên kết nhanh
            </h4>
            <ul className="space-y-4 text-left text-[13px]">
              {[
                "Về IWMC",
                "Dịch vụ",
                "Chương trình đào tạo",
                "Tin tức",
                "Liên hệ",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-[#d5ad64] hover:translate-x-1 transition-all cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold text-base uppercase mb-8 flex flex-col items-start gap-2">
              Thông tin liên hệ
            </h4>
            <ul className="space-y-5 text-left text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  123 Trương Định, Phường Võ Thị Sáu,
                  <br />
                  Quận 3, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 shrink-0 mt-0.5" />
                <span>0900 888 2707</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 shrink-0 mt-0.5" />
                <span>info@iwmc.vn</span>
              </li>
            </ul>
            <div className="flex gap-6 mt-6">
              <FaFacebook className="size-6 hover:text-[#d5ad64] cursor-pointer transition-colors" />
              <FaYoutube className="size-6 hover:text-[#d5ad64] cursor-pointer transition-colors" />
              <FaLinkedin className="size-6 hover:text-[#d5ad64] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold text-base uppercase mb-8 flex flex-col items-start gap-2">
              Đăng ký nhận tin
            </h4>
            <p className="text-[13px] text-white/60 mb-6 text-left">
              Nhận những thông tin mới nhất về quản trị tài sản và đào tạo.
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
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-around items-start md:items-center gap-4 text-[11px] tracking-wider text-white/40">
          <p>© 2026 IWMC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 md:gap-6 uppercase">
            <span className="hover:text-white cursor-pointer transition-colors">
              Chính sách bảo mật
            </span>
            <span className="hidden md:inline text-lg opacity-20">|</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Điều khoản sử dụng
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
