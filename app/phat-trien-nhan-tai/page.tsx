"use client"
import React, { useState } from 'react';
import {
    Leaf,
    Sprout,
    MapPin,
    BarChart3,
    Users,
    Target,
    CheckCircle2,
    GraduationCap,
    Play,
    X
} from 'lucide-react';

const PhatTrienNhanTai: React.FC = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    const YOUTUBE_ID = "dQw4w9WgXcQ";

    return (
        <div className="min-h-screen text-[#20412e] bg-white">

            {/* ── HERO ── */}
            <section
                id="phat-trien-nhan-tai"
                className="relative py-24 px-6 overflow-hidden bg-[#20412e]"
            >
                {/* Subtle grain texture overlay */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* Decorative circle */}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-[#f3edd7]" />

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
                    <span className="inline-block py-1 px-4 rounded-full text-sm font-semibold tracking-widest uppercase bg-[#f3edd7] text-[#20412e]">
                        Thế hệ đổi mới nông nghiệp bằng công nghệ enzyme
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#f3edd7]">
                        BISO Young Agri <br className="hidden md:block" /> Innovators 2026
                    </h1>

                    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-[#f3edd7] opacity-85">
                        Thực chiến nông nghiệp sạch – Hiểu enzyme từ gốc – Trở thành thế hệ nhà nông mới
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#dang-ky-ngay"
                            className="font-bold py-3 px-8 rounded-lg shadow-lg text-center transition-colors bg-[#f3edd7] text-[#20412e]"
                        >
                            Đăng ký ngay
                        </a>
                        <button
                            className="font-bold py-3 px-8 rounded-lg border-2 transition-colors border-[#f3edd7] text-[#f3edd7]"
                            onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Xem video chương trình
                        </button>
                    </div>
                </div>
            </section>

            {/* ── VÌ SAO BISO ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-[#20412e]">Vì sao BISO tạo ra chương trình này?</h2>
                    <div className="text-xl space-y-4 text-[#20412e]">
                        <p className='text-2xl'>Nông nghiệp Việt Nam đang chuyển mình.</p>
                        <p className="font-semibold">Nhưng sự thay đổi bền vững không bắt đầu từ sản phẩm. Nó bắt đầu từ tư duy.</p>
                        <div className="mt-8 p-8 rounded-2xl shadow-sm border border-[#20412e]/15 bg-white">
                            <p className="italic text-[#20412e] opacity-85">
                                "BISO tin rằng: Nếu sinh viên ngành Nông nghiệp được tiếp cận công nghệ enzyme và mô hình
                                vùng trồng sạch ngay từ khi còn trên ghế nhà trường, họ sẽ trở thành thế hệ kỹ sư và nhà
                                nông đổi mới trong tương lai."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRẢI NGHIỆM ── */}
            <section className="py-10 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#20412e] mb-4">Bạn sẽ trải nghiệm điều gì?</h2>
                    

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { Icon: Sprout, title: 'Tham quan vùng trồng', desc: 'Trực tiếp quan sát các vùng trồng đang ứng dụng công nghệ enzyme của BISO.' },
                            { Icon: Leaf, title: 'Quan sát thực tế', desc: 'Đánh giá sự khác biệt rõ rệt của đất, hệ rễ và cây trồng.' },
                            { Icon: MapPin, title: 'Truy xuất mã vùng', desc: 'Thực hành giúp sinh viên hiểu về quy trình truy xuất nguồn gốc chuẩn.' },
                            { Icon: BarChart3, title: 'Phân tích hiệu quả', desc: 'Đo lường dữ liệu thực tế trước và sau khi ứng dụng công nghệ.' },
                            { Icon: Users, title: 'Kết nối nhà nông', desc: 'Giao tiếp trực tiếp, thấu hiểu bài toán thực tế của nông dân.' },
                        ].map(({ Icon, title, desc }) => (
                            <div key={title} className="p-6 rounded-xl border bg-white transition-shadow hover:shadow-md">
                                <Icon className="w-10 h-10 mb-4 text-[#20412e]" />
                                <h3 className="text-xl font-bold mb-2 text-[#20412e]">{title}</h3>
                                <p className="text-[#20412e]/70">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xl text-[#20412e] mt-4">
                        Đây không phải thực tập "ngồi văn phòng". Đây là thực tập thực chiến.
                    </p>
                </div>
            </section>

            {/* ── LỘ TRÌNH ── */}
            <section className="py-20 px-6 bg-[#20412e]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#f3edd7]">Lộ trình chương trình</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                duration: '3 Tháng',
                                track: 'Track 1 – Foundation',
                                items: [
                                    'Nắm vững kiến thức nền tảng về công nghệ Enzyme',
                                    'Đi thực địa tại các vùng trồng',
                                    'Thực hiện báo cáo & thuyết trình dự án đầu kỳ',
                                ],
                            },
                            {
                                duration: '6 Tháng',
                                track: 'Track 2 – Talent',
                                items: [
                                    'Trực tiếp tham gia triển khai mô hình BISO',
                                    'Thu thập và phân tích dữ liệu nông nghiệp',
                                    'Hỗ trợ đội ngũ kỹ thuật & phát triển thị trường',
                                    'Cơ hội trở thành nhân sự chính thức',
                                ],
                            },
                        ].map(({ duration, track, items }) => (
                            <div key={track} className="p-8 rounded-2xl border border-[#f3edd7]/20 bg-[#f3edd7]/10">
                                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 bg-[#f3edd7] text-[#20412e]">{duration}</span>
                                <h3 className="text-2xl font-bold mb-6 text-[#f3edd7]">{track}</h3>
                                <ul className="space-y-4">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 text-[#f3edd7]/70" />
                                            <span className="text-[#f3edd7]/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TÌM KIẾM & CƠ HỘI ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#20412e]">
                            <GraduationCap className="w-8 h-8" />
                            Chúng tôi tìm kiếm ai?
                        </h2>
                        <ul className="space-y-1">
                            {[
                                'Sinh viên năm 3, 4 hoặc mới tốt nghiệp',
                                'Yêu thích và đam mê nông nghiệp sạch',
                                'Sẵn sàng đi thực địa, không ngại khó',
                                'Có tư duy học hỏi, mở lòng với sự đổi mới',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 p-4 rounded-lg bg-white">
                                    <div className="w-2 h-2 rounded-full shrink-0 bg-[#20412e]" />
                                    <span className='text-xl'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='px-7'>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#20412e]">
                            <Target className="w-8 h-8" />
                            Cơ hội sau chương trình
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                'Nhân sự chính thức tại BISO',
                                'Cộng tác viên kỹ thuật',
                                'Đại sứ sinh viên BISO',
                                'Hoa hồng theo dự án',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="p-6 rounded-xl text-center border-2 transition-all hover:shadow-md cursor-default"
                                    style={{ borderColor: 'rgba(32, 65, 46, 0.2)', backgroundColor: 'transparent' }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#20412e';
                                        (e.currentTarget.querySelector('p') as HTMLParagraphElement).style.color = '#f3edd7';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                                        (e.currentTarget.querySelector('p') as HTMLParagraphElement).style.color = '#20412e';
                                    }}
                                >
                                    <p className="font-bold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ĐĂNG KÝ ── */}
            <section id="dang-ky-ngay" className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl shadow-xl border border-[#20412e]/12">
                    <div className="text-center mb-10 space-y-2">
                        <h2 className="text-3xl font-bold text-[#20412e]">Đăng ký tham gia ngay</h2>
                        <p className="text-[#20412e]/65">Trở thành một phần của thế hệ nhà nông mới</p>
                    </div>

                    <div className="p-6 rounded-lg mb-8 border border-[#20412e]/15 bg-white">
                        <h3 className="font-bold mb-2 text-[#20412e]">Hồ sơ bao gồm:</h3>
                        <ul className="list-disc list-inside space-y-2 mb-4 text-[#20412e]/85">
                            <li>CV cá nhân</li>
                            <li>
                                Bài viết ngắn (khoảng 300 từ) với chủ đề:
                                <br />
                                <span className="italic font-medium">"Bạn muốn thay đổi điều gì trong nông nghiệp Việt Nam?"</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-[#20412e]/20 space-y-2">
                            <p className="text-sm text-[#20412e]/60">Gửi về Email:</p>
                            <p className="font-bold text-lg text-[#20412e]">
                                bisojica@gmail.com
                            </p>
                            <p className="text-sm text-[#20412e]/60 mt-2 mb-1">Tiêu đề email:</p>
                            <p className="font-mono inline-block px-3 py-1 border rounded text-[#20412e] bg-white border-[#20412e]/20">
                                BISO YAI 2026 – Họ tên
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhatTrienNhanTai;