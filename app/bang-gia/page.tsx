import PriceTable from "./PriceTable";
import EnzymePriceTable from "./PriceTable2";

export default function Page() {


  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center text-[--text-color] mb-10 uppercase">
        Bảng báo giá Biso Jica
      </h1>

      {/* NHÚNG FILE BÁO GIÁ CÔNG NGHIỆP */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-[--text-color] border-b-2 border-blue-200 pb-2">
          1. Báo giá Enzyme xử lý nước thải, dầu mỡ, mùi hôi
        </h2>
        <div className="max-w-6xl mx-auto py-10">
          <PriceTable />
        </div>
      </section>

      {/* NHÚNG FILE BÁO GIÁ NÔNG NGHIỆP */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-[--text-color] border-b-2 border-green-200 pb-2">
          2. Báo giá Enzyme Nông nghiệp (Cải tạo đất, Sâu bệnh)
        </h2>
        <div className="max-w-7xl mx-auto py-10">
          <EnzymePriceTable />
        </div>
      </section>

    </div>
  );
}