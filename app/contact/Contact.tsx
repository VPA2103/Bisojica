"use client"
import Image from "next/image";
import qr2 from "@/public/images/contact/qr.jpg"; // ảnh Zalo OA
import qr1 from "@/public/images/contact/qrzl.jpg"; // ảnh Danh thiếp Zalo

const ContactSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        background: "linear-gradient(160deg, #ffd05c 0%, #f0ebe3 50%, #e8e0d4 100%)",
        fontFamily: "'Noto Serif JP', 'Georgia', serif",
      }}
    >
      <div className="w-full max-w-4xl text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-sm text-stone-500 tracking-widest uppercase">
            BISOJICA JAPAN · VIỆT NAM
          </p>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-lg font-semibold text-stone-800 mb-3">
            CÔNG TY TNHH BISOJICA JAPAN - VIỆT NAM
          </h2>
          <p className="text-stone-600">
            1145 Nguyễn Thị Định, P. Cát Lái, TP. Thủ Đức
          </p>
          <p className="mt-2 text-stone-600">
            📞 092 8899 939
          </p>
          <p className="text-stone-600">
            ✉ bisojica@gmail.com
          </p>
        </div>

        {/* QR Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <Image
              src={qr1}
              alt="Zalo OA Biso Jica"
              className="rounded-xl shadow-md"
            />
            <p className="mt-4 text-sm text-stone-600">
              Quét mã để quan tâm Zalo OA
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={qr2}
              alt="Danh thiếp Zalo"
              className="rounded-xl shadow-md"
            />
            <p className="mt-4 text-sm text-stone-600">
              Quét mã để thêm bạn Zalo
            </p>
          </div>
        </div>

        <p className="text-center mt-12 text-xs text-stone-400 tracking-widest uppercase">
          Kết nối · Hợp tác · Phát triển
        </p>
      </div>
    </section>
  );
};

export default ContactSection;