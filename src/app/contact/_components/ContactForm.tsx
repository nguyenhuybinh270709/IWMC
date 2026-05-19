import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export function ContactForm() {
  return (
    <section className="bg-[#050810] text-white py-6 lg:py-6 px-6 lg:px-12 font-sans">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        <div className="lg:col-span-7 bg-[#0b1120]/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-center lg:text-left text-2xl lg:text-3xl font-bold text-white/90 mb-2 uppercase">
            Gửi thông tin cho chúng tôi
          </h3>
          <p className="text-center lg:text-left text-sm lg:text-base text-white/60 mb-6">
            Điền vào biểu mẫu bên dưới và đội ngũ chuyên gia của IWMC sẽ liên hệ
            với bạn sớm nhất để hỗ trợ.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Họ và tên *"
                required
                className="w-full bg-[#050810] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d5ad64]"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full bg-[#050810] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d5ad64]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="Số điện thoại *"
                required
                className="w-full bg-[#050810] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d5ad64]"
              />
              <input
                type="text"
                placeholder="Công ty"
                className="w-full bg-[#050810] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d5ad64]"
              />
            </div>

            <div className="relative">
              <p className="text-[15px] text-gray-400 mb-1.5">
                Dịch vụ quan tâm
              </p>
              <select className="w-full bg-[#050810] border border-white/15 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#d5ad64] appearance-none pr-10">
                <option>Chọn dịch vụ</option>
                <option>Tư vấn tài chính</option>
                <option>IPO & Thị trường vốn</option>
                <option>M&A</option>
                <option>Quản trị gia sản</option>
                <option>Đào tạo doanh nghiệp</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>

            <div>
              <p className="text-[15px] text-gray-400 mb-1.5">
                Nội dung tin nhắn *
              </p>
              <textarea
                rows={4}
                placeholder="Vui lòng chia sẻ nhu cầu hoặc câu hỏi của bạn..."
                required
                className="w-full bg-[#050810] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d5ad64] resize-none"
              />
            </div>

            <div className="flex items-center gap-3 lg:gap-2 pt-2">
              <input
                type="checkbox"
                id="policy"
                required
                className="mt-1 accent-[#d5ad64] rounded border-white/15"
              />
              <label
                htmlFor="policy"
                className="text-xs lg:text-sm text-gray-400 select-none"
              >
                Tôi đồng ý với{" "}
                <span className="text-[#d5ad64] cursor-pointer hover:underline">
                  Chính sách bảo mật
                </span>{" "}
                của IWMC
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-linear-to-r from-[#f0debd] via-[#c59f5a] to-[#f0debd] hover:opacity-80 text-[#050810] font-bold text-lg py-3 px-6 rounded-lg uppercase tracking-wider transition-all cursor-pointer flex justify-center items-center gap-2"
            >
              Gửi thông tin
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 bg-[#0b1120]/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="text-center lg:text-left text-2xl lg:text-3xl font-bold text-white/90 mb-2 uppercase">
              Thông tin liên hệ
            </h3>
            <p className="text-center lg:text-left text-sm lg:text-base text-white/60 mb-8">
              Bạn có thể liên hệ với chúng tôi qua các kênh sau:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-[#050810] border border-white/10 text-[#d5ad64] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#d5ad64] uppercase mb-0.5">
                    Địa chỉ
                  </h4>
                  <p className="text-sm text-gray-300">
                    123 Trương Định, Phường Xuân Hòa, TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-[#050810] border border-white/10 text-[#d5ad64] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#d5ad64] uppercase mb-0.5">
                    Điện thoại
                  </h4>
                  <p className="text-sm text-gray-300">0978 888 278</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-[#050810] border border-white/10 text-[#d5ad64] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#d5ad64] uppercase mb-0.5">
                    Email
                  </h4>
                  <p className="text-sm text-gray-300">info@iwmc.vn</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-[#050810] border border-white/10 text-[#d5ad64] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#d5ad64] uppercase mb-0.5">
                    Giờ làm việc
                  </h4>
                  <p className="text-sm text-gray-300">
                    Thứ 2 - Thứ 6: 8:30 - 17:30
                  </p>
                  <p className="text-sm text-gray-300">Thứ 7: 8:30 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-sm font-bold uppercase text-gray-400">
              Kết nối với chúng tôi
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="p-2 rounded-full bg-[#050810] border border-white/10 text-gray-400 hover:text-[#d5ad64] transition-colors"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-[#050810] border border-white/10 text-gray-400 hover:text-[#d5ad64] transition-colors"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-[#050810] border border-white/10 text-gray-400 hover:text-[#d5ad64] transition-colors"
              >
                <FaYoutube size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-[#050810] border border-white/10 text-gray-400 hover:text-[#d5ad64] transition-colors"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
