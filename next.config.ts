import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./i18n/request.ts" // đường dẫn tới file request config
);

export default withNextIntl({
  // các config Next.js khác nếu có
});