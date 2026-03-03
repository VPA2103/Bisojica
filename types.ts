type UsageMethod = {
  cach_thuc: string;
  ti_le_pha_loang: string;
  vi_du: string;
};
export type Product = {
  name: string;
  slug: string,
  mainApplication: string;
  features: string[];
  featured?: boolean;
  images: string[];
  cach_su_dung: {
    huong_dan_chung: string;
    phuong_phap_su_dung: UsageMethod[];
    tan_suat: string | null;
    ghi_chu: string | null;
  } | null;
};