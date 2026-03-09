"use client";

type Product = {
  name: string;
  description: string;
  volumes: {
    size: string;
    price: number;
    discount: number;
    final: number;
  }[];
};

const products: Product[] = [
  {
    name: "BK - PARTNER",
    description: "enzyme xử lý nước thải (phân hủy hữu cơ)",
    volumes: [
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
  {
    name: "BK - OILBUSTER",
    description: "enzyme xử lý chất béo và dầu mỡ",
    volumes: [
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
  {
    name: "NIOI ZERO",
    description: "enzyme xử lý mùi hôi chuồng trại, ủ phân bón",
    volumes: [
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
];

const format = (n: number) =>
  new Intl.NumberFormat("vi-VN").format(n) + " đ";

export default function PriceTable() {
  return (
    <div className="overflow-x-auto border-2 border-black">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-black p-3">HÀNG HÓA</th>
            <th className="border border-black p-3">DUNG TÍCH</th>
            <th className="border border-black p-3">GIÁ NIÊM YẾT (VND)</th>
            <th className="border border-black p-3">CHIẾT KHẤU (15%)</th>
            <th className="border border-black p-3">
              GIÁ SAU CHIẾT KHẤU (VND)
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-green-100 font-semibold">
            <td colSpan={5} className="border border-black p-2 text-center">
              GIẢI PHÁP ENZYME ĐẾN TỪ NHẬT BẢN
            </td>
          </tr>

          {products.map((product, index) =>
            product.volumes.map((v, i) => (
              <tr key={product.name + i} className="text-center">
                {i === 0 && (
                  <td
                    rowSpan={product.volumes.length}
                    className="border border-black p-3 text-left"
                  >
                    <strong>{product.name}</strong>: <br />
                    {product.description}
                  </td>
                )}

                <td className="border border-black p-2">{v.size}</td>
                <td className="border border-black p-2 font-semibold">
                  {format(v.price)}
                </td>
                <td className="border border-black p-2">
                  {format(v.discount)}
                </td>
                <td className="border border-black p-2 font-semibold">
                  {format(v.final)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}