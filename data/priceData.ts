export type VolumePrice = {
  size: string;
  price: number;
  discount: number;
  final: number;
};

export type PriceProduct = {
  key: string; // dùng tra JSON
  name: string;
  volumes: VolumePrice[];
};

export const industrialPrices: PriceProduct[] = [
  {
    key: "bk-partner",
    name: "BK - PARTNER",
    volumes: [
      { size: "10 lít", price: 12290000, discount: 1843500, final: 10446500 },
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
  {
    key: "bk-oilbuster",
    name: "BK - OILBUSTER",
    volumes: [
      { size: "10 lít", price: 12290000, discount: 1843500, final: 10446500 },
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
  {
    key: "nioi-zero",
    name: "NIOI ZERO",
    volumes: [
      { size: "10 lít", price: 12290000, discount: 1843500, final: 10446500 },
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
];

export const agriculturePrices: PriceProduct[] = [
  {
    key: "daichi-no-tomo",
    name: "DAICHI NO TOMO",
    volumes: [
      { size: "10L", price: 11500000, discount: 1725000, final: 9775000 },
      { size: "100ml", price: 126000, discount: 18900, final: 107100 },
      { size: "1 lít", price: 1200000, discount: 180000, final: 1020000 },
    ],
  },
  {
    key: "daichi-no-tomo-500",
    name: "DAICHI NO TOMO 500",
    volumes: [
      { size: "10L", price: 3700000, discount: 555000, final: 3145000 },
      { size: "100ml", price: 45000, discount: 6750, final: 38250 },
      { size: "1 lít", price: 390000, discount: 58500, final: 331500 },
    ],
  },
  {
    key: "mitaka-1000",
    name: "MITAKA 1000",
    volumes: [
      { size: "10L", price: 11500000, discount: 1725000, final: 9775000 },
      { size: "100ml", price: 126000, discount: 18900, final: 107100 },
      { size: "1 lít", price: 1200000, discount: 180000, final: 1020000 },
    ],
  },
  {
    key: "mitaka-1200",
    name: "MITAKA 1200",
    volumes: [
      { size: "10L", price: 11400000, discount: 1710000, final: 9690000 },
      { size: "100ml", price: 126000, discount: 18900, final: 107100 },
      { size: "1 lít", price: 1200000, discount: 180000, final: 1020000 },
    ],
  },
  {
    key: "mitaka-3000",
    name: "MITAKA 3000",
    volumes: [
      { size: "10L", price: 4700000, discount: 705000, final: 3995000 },
      { size: "100ml", price: 59000, discount: 8850, final: 50150 },
      { size: "1 lít", price: 490000, discount: 73500, final: 416500 },
    ],
  },
  {
    key: "sp-10-15-20",
    name: "SP 10-15-20",
    volumes: [
      { size: "10L", price: 4300000, discount: 645000, final: 3655000 },
      { size: "100ml", price: 55000, discount: 8250, final: 46750 },
      { size: "1 lít", price: 450000, discount: 67500, final: 382500 },
    ],
  },
];

export const aquaculturePrices: PriceProduct[] = [
  {
    key: "lake-power",
    name: "LAKE POWER",
    volumes: [
      { size: "10 lít", price: 12290000, discount: 1843500, final: 10446500 },
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
  {
    key: "bf-natural",
    name: "BF NATURAL",
    volumes: [
      { size: "10 lít", price: 12290000, discount: 1843500, final: 10446500 },
      { size: "100ml", price: 135000, discount: 20250, final: 114750 },
      { size: "1 lít", price: 1290000, discount: 193500, final: 1096500 },
    ],
  },
];