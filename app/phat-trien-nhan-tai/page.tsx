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

    // Thay VIDEO_ID bằng YouTube ID thật của bạn
    const YOUTUBE_ID = "dQw4w9WgXcQ";

    return (
        <div
            className="min-h-screen font-sans"
            style={{ backgroundColor: '#f3edd7', color: '#20412e' }}
        >
            {/* ── HERO ── */}
            <section
                id="phat-trien-nhan-tai"
                className="relative py-24 px-6 overflow-hidden"
                style={{ backgroundColor: '#20412e' }}
            >
                {/* subtle grain texture overlay */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* decorative circle */}
                <div
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
                    style={{ backgroundColor: '#f3edd7' }}
                />

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <span
                        className="inline-block py-1 px-4 rounded-full text-sm font-semibold mb-6 tracking-widest uppercase"
                        style={{ backgroundColor: '#f3edd7', color: '#20412e' }}
                    >
                        Thế hệ đổi mới nông nghiệp bằng công nghệ enzyme
                    </span>

                    <h1
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: '#f3edd7' }}
                    >
                        BISO Young Agri <br className="hidden md:block" /> Innovators 2026
                    </h1>

                    <p
                        className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto"
                        style={{ color: '#f3edd7', opacity: 0.85 }}
                    >
                        Thực chiến nông nghiệp sạch – Hiểu enzyme từ gốc – Trở thành thế hệ nhà nông mới
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#dang-ky-ngay"
                            className="font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-center"
                            style={{ backgroundColor: '#f3edd7', color: '#20412e' }}
                        >
                            Đăng ký ngay
                        </a>
                        <button
                            className="font-bold py-3 px-8 rounded-lg border-2 transition-colors"
                            style={{ borderColor: '#f3edd7', color: '#f3edd7' }}
                            onClick={() => {
                                document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Xem video chương trình
                        </button>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION ── */}
            <section id="video-section" className="py-20 px-6" style={{ backgroundColor: '#f3edd7' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#20412e', color: '#f3edd7' }}
                    >
                        Video giới thiệu
                    </span>
                    <h2 className="text-3xl font-bold mb-10" style={{ color: '#20412e' }}>
                        Hành trình bắt đầu từ đây
                    </h2>

                    {/* Thumbnail / Player */}
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                        style={{ aspectRatio: '16/9' }}
                        onClick={() => setVideoOpen(true)}
                    >
                        {/* YouTube thumbnail */}
                        <img
                            src="/images/khong-gian-cong-ty.png"
                            alt="Image thumbnail"
                            className="w-full h-full object-cover"
                        />
                        {/* dark overlay */}
                        <div
                            className="absolute inset-0 transition-opacity group-hover:opacity-50"
                            style={{ backgroundColor: '#20412e', opacity: 0.35 }}
                        />
                        {/* play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110"
                                style={{ backgroundColor: '#f3edd7' }}
                            >
                                <Play className="w-8 h-8 ml-1" style={{ color: '#20412e' }} />
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 text-sm" style={{ color: '#20412e', opacity: 0.6 }}>
                        Video không gian công ty BISO JICA 2026
                    </p>
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ backgroundColor: 'rgba(32,65,46,0.92)' }}
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
                        style={{ aspectRatio: '16/9' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="w-full h-full"
                            src="/video/khong-gian-cong-ty.mp4"
                            title="BISO YAI 2026"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                        <button
                            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow"
                            style={{ backgroundColor: '#f3edd7', color: '#20412e' }}
                            onClick={() => setVideoOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            {/* ── VÌ SAO BISO ── */}
            <section className="py-20 px-6" style={{ backgroundColor: '#eae4cc' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: '#20412e' }}>
                        Vì sao BISO tạo ra chương trình này?
                    </h2>
                    <div className="text-lg space-y-4" style={{ color: '#20412e' }}>
                        <p>Nông nghiệp Việt Nam đang chuyển mình.</p>
                        <p className="font-semibold">
                            Nhưng sự thay đổi bền vững không bắt đầu từ sản phẩm. Nó bắt đầu từ tư duy.
                        </p>
                        <div
                            className="mt-8 p-8 rounded-2xl shadow-sm border"
                            style={{ backgroundColor: '#f3edd7', borderColor: '#20412e', borderOpacity: 0.15 }}
                        >
                            <p className="italic" style={{ color: '#20412e', opacity: 0.85 }}>
                                "BISO tin rằng: Nếu sinh viên ngành Nông nghiệp được tiếp cận công nghệ enzyme và mô hình
                                vùng trồng sạch ngay từ khi còn trên ghế nhà trường, họ sẽ trở thành thế hệ kỹ sư và nhà
                                nông đổi mới trong tương lai."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRẢI NGHIỆM ── */}
            <section className="py-20 px-6" style={{ backgroundColor: '#f3edd7' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#20412e' }}>
                        Bạn sẽ trải nghiệm điều gì?
                    </h2>
                    <p className="text-center mb-12" style={{ color: '#20412e', opacity: 0.6 }}>
                        Đây không phải thực tập "ngồi văn phòng". Đây là thực tập thực chiến.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { Icon: Sprout, title: 'Tham quan vùng trồng', desc: 'Trực tiếp quan sát các vùng trồng đang ứng dụng công nghệ enzyme của BISO.' },
                            { Icon: Leaf, title: 'Quan sát thực tế', desc: 'Đánh giá sự khác biệt rõ rệt của đất, hệ rễ và cây trồng.' },
                            { Icon: MapPin, title: 'Truy xuất mã vùng', desc: 'Thực hành giúp sinh viên hiểu về quy trình truy xuất nguồn gốc chuẩn.' },
                            { Icon: BarChart3, title: 'Phân tích hiệu quả', desc: 'Đo lường dữ liệu thực tế trước và sau khi ứng dụng công nghệ.' },
                            { Icon: Users, title: 'Kết nối nhà nông', desc: 'Giao tiếp trực tiếp, thấu hiểu bài toán thực tế của nông dân.' },
                        ].map(({ Icon, title, desc }) => (
                            <div
                                key={title}
                                className="p-6 rounded-xl border transition-shadow hover:shadow-md"
                                style={{ backgroundColor: '#eae4cc', borderColor: 'transparent' }}
                            >
                                <Icon className="w-10 h-10 mb-4" style={{ color: '#20412e' }} />
                                <h3 className="text-xl font-bold mb-2" style={{ color: '#20412e' }}>{title}</h3>
                                <p style={{ color: '#20412e', opacity: 0.7 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LỘ TRÌNH ── */}
            <section className="py-20 px-6" style={{ backgroundColor: '#20412e' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#f3edd7' }}>
                        Lộ trình chương trình
                    </h2>
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
                            <div
                                key={track}
                                className="p-8 rounded-2xl border"
                                style={{ backgroundColor: 'rgba(243,237,215,0.08)', borderColor: 'rgba(243,237,215,0.2)' }}
                            >
                                <span
                                    className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
                                    style={{ backgroundColor: '#f3edd7', color: '#20412e' }}
                                >
                                    {duration}
                                </span>
                                <h3 className="text-2xl font-bold mb-6" style={{ color: '#f3edd7' }}>
                                    {track}
                                </h3>
                                <ul className="space-y-4">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: '#f3edd7', opacity: 0.7 }} />
                                            <span style={{ color: '#f3edd7', opacity: 0.85 }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TÌM KIẾM & CƠ HỘI ── */}
            <section className="py-20 px-6" style={{ backgroundColor: '#f3edd7' }}>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: '#20412e' }}>
                            <GraduationCap className="w-8 h-8" />
                            Chúng tôi tìm kiếm ai?
                        </h2>
                        <ul className="space-y-4">
                            {[
                                'Sinh viên năm 3, 4 hoặc mới tốt nghiệp',
                                'Yêu thích và đam mê nông nghiệp sạch',
                                'Sẵn sàng đi thực địa, không ngại khó',
                                'Có tư duy học hỏi, mở lòng với sự đổi mới',
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 p-4 rounded-lg"
                                    style={{ backgroundColor: '#eae4cc' }}
                                >
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#20412e' }} />
                                    <span style={{ color: '#20412e' }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: '#20412e' }}>
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
                                    style={{ borderColor: '#20412e', borderOpacity: 0.2, backgroundColor: 'transparent' }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#20412e';
                                        (e.currentTarget as HTMLDivElement).querySelector('p')!.style.color = '#f3edd7';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                                        (e.currentTarget as HTMLDivElement).querySelector('p')!.style.color = '#20412e';
                                    }}
                                >
                                    <p className="font-bold" style={{ color: '#20412e' }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ĐĂNG KÝ ── */}
            <section id="dang-ky-ngay" className="py-20 px-6" style={{ backgroundColor: '#eae4cc' }}>
                <div
                    className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl shadow-xl border"
                    style={{ backgroundColor: '#f3edd7', borderColor: 'rgba(32,65,46,0.12)' }}
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#20412e' }}>
                            Đăng ký tham gia ngay
                        </h2>
                        <p style={{ color: '#20412e', opacity: 0.65 }}>Trở thành một phần của thế hệ nhà nông mới</p>
                    </div>

                    <div
                        className="p-6 rounded-lg mb-8 border"
                        style={{ backgroundColor: '#eae4cc', borderColor: 'rgba(32,65,46,0.15)' }}
                    >
                        <h3 className="font-bold mb-2" style={{ color: '#20412e' }}>Hồ sơ bao gồm:</h3>
                        <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: '#20412e', opacity: 0.85 }}>
                            <li>CV cá nhân</li>
                            <li>
                                Bài viết ngắn (khoảng 300 từ) với chủ đề:
                                <br />
                                <span className="italic font-medium">
                                    "Bạn muốn thay đổi điều gì trong nông nghiệp Việt Nam?"
                                </span>
                            </li>
                        </ul>
                        <div
                            className="mt-6 pt-6 border-t"
                            style={{ borderColor: 'rgba(32,65,46,0.2)' }}
                        >
                            <p className="text-sm mb-1" style={{ color: '#20412e', opacity: 0.6 }}>Gửi về Email:</p>
                            <p className="font-bold text-lg" style={{ color: '#20412e' }}>
                                tuyendung@biso.vn{' '}
                                <span className="text-sm font-normal" style={{ opacity: 0.5 }}>(ví dụ)</span>
                            </p>
                            <p className="text-sm mt-2 mb-1" style={{ color: '#20412e', opacity: 0.6 }}>Tiêu đề email:</p>
                            <p
                                className="font-mono inline-block px-3 py-1 border rounded"
                                style={{ backgroundColor: '#fff', color: '#20412e', borderColor: 'rgba(32,65,46,0.2)' }}
                            >
                                BISO YAI 2026 – Họ tên
                            </p>
                        </div>
                    </div>

                    {/* <div className="text-center">
                        <a
                            href="mailto:tuyendung@biso.vn"
                            className="inline-flex items-center gap-2 font-bold py-3 px-10 rounded-lg shadow-lg transition-opacity hover:opacity-90"
                            style={{ backgroundColor: '#20412e', color: '#f3edd7' }}
                        >
                            Gửi hồ sơ ngay
                        </a>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default PhatTrienNhanTai;