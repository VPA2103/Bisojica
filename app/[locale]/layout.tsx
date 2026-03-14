import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/layouts/header/Header";
import "aos/dist/aos.css";
import AosProvider from "@/components/AosProvider";
import Footer from "@/layouts/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import QuickContact from "@/components/QuickContact";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BISO JICA VN",
  description: "Công nghệ enzyme Nhật Bản",
};

export default async function LocaleLayout({
  children,
  params: paramsPromise
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const params = await paramsPromise;
  const messages = (await import(`@/messages/${params.locale}.json`)).default;


  return (
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
        >
          <Header />
          <AosProvider />
          {children}
          <QuickContact />
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}

// export default async function LocaleLayout({
//   children,
//   params
// }: {
//   children: React.ReactNode;
//   params: { locale?: string }; // optional
// }) {
//   const locale = params.locale || "vi"; // fallback nếu undefined
//   const messages = (await import(`@/messages/${locale}.json`)).default;
//   console.log("params.locale:", params.locale);
//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }