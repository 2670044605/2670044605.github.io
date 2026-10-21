// 徒然ノート — Eleventy 3.x 設定（唯一のビルド設定）
// 規約: 記事 URL は /archives/（複数形）に固定 — 単数形への回帰を防ぐ。
// 注記: addPassthroughCopy のパスはプロジェクトルート起点（input 起点ではない・実測）。
export default function (eleventyConfig) {
  // 表示日付（日本語）: 2026年10月13日
  // Date / 文字列のどちらでも壊れないよう、まず文字列の年月日を取りに行く。
  eleventyConfig.addFilter("dateJa", (value) => {
    const m = String(value).match(/(\d{4})-(\d{2})-(\d{2})/);
    if (m) {
      return `${m[1]}年${parseInt(m[2], 10)}月${parseInt(m[3], 10)}日`;
    }
    return String(value);
  });

  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
