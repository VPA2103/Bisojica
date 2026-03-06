"use client"
import Image from "next/image";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────
type PageId = 1 | 2 | 3 | 4 | 5 | 6;

// ─── Logo ────────────────────────────────────────────────
const Logo = ({ light = false }: { light?: boolean }) => {
  return (
    <div className="w-32 h-auto">
      <Image
        src="/logo.png"
        alt="BISO JICA"
        width={100}   // điều chỉnh kích thước phù hợp
        height={32}   // điều chỉnh chiều cao
        className="object-contain"
      />
    </div>
  );
};


// ─── Divider ─────────────────────────────────────────────
const Divider = () => <div className="w-full h-px bg-[#1a2e4a] my-3" />;

// ─── Page 1 – Cover ──────────────────────────────────────
const Page1 = () => (
  <div className="relative w-full min-h-screen bg-linear-to-br from-[#0d1e30] via-[#143450] to-[#2a6080] overflow-hidden flex flex-col">
    {/* Network glow effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-[#4ab0e0]/20 blur-3xl" />
      <div className="absolute top-[30%] left-[10%] w-48 h-48 rounded-full bg-[#8060b0]/15 blur-2xl" />
      <div className="absolute top-[55%] right-[30%] w-32 h-32 rounded-full bg-[#60b0d0]/20 blur-xl" />
      {/* SVG network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#7ecef4" strokeWidth="0.6" fill="none">
          <line x1="60" y1="80" x2="200" y2="160" />
          <line x1="200" y1="160" x2="350" y2="90" />
          <line x1="350" y1="90" x2="490" y2="200" />
          <line x1="200" y1="160" x2="280" y2="320" />
          <line x1="280" y1="320" x2="420" y2="280" />
          <line x1="420" y1="280" x2="490" y2="200" />
          <line x1="60" y1="80" x2="140" y2="280" />
          <line x1="140" y1="280" x2="280" y2="320" />
          <line x1="280" y1="320" x2="200" y2="460" />
          <line x1="200" y1="460" x2="100" y2="500" />
          <line x1="420" y1="280" x2="500" y2="420" />
          <line x1="500" y1="420" x2="380" y2="520" />
          <line x1="380" y1="520" x2="200" y2="460" />
          <line x1="140" y1="280" x2="60" y2="400" />
          <line x1="100" y1="500" x2="180" y2="600" />
          <line x1="380" y1="520" x2="460" y2="620" />
          <line x1="350" y1="90" x2="420" y2="40" />
          <line x1="490" y1="200" x2="560" y2="140" />
          <line x1="500" y1="420" x2="580" y2="380" />
        </g>
        {/* Nodes */}
        {[
          [60, 80], [200, 160], [350, 90], [490, 200], [280, 320],
          [420, 280], [140, 280], [200, 460], [100, 500], [500, 420],
          [380, 520], [60, 400], [180, 600], [460, 620], [420, 40], [560, 140], [580, 380]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 4 === 0 ? 4 : 2.5} fill="#7ecef4" opacity={i % 3 === 0 ? 0.9 : 0.5} />
        ))}
        {/* Pink accent nodes */}
        {[[350, 90], [420, 280], [500, 420]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={5} fill="#e090c0" opacity="0.7" />
        ))}
      </svg>
    </div>

    {/* Logo */}
    <div className="relative z-10 p-6">
      <Logo light />
    </div>

    {/* Spacer */}
    <div className="flex-1" />

    {/* Title box */}
    <div className="relative z-10 bg-white/92 backdrop-blur-sm px-8 py-8">
      <h1 className="font-black text-[#1a2e4a] text-4xl uppercase leading-snug tracking-wide" style={{ fontFamily: "'Arial', serif", fontWeight: 700 }}>
        Enzyme Nền Tảng<br />
        Vô Hình Cho Một Nền<br />
        Nông Nghiệp Bền Vững
      </h1>
    </div>
  </div>
);

