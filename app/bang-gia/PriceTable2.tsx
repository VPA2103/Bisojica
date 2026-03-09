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

export const enzymeProducts: Product[] = [
  {
    name: "DAICHI NO TOMO",
    description: "enzyme cải tạo đất cho cây trồng",
    volumes: [
      { size: "10L", price: 11500000, discount: 1725000, final: 9775000 },
      { size: "100ml", price: 126000, discount: 18900, final: 107100 },
      { size: "1 lít", price: 1200000, discount: 180000, final: 1020000 },
    ],
  },
  {
    name: "DAICHI NO TOMO 500",
    description: "enzyme hữu cơ, sinh học",
    volumes: [
      { size: "10L", price: 3700000, discount: 555000, final: 3145000 },
      { size: "100ml", price: 45000, discount: 6750, final: 38250 },
      { size: "1 lít", price: 390000, discount: 58500, final: 331500 },
    ],
  },
  {
    name: "MITAKA 1000",
    description:
      "enzyme xử lý sâu bệnh, nấm bệnh và côn trùng gây hại trên cây trồng",
    volumes: [
      { size: "10L", price: 11500000, discount: 1725000, final: 9775000 },
      { size: "100ml", price: 126000, discount: 18900, final: 107100 },
      { size: "1 lít", price: 1200000, discount: 180000, final: 1020000 },
    ],
  },
  {
    name: "MITAKA 1200",
    description:
      "enzyme bảo quản trái cây sau thu hoạch, rửa trôi nấm bệnh gây hại",
    volumes: [
      { size: "10L", price: 11400000, discount: 1710000, final: 9690000 },
      { size: "100ml", price: 126000, discount: 18900, final: 107100 },
      { size: "1 lít", price: 1200000, discount: 180000, final: 1020000 },
    ],
  },
  {
    name: "MITAKA 3000",
    description: "Phân hóa mầm hoa",
    volumes: [
      { size: "10L", price: 4700000, discount: 705000, final: 3995000 },
      { size: "100ml", price: 59000, discount: 8850, final: 50150 },
      { size: "1 lít", price: 490000, discount: 73500, final: 416500 },
    ],
  },
  {
    name: "SP 10-15-20",
    description: "Phân bón sinh học hữu cơ enzyme",
    volumes: [
      { size: "10L", price: 4300000, discount: 645000, final: 3655000 },
      { size: "100ml", price: 55000, discount: 8250, final: 46750 },
      { size: "1 lít", price: 450000, discount: 67500, final: 382500 },
    ],
  },
];
const format = (n: number) =>
  new Intl.NumberFormat("vi-VN").format(n) + " đ";

export default function EnzymePriceTable() {
  return (
    <div className="overflow-x-auto border-2 border-black">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-black p-3">HÀNG HÓA</th>
            <th className="border border-black p-3">DUNG TÍCH</th>
            <th className="border border-black p-3">GIÁ NIÊM YẾT</th>
            <th className="border border-black p-3">CHIẾT KHẤU (15%)</th>
            <th className="border border-black p-3">GIÁ SAU CHIẾT KHẤU</th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-green-100 font-semibold text-center">
            <td colSpan={5} className="border border-black p-2">
              GIẢI PHÁP ENZYME ĐẾN TỪ NHẬT BẢN
            </td>
          </tr>

          {enzymeProducts.map((product) =>
            product.volumes.map((v, i) => (
              <tr key={product.name + i} className="text-center">
                {i === 0 && (
                  <td
                    rowSpan={product.volumes.length}
                    className="border border-black p-3 text-left"
                  >
                    <strong>{product.name}</strong>
                    <br />
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