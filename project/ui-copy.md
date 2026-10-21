# ui-copy.md — 全站日语字符串 唯一出处

**地位**：本文件是全站日语 UI 字符串的唯一权威出处（交接文档 §2.2 备案）。
**机器镜像**：`../phase-3/site/src/_data/uicopy.json`（构建实际读取的镜像；两处必须同步——改动先改这里，再同步 json）。
站名改动只改这里的 `siteName`（并同步 json）。

> 命名备注：镜像文件名用 `uicopy.json`（无连字符）。Eleventy 数据文件名即模板变量名，
> `ui-copy.json` 会在模板里变成不可直接引用的 `ui-copy`（2026-10-21 构建实测踩坑，已记录）。

## 字符串总表

| key | 値 |
|---|---
| lang | ja |
| siteName | 徒然ノート |
| tagline | 日々の徒然を、静かに書き留めるノート。 |
| description | 組版と伝統色をたずねる、ちいさな日本語のノート。 |
| nav[0] | ホーム → `/` |
| nav[1] | 記事 → `/archives/`（**複数形固定**） |
| nav[2] | このサイトについて → `/about/` |
| ariaCurrent | 現在地 |
| sealChar | 徒 |
| skipToContent | 本文へスキップ |
| latestHeading | 最近のノート |
| archiveHeading | ノート一覧 |
| archiveLead | 書き留めたものは、新しいものから順に、ここに並べてあります。 |
| backToArchive | ノート一覧へ戻る |
| aboutHeading | このサイトについて |
| aboutBody[0] | このサイトは、日々のよしなしごとを書き留めるための、ちいさなノートです。 |
| aboutBody[1] | 組版の手ざわりや、伝統色の名前をたずねながら、ていねいに、静かに、書き留めています。 |
| aboutBody[2] | 名前の「徒然」は、『徒然草』の「つれづれなるままに」の一句からいただきました。ためになる話は多くありませんが、それでも書き留めておく価値はある——そんな気持ちで綴っています。 |
| notFoundHeading | お探しのページが見つかりません |
| notFoundBody | お探しのページは、移動したか、もう存在しないのかもしれません。URL をご確認のうえ、ホームへお戻りください。 |
| backHome | ホームに戻る |
| badgeProofread | 校正済み |
| footerFeed | RSSフィード |
| footerSitemap | サイトマップ |
| copyright | © 2026 徒然ノート |

## 红线相关备注

- `nav[1]` 路径 `/archives/` 为**复数**，双重防复发（交接文档 §1 构造契约）。
- `ariaCurrent`（現在地）对应的 nav 朱色罫线是 tokens 明文允许的装饰，勿在审查中误报。
