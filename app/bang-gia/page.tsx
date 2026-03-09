
export default function Page() {
  // Thay các đường dẫn này bằng link thực tế sau khi bạn upload file lên host hoặc Google Drive
  const pdfUrlNongNghiep = "/files/pdf/bao-gia-nn-khach-le-ck15.pdf";
  const pdfUrlCongNghiep = "/files/pdf/BangBaoGia_CN_KhachLe_CK15.pdf";

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-[--text-color] mb-10 uppercase">
        Bảng báo giá Biso Jica
      </h1>

      {/* NHÚNG FILE BÁO GIÁ CÔNG NGHIỆP */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-[--text-color] border-b-2 border-blue-200 pb-2">
          1. Báo giá Enzyme xử lý nước thải, dầu mỡ, mùi hôi
        </h2>
        <div className="w-full h-[600px] border-2 border-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src={`${pdfUrlCongNghiep}#toolbar=0`} 
            width="100%"
            height="100%"
            title="Báo giá Enzyme Công nghiệp"
          >
            <p>Trình duyệt của bạn không hỗ trợ xem PDF trực tiếp. 
               <a href={pdfUrlCongNghiep}>Nhấn vào đây để tải file.</a>
            </p>
          </iframe>
        </div>
      </section>

      {/* NHÚNG FILE BÁO GIÁ NÔNG NGHIỆP */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-[--text-color] border-b-2 border-green-200 pb-2">
          2. Báo giá Enzyme Nông nghiệp (Cải tạo đất, Sâu bệnh)
        </h2>
        <div className="w-full h-[600px] border-2 border-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src={`${pdfUrlNongNghiep}#toolbar=0`}
            width="100%"
            height="100%"
            title="Báo giá Enzyme Nông nghiệp"
          >
            <p>Trình duyệt của bạn không hỗ trợ xem PDF trực tiếp. 
               <a href={pdfUrlNongNghiep}>Nhấn vào đây để tải file.</a>
            </p>
          </iframe>
        </div>
      </section>

    </div>
  );
}