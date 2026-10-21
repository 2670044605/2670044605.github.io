# 徒然ノート（tsurezure note）

日々の徒然を、静かに書き留めるノート。

- **サイト**: https://tsurezure.jerrylabs.dev （`2670044605.github.io` は 301 でこちらへ）
- **フィード**: https://tsurezure.jerrylabs.dev/feed.xml （Atom）
- **サイトマップ**: https://tsurezure.jerrylabs.dev/sitemap.xml

## 公開方式（重要）

**ビルド済みの静的ファイルをリポジトリ直下に置く**方式で公開している
（GitHub Pages の legacy branch 配信 + `.nojekyll`）。`main` への push がそのまま公開になる。
Pages の設定が legacy 型のため、`src/` だけ改めても反映されない。

**更新手順**: `src/` を改めたら `npm run build` で `_site/` を作り直し、成果物を
リポジトリ直下へ反映して push。push 前に live↔`_site` のバイト比較を推奨。

> 2026-10-21: workflow 型への切替は GITHUB_TOKEN の権限制約（`administration:write` なし）
> で不可と判明 → legacy 直下方式が本プロジェクトの正解。

## 構成

| 領域 | 内容 |
|---|---|
| `/`（ルート） | 公開成果物（`_site/` 相当: HTML / CSS / feed.xml / sitemap.xml / CNAME / `.nojekyll`） |
| `src/` | Eleventy 3.1.7 ソース（テンプレート / 記事 md / tokens・base.css） |
| `project/` | 由来記録: `ui-copy.md`（全站 UI 文言の唯一の権威源）・校对報告 |
| `.github/workflows/` | CI（audit + lockfile） |

## CI（.github/workflows/deploy.yml）

- **audit**: push ごとに Lighthouse を真 Chrome で実行。fail-closed、4 指標 ≥ 0.9。
- **lockfile**: `package.json`（`@11ty/eleventy` 3.1.7 で厳密ピン）から `package-lock.json`
  を再生し、差分があれば自動コミット（`[skip ci]` で再帰防止）。
