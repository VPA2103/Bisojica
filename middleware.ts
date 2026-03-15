// /app/middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vi", "en"],      // bắt buộc
  defaultLocale: "vi",        // mặc định
  localeDetection: false       // optional, auto detect trình duyệt
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};