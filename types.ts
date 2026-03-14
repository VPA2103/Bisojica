// types/index.ts

export type Category = "nong-nghiep" | "cong-nghiep" | "thuy-san";

export type Product = {
  name: string;
  slug: string;
  category: Category;
  mainApplication: string;
  volumes: string[];
  featured?: boolean;
  images: string[];
};

export type ProductUsageMethod = {
  method: string;
  ratio: string;
  example: string;
};

export type ProductTranslation = {
  mainApplication: string;
  features: string[];
  usage: {
    general: string;
    methods: ProductUsageMethod[];
    frequency: string | null;
    note: string | null;
  } | null;
};