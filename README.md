# 徒然ノート（tsurezure note）

日々の徒然を、静かに書き留めるノート。

- **サイト**: https://tsurezure.jerrylabs.dev （→ https://2670044605.github.io/ ）
- **フィード**: https://tsurezure.jerrylabs.dev/feed.xml （Atom）
- **サイトマップ**: https://tsurezure.jerrylabs.dev/sitemap.xml

## 構成

Eleventy 3.1.7 の静的サイト。ソースは `src/`、ビルド設定は `.eleventy.js` のみ。

| 領域 | パス | 役割 |
|---|---|---|
| 記事 | `src/articles/*.md` | `archives/` 配下に公開（`articles.json` で一括設定） |
| 画面 | `src/*.njk`, `src/_includes/*.njk` | njk テンプレート |
| データ | `src/_data/site.json`, `src/_data/uicopy.json` | URL と UI 文言の単一ソース |
| トークン | `src/assets/css/tokens.css` | 色・罫・排版の唯一の事実の源（変更不可規約あり） |
| 徽章 | `src/chip-state.css.njk` | 「校正済み」等の状態スタイル |

## 開発

```sh
npm install
npm run serve   # ローカルプレビュー
npm run build   # _site/ へビルド
```

## デプロイ

`main` への push で GitHub Actions（`.github/workflows/deploy.yml`）が
build → Pages deploy → Lighthouse audit（fail-closed）まで自動実行する。

> 注記: 旧環境由来の `package-lock.json` は本リポジトリには未同梱
> （`@11ty/eleventy` は 3.1.7 で厳密ピン留め済み）。復元後は git push で補完推奨。