// ─── Page 2 – Enzyme Chất Xúc Tác ────────────────────────
const Page2 = () => (
  <div className="bg-[#f5f0e8] w-full min-h-screen flex flex-col">
    {/* Header Logo */}
    <div className="p-6 pb-2">
      <Logo />
    </div>

    {/* Title */}
    <div className="px-7 pt-4 max-w-[1024px] mx-auto w-full">
      <h2 className="font-black text-[#1a2e4a] text-4xl uppercase leading-snug" style={{ fontFamily: "Arial", fontWeight: 700 }}>
        Enzyme – Chất Xúc Tác Của<br />Sự Sống
      </h2>
      <Divider />
    </div>

    {/* Intro Text */}
    <div className="px-7 py-2 max-w-[1024px] mx-auto w-full">
      <p className="text-xl leading-relaxed text-[#2c2c2c]">
        Enzyme giống như "cái kéo – cái chìa khóa" trong tự nhiên. Nó giúp:
      </p>
      <ul className="list-disc pl-5 mt-2 text-xl leading-relaxed text-[#2c2c2c] space-y-1">
        <li>Cắt – tách – chuyển hóa chất dinh dưỡng thành dạng cây dễ hấp thụ.</li>
        <li>Mở khóa – kích hoạt quá trình sống của cây và vi sinh vật.</li>
      </ul>
    </div>

    {/* Example Text */}
    <div className="px-7 py-4 max-w-[1024px] mx-auto w-full">
      <div className="w-full h-px bg-[#c8bfa8] mb-4" />
      <p className="text-xl leading-relaxed text-[#2c2c2c]">
        Ví dụ: Nếu dinh dưỡng trong đất là "thức ăn", thì enzyme chính là "nồi nấu" – giúp
        "nấu chín" để cây ăn được.
      </p>
      <p className="text-xl leading-relaxed text-[#2c2c2c] mt-2">
        Không có enzyme → đất dù giàu dinh dưỡng, cây vẫn không hấp thụ nổi.
      </p>
    </div>

    {/* Mushroom Photo */}
    <div className="px-7 py-4 max-w-[1024px] mx-auto w-full">
      <div className="w-full bg-gradient-to-br from-[#2d4a1e] via-[#3d6028] to-[#1a3010] flex items-center justify-center">
        <Image
          src="/images/enzyme/anh-nam.png"
          alt="Anh nam"
          width={1024} // width max
          height={512} // tỉ lệ 2:1 ví dụ
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* Footer Message */}
    <div className="bg-[#1a2e4a] px-7 py-6 max-w-[1024px] mx-auto w-full text-center">
      <p className="text-white text-xl font-bold uppercase tracking-widest leading-relaxed">
        Không có enzyme, sự sống không thể duy trì – kể cả với chính<br />con người chúng ta.
      </p>
    </div>
  </div>
);

// ─── Page 3 – Enzyme Giúp Gì Cho Nông Dân? ───────────────
const Page3 = () => (
  <div className="bg-[#f5f0e8] w-full min-h-screen">
    <div className="p-6 pb-2"><Logo /></div>

    <div className="px-7 pt-2 pb-3">
      <h2
        className="font-black text-[#1a2e4a] text-4xl uppercase leading-snug"
        style={{ fontFamily: "Arial", fontWeight: 700 }}
      >
        Enzyme Giúp Gì Cho Nông Dân?
      </h2>
    </div>

    {/* Top section: soil photo + 2 benefits */}
    <div className="flex gap-0 mb-0">
      {/* Soil image left */}
      <div className="">
        <div className=" bg-linear-to-br flex items-center ">
          <Image
            src="/images/enzyme/soil.png" // đường dẫn ảnh của bạn
            alt="Soil"
            width={300}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right column */}
      <div className="flex-1 px-5 pt-2">
        <h3 className="font-bold text-[#1a2e4a] text-xl mb-1">Làm đất tơi xốp – tăng vi sinh vật có lợi</h3>
        <div className="w-full h-px bg-[#c8bfa8] mb-2" />
        <ul className="list-disc pl-4 text-xl leading-relaxed text-[#2c2c2c] space-y-1 mb-4">
          <li>Phân hủy gốc rạ, hữu cơ nhanh hơn.</li>
          <li>Cải tạo đất, giảm bệnh thối rễ, vàng lá.</li>
        </ul>

        <h3 className="font-bold text-[#1a2e4a] text-xl mb-1">Tăng đề kháng cho cây</h3>
        <div className="w-full h-px bg-[#c8bfa8] mb-2" />
        <ul className="list-disc pl-4 text-xl leading-relaxed text-[#2c2c2c] space-y-1">
          <li>Cây có đủ enzyme = miễn dịch khỏe.</li>
          <li>Chống chịu sâu bệnh & thời tiết tốt hơn.</li>
          <li>Kéo dài thời gian bảo quản nông sản, như ngăn chặn quá trình chín, thối rữa hay oxy hóa sau thu hoạch.</li>
        </ul>
      </div>
    </div>

    {/* Bottom section: 2 benefits + cabbage photo */}
    <div className="flex gap-0 mt-2">
      <div className="flex-1 px-7 pt-2">
        <h3 className="font-bold text-[#1a2e4a] text-2xl mb-1">Giúp cây hấp thu tốt hơn</h3>
        <div className="w-full h-px bg-[#c8bfa8] mb-2" />
        <ul className="list-disc pl-4 text-2xl leading-relaxed text-[#2c2c2c] space-y-1 mb-4">
          <li>Giải phóng dinh dưỡng bị "khóa" trong đất.</li>
          <li>Cây ăn khỏe, lớn đều, tiết kiệm phân.</li>
        </ul>

        <h3 className="font-bold text-[#1a2e4a] text-2xl mb-1">Giảm hóa chất</h3>
        <div className="w-full h-px bg-[#c8bfa8] mb-2" />
        <ul className="list-disc pl-4 text-2xl leading-relaxed text-[#2c2c2c] space-y-1">
          <li>Cây khỏe tự nhiên, ít bệnh.</li>
          <li>Giảm xịt thuốc & phân hóa học.</li>
          <li>Khóa kim loại nặng trong đất, giúp cây không bị ảnh hưởng bởi các độc tố do phân bón hóa học, TBVTV, ô nhiễm môi trường,... gây ra.</li>
        </ul>
      </div>

      {/* Cabbage photo right */}
      <div className="">
        <div className="bg-linear-to-br flex items-center justify-center mt-4 p-6">
          <Image
            src="/images/enzyme/cabbage.png"
            alt="Cabbage"
            width={300}
            height={120}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

// ─── Page 4 – Vậy Enzyme Diệu Kỳ Là Gì? ─────────────────
const Page4 = () => (
  <div className="bg-[#f5f0e8] w-full min-h-screen">
    <div className="p-6 pb-2"><Logo /></div>

    {/* Enzyme molecular photo */}
    <div className="relative mx-7 mb-0 rounded-sm overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src="/images/enzyme/anh-vi-khuan.png" // đường dẫn ảnh của bạn
          alt="Enzyme molecule"
          fill
          className="object-cover"
        />
      </div>
      {/* Title overlay */}
      <div className="bg-[#1a2e4a] px-6 py-5">
        <h2 className="font-black text-white text-4xl uppercase leading-snug"
          style={{ fontFamily: "Arial", fontWeight: 700 }}>
          Vậy Enzyme Diệu Kỳ<br />Là Gì?
        </h2>
      </div>
    </div>

    <div className="px-7 py-5 space-y-4">
      <p className="text-2xl leading-relaxed text-[#2c2c2c]">
        "Enzyme Diệu Kỳ" là cách gọi loại enzyme nguyên mẫu, nền tảng cho hơn 5.000 enzyme khác trong cơ thể sống.<br />
        Nó chính là "gốc rễ" cho mọi phản ứng sinh học duy trì sự sống.
      </p>
      <p className="text-2xl leading-relaxed text-[#2c2c2c]">
        Enzyme diệu kỳ không chỉ có tác dụng với sức khỏe con người mà còn có những ứng dụng tuyệt vời trong nông nghiệp bền vững, giúp bảo vệ môi trường, cải thiện đất và năng suất cây trồng một cách hiệu quả và tự nhiên. Chúng giúp nông dân giảm thiểu việc sử dụng phân bón hóa học, thuốc trừ sâu, và mang lại nền nông nghiệp khỏe mạnh hơn cho cả con người và thiên nhiên.
      </p>
    </div>
  </div>
);

// ─── Page 5 – Comparison Table ───────────────────────────
const Page5 = () => {
  const rows = [
    {
      label: "Bản chất",
      normal: "Một loại enzyme đơn lẻ.",
      miracle: "Enzyme nguyên mẫu – nguồn gốc của hàng ngàn enzyme khác.",
    },
    {
      label: "Vai trò",
      normal: "Làm 1 nhiệm vụ cụ thể (ví dụ tiêu hóa tinh bột).",
      miracle: "Kích hoạt & điều hòa hàng loạt phản ứng sinh học.",
    },
    {
      label: "Tác động",
      normal: "Cục bộ, theo chức năng riêng biệt.",
      miracle: "Toàn diện – từ hấp thu, thải độc đến đề kháng.",
    },
    {
      label: "Trong nông nghiệp",
      normal: "Hỗ trợ phân giải, làm đất, tăng hấp thu.",
      miracle: "Cải tạo đất, kích vi sinh, tăng miễn dịch, hạn chế TBVTV.",
    },
    {
      label: "Ví dụ",
      normal: "Người thợ làm từng phần việc.",
      miracle: "Người kỹ sư trưởng, vận hành cả hệ thống.",
    },
  ];

  return (
    <div className="bg-[#f5f0e8] w-full min-h-screen">
      <div className="p-6 pb-2"><Logo /></div>

      <div className="bg-[#1a2e4a] px-7 py-5 mb-6">
        <h2 className="font-black text-white text-4xl uppercase leading-snug"
          style={{ fontFamily: "Arial", fontWeight: 700 }}>
          Enzyme & Enzyme Diệu Kỳ – Khác<br />Nhau Chỗ Nào?
        </h2>
      </div>

      <div className="px-7">
        {/* Header row */}
        <div className="grid grid-cols-[100px_1fr_1fr] mb-1">
          <div />
          <div className="text-center text-xl font-semibold text-[#1a2e4a] pb-2 pr-2">Enzyme thông thường</div>
          <div className="text-center text-xl font-semibold text-[#1a2e4a] pb-2 pl-2">Enzyme Diệu Kỳ</div>
        </div>

        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[100px_1fr_1fr] mb-1 items-stretch min-h-[60px]">
            {/* Label */}
            <div className="flex items-center pr-3">
              <div>
                <p className="text-xl font-bold text-[#1a2e4a] underline decoration-[#1a2e4a] underline-offset-2">{row.label}</p>
              </div>
            </div>
            {/* Normal enzyme */}
            <div className={`flex items-center px-3 py-2 text-xl leading-relaxed ${i % 2 === 0 ? "bg-[#f5f0e8] text-[#2c2c2c]" : "bg-[#1a2e4a] text-white"}`}>
              {row.normal}
            </div>
            {/* Miracle enzyme */}
            <div className={`flex items-center px-3 py-2 text-xl leading-relaxed ${i % 2 === 0 ? "bg-[#1a2e4a] text-white" : "bg-[#f5f0e8] text-[#2c2c2c]"}`}>
              {row.miracle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 6 – Vì Sao Nên Dùng Enzyme? ────────────────────
const Page6 = () => (
  <div className="bg-[#f5f0e8] w-full min-h-screen">
    <div className="p-6 pb-2"><Logo /></div>

    <div className="bg-[#1a2e4a] px-7 py-5 mb-5">
      <h2 className="font-black text-white text-4xl uppercase leading-snug"
        style={{ fontFamily: "Arial", fontWeight: 700 }}>
        Vì Sao Nên Dùng Enzyme<br />(Đặc Biệt Là Enzyme Diệu Kỳ)?
      </h2>
    </div>

    <div className="px-7 mb-4">
      <ul className="list-disc pl-5 text-xl leading-relaxed text-[#2c2c2c] space-y-2">
        <li>Là "trợ lý vô hình" giúp đất tơi xốp, màu mỡ, cây hấp thu dưỡng chất tốt hơn.</li>
        <li>Như "men tiêu hóa" của cây – hỗ trợ cây chuyển hóa dinh dưỡng, khỏe mạnh tự nhiên.</li>
        <li>Giúp cây ra hoa, đậu trái khỏe, tăng sức đề kháng, hạn chế sâu bệnh.</li>
        <li>Tăng cường sự phát triển bộ rễ và hệ thống cây trồng toàn diện.</li>
        <li>Giảm ô nhiễm đất – nước và duy trì sự hài hòa sinh học trong nền nông nghiệp tự nhiên.</li>
        <li>Biến rơm rạ, bã mía thành bioethanol – tạo năng lượng sạch từ phụ phẩm nông nghiệp.</li>
        <li>Hướng tới nền nông nghiệp xanh – bền vững – giảm chi phí – tăng lợi nhuận cho nhà nông.</li>
      </ul>
    </div>

    {/* Rice terraces photo */}
    <div className="relative h-64 w-full">
      <Image
        src="/images/enzyme/anh-canh-dong.png" // đường dẫn ảnh của bạn
        alt="Enzyme molecule"
        fill
        className="object-cover"
      />
    </div>

    <div className="bg-[#1a2e4a] px-7 py-6 text-center">
      <p className="text-white text-xl italic leading-relaxed">
        "Đất có enzyme giống như ruộng có trùn – đất sống, cây khỏe, ít phải lo<br />xịt thuốc nhiều!"
      </p>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────
const pages: { id: PageId; label: string; component: React.FC }[] = [
  { id: 1, label: "Trang bìa", component: Page1 },
  { id: 2, label: "Enzyme là gì?", component: Page2 },
  { id: 3, label: "Lợi ích", component: Page3 },
  { id: 4, label: "Enzyme Diệu Kỳ", component: Page4 },
  { id: 5, label: "So sánh", component: Page5 },
  { id: 6, label: "Vì sao dùng?", component: Page6 },
];

export default function EnzymeBisoJica() {
  return (
    <div
      className="w-full bg-stone-200 flex flex-col items-center"
      style={{ fontFamily: "Arial", fontWeight: 700 }}
    >
      {pages.map((p) => {
        const Component = p.component;
        return (
          <section
            key={p.id}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-[1024px]">
              <Component />
            </div>
          </section>
        );
      })}
    </div>
  );
}