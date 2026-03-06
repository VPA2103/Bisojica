"use client"
import Image from "next/image";
import qr2 from "@/public/images/contact/qr.png"; // ảnh Zalo OA
import qr1 from "@/public/images/contact/qrzl.png"; // ảnh Danh thiếp Zalo

const ContactSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        background: "linear-gradient(160deg, #fdfff0 0%, #f0ebe3 50%, #e8e0d4 100%)",
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
        <div className="w-full h-[400px]">
          <h1 className="text-3xl pb-5">
            Vị trí của chúng tôi
          </h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5879382217763!2d106.77731907648526!3d10.766206459379207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752436c2dc5f75%3A0x50cf0278760c2493!2zMTE0NSBOZ3V54buFbiBUaOG7iyDEkOG7i25oLCBDw6F0IEzDoWksIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2ssg!4v1772624141067!5m2!1sen!2ssg" width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <p className="text-center mt-12 text-xs text-stone-400 tracking-widest uppercase">
          Kết nối · Hợp tác · Phát triển
        </p>
      </div>
    </section>
  );
};

export default ContactSection;