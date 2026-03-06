import Image from "next/image";

export default function StrategicPartners() {
  return (
    <section className="w-full bg-[#ffffff] py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-[#20412e] mb-8 border-l-4 border-[#20412e] pl-3">
          ĐỐI TÁC CHIẾN LƯỢC
        </h2>

        {/* Partner 1 */}
        <div className="mb-10">
          <h3 className="font-semibold text-2xl text-[#20412e] mb-2">
            1. Thành viên của Hiệp hội Nông nghiệp Hữu cơ Việt Nam
          </h3>

          <p className="text-gray-700 text-xl leading-relaxed mb-5">
            Công ty BISO JICA tự hào là thành viên chính thức của Hiệp hội Nông
            nghiệp Hữu cơ Việt Nam, góp phần thúc đẩy sự phát triển bền vững và
            an toàn của nền nông nghiệp hữu cơ trong nước.
          </p>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md h-56 rounded-xl overflow-hidden">
              <Image
                src="/images/doi-tac-chien-luoc/anh-minh-chu-tich-hiep-hoi-nong-nghiep-huu-co-vn.png"
                alt="Hiệp hội Nông nghiệp Hữu cơ Việt Nam"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm text-center text-[#20412e] mt-3 font-medium">
              Anh Mịch – Chủ tịch Hiệp hội Nông nghiệp Hữu cơ Việt Nam
            </p>
          </div>
        </div>

        {/* Partner 2 */}
        <div className="mb-10">
          <h3 className="font-semibold text-2xl text-[#20412e] mb-2">
            2. Đồng hành cùng Trung ương Hội Nông dân Việt Nam
          </h3>

          <p className="text-gray-700 text-xl leading-relaxed mb-5">
            BISO tích cực phối hợp cùng Trung ương Hội Nông dân trong việc phát
            triển mô hình nông nghiệp hữu cơ trên phạm vi cả nước.
          </p>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md h-56 rounded-xl overflow-hidden">
              <Image
                src="/images/doi-tac-chien-luoc/lam-viec-dinh-khac-dinh-ho-gam.png"
                alt="Trung ương Hội Nông dân Việt Nam"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm text-center text-[#20412e] mt-3 font-medium">
              Làm việc với đồng chí Đinh Khắc Đính – Phó Chủ tịch Trung ương Hội
              Nông dân Việt Nam, đồng thời là Chủ tịch Hội Gấm Hiệp hội Nông dân
              tỉnh Đắk Nông
            </p>
          </div>
        </div>

        {/* Partner 3 */}
        <div>
          <h3 className="font-semibold text-2xl text-[#20412e] mb-2">
            3. Hợp tác cùng Hội Nông dân các tỉnh
          </h3>

          <p className="text-gray-700 text-xl leading-relaxed">
            Chúng tôi thường xuyên đồng hành và hỗ trợ Hội Nông dân tại nhiều
            địa phương trong công tác tư vấn, tập huấn kỹ thuật và triển khai
            các mô hình nông nghiệp hữu cơ, nhằm nâng cao giá trị nông sản và
            thu nhập cho bà con nông dân.
          </p>
        </div>
      </div>
    </section>
  );
}