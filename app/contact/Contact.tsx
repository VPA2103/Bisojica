"use client"
// components/ContactForm.tsx
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass = (name: string) =>
    `w-full bg-transparent border-b-2 px-0 py-3 text-stone-800 placeholder-stone-400 text-sm tracking-wide transition-all duration-300 outline-none ${
      focused === name ? "border-amber-600" : "border-stone-300"
    }`;

  const fields = [
    { label: "Họ và tên", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Số điện thoại", name: "phone", type: "tel" },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        background: "linear-gradient(160deg, #ffd05c 0%, #f0ebe3 50%, #e8e0d4 100%)",
        fontFamily: "'Noto Serif JP', 'Georgia', serif",
      }}
    >
      {/* Decorative top accent */}
      <div className="w-full max-w-2xl">
        {/* Header block */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-12 bg-amber-600 opacity-60" />
            <span className="text-amber-700 text-xs tracking-[0.3em] uppercase font-sans">Contact Us</span>
            <span className="block h-px w-12 bg-amber-600 opacity-60" />
          </div>
          <h1
            className="text-3xl font-bold text-stone-800 leading-tight mb-1"
            style={{ letterSpacing: "-0.01em" }}
          >
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xs tracking-[0.15em] text-stone-500 uppercase font-sans mt-2">
            BISOJICA JAPAN · VIỆT NAM
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(120,100,70,0.12), 0 2px 8px rgba(0,0,0,0.06)" }}
        >
          {/* Company info strip */}
          <div className="bg-stone-800 text-stone-200 px-8 py-5 font-sans">
            <p className="font-semibold text-sm tracking-wide text-white mb-3 text-center">
              CÔNG TY TNHH BISOJICA JAPAN - VIỆT NAM
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-400 text-center">
              <div className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">◈</span>
                <span>1145 Nguyễn Thị Định, P. Cát Lái, TP. Thủ Đức</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">◈</span>
                <a
                  href="mailto:bisojica@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  bisojica@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">◈</span>
                <a
                  href="tel:0928899939"
                  className="hover:text-amber-400 transition-colors"
                >
                  092 8899 939
                </a>
              </div>
            </div>
          </div>

          {/* Form area */}
          <div className="px-8 py-10">
            {submitted && (
              <div className="mb-8 flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-amber-600 text-lg">✓</span>
                <p className="text-amber-800 text-sm font-sans">
                  Cảm ơn bạn! Chúng tôi đã nhận được thông tin liên hệ và sẽ phản hồi sớm nhất.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Text inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {fields.slice(0, 2).map((f) => (
                  <div key={f.name} className="group">
                    <label
                      className="block text-[10px] uppercase tracking-[0.2em] font-sans text-stone-500 mb-2 transition-colors group-focus-within:text-amber-700"
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.name)}
                      onBlur={() => setFocused(null)}
                      required
                      className={inputClass(f.name)}
                      placeholder={`Nhập ${f.label.toLowerCase()}…`}
                    />
                  </div>
                ))}
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-sans text-stone-500 mb-2 transition-colors group-focus-within:text-amber-700">
                  {fields[2].label}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClass("phone")}
                  placeholder="Nhập số điện thoại…"
                />
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-sans text-stone-500 mb-2 transition-colors group-focus-within:text-amber-700">
                  Nội dung
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  rows={4}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Nội dung cần liên hệ…"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href="https://www.bisojica.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-stone-400 hover:text-amber-600 transition-colors underline underline-offset-4"
                >
                  bisojica.vn
                </a>

                <button
                  type="submit"
                  className="relative overflow-hidden group/btn bg-stone-800 hover:bg-amber-700 text-white text-xs tracking-[0.2em] uppercase font-sans px-8 py-3.5 rounded-lg transition-all duration-300"
                >
                  <span className="relative z-10">Gửi liên hệ</span>
                  <span className="absolute inset-0 bg-amber-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer tagline */}
        <p className="text-center mt-6 text-[11px] text-stone-400 tracking-widest font-sans uppercase">
          Kết nối · Hợp tác · Phát triển
        </p>
      </div>
    </section>
  );
};

export default ContactForm;