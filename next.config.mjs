import nextra from "nextra";
import codeImport from "@proto-kit/remark-code-import";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: { codeblocks: true },
  mdxOptions: {
    remarkPlugins: [
        codeImport
    ]
  }
});

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const distDir = process.env.NEXT_BUILD_DIR || "out";

export default withNextra({
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: distDir
  // basePath: isProd ? basePath : "",
  // assetPrefix: isProd ? `${basePath}/` : "",
});
