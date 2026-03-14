import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // next-intl v4 dùng `requestLocale` thay vì `locale`
  const locale = (await requestLocale) ?? "vi";

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});