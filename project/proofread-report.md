# 徒然ノート — 3.3 内容管道 + 全站校对 报告（v2）

- **执行 / 校对**: ちぃ（2026-10-21 用户授权「你随意」自行定夺）
- **执行日**: 2026-10-21（死线 2026-10-22 前完成）；v2 同日补记（站点上线后）
- **性质声明**: 校对 ≠ 验收。本报告不构成 4.1/5.2 验收结论。
- **路径备注**: 旧环境路径为 phase-2/articles/proofread-report.md；新环境仓库内为 project/proofread-report.md，两者内容同步。

## 0. 前置

旧 shared/ 未随空间迁移，经用户授权以交接文档为唯一规格源重建最小集（phase-2 权威源＋phase-3 site）。v1 报告基于重建本地产物；v2 在**线上环境**（https://tsurezure.jerrylabs.dev/）复验全部检查项，并记录当日「仓库根目录旧版文件漂移」事件与修复。

## 1. 三源对账（tokens.css）

phase-2 / src / _site 三处 sha256 = 2699afeb… 一致（2050 字节，含出典注释・規約全文・変更手順）。线上根目录曾为旧版（1964 字节、注释截断）→ 已按 _site 真版重推，并经 raw 字节 cmp 核验一致。

## 2. 检查单（线上复验 2026-10-21）

| # | 项 | 结果 |
|---|---|---|
| 1 | og:title 六页 ×1 | PASS |
| 2 | footer feed/sitemap 链接全页在场；/feed.xml 200（Atom、条目=2） | PASS |
| 3 | /sitemap.xml 200、URL=5、域名正确 | PASS |
| 4 | 徽章「校正済み」：两文页标题下 chip ×1、列表 chip ×2 | PASS |
| 5 | chip-state.css（全页引用）：曾 404 → 补推根目录（544B） | PASS（修复后） |
| 6 | 占位「仮」零命中 | PASS |
| 7 | /archive/ 单数零命中（红线5） | PASS |
| 8 | kanekokohyodo.com 零引用（红线4） | PASS |
| 9 | 性能预算：HTML ≤4,943B / CSS ≤4,366B / 无图片 / 无 @import | PASS |
| 10 | 双副本一致：phase-2/articles ↔ src/articles cmp 字节相同 | PASS |
| 11 | 文体一致：です・ます统一、ui-copy.md 基准 | PASS |
| 12 | 色名・数值与 tokens 一致（墨 #595857、白練 #FBFAF5、藍、朱、利休鼠、24px・行送り1.8・768px） | PASS |
| 13 | 语言层机器扫描（简体字/中文词/英文残留）CLEAN | PASS |

## 3. 线上漂移事件与修复（2026-10-21，重要记录）

上线后 diff 发现仓库根目录部分文件为早期近似版，与已验证 _site 漂移：

1. index.html 缺 `</ul>` 闭合行（−8 字节）→ 重推（5620c0b）
2. chip-state.css 整缺（全页引用→404，徽章无样式）→ 补推（5620c0b）
3. base.css・tokens.css 为旧版（footer 布局・配色注释・focus-visible・::selection 等）→ 重推（33624bd）
4. 两篇文章页：徽章位置（标题下独立 chip）・落款マークアップ（p.seal）・nav 無 aria-current・footer 前空行与产物不符 → 重推（33624bd）
5. 中途一笔推送混入「徒→雨」表记错误 → 依 blob sha 对账发现（cb0b9d38/20e6ee68 ≠ 本地）并订正（33624bd = 6fd16045/a5ff2902 ✓）

**根因**：迁移重建时根目录部分文件由拼装生成、未与 _site 做字节对账。
**教训入规程**：每次发布前 live↔_site blob sha 对账（git hash-object + raw diff）；长文件禁止凭记忆重打，必须从产物读取。

## 4. 语言层

- 机器扫描：scan-simplified.py CLEAN（简体字・中文词汇・英文残留 0；「WCAG」「#595857」「px」「Sabanote 和色大辞典」为有意保留）
- 人工通读：必改 0 件（です・ます统一、体言止め妥当、「眠気の残る」等比喻表达保留原声）
- 紫笺独立复核：2026-10-21 11:2x 委托（第二轮・语言层），回答到达后如出现必改项将另行推送修订；不影响本报告结论

## 5. CI / lockfile

旧环境 package-lock.json（52KB）无法跨机搬运 → 改为 CI 再生：workflow `lockfile` job 由 package.json（@11ty/eleventy 3.1.7 厳密ピン・lockfileVersion 3 与旧件一致）再生并自动提交（[skip ci] 防递归）。README 公开方式章节同步更新（legacy 直下方式・更新手順・project/ 由来）。

## 6. src 保真度

- uicopy.json ↔ ui-copy.md 全键逐行对照一致（「近似重建」嫌疑解除）
- base.njk / index.njk 结构对照产物一致（本地无构建环境，未做构建级字节复验——发布以根目录产物为准）
- chip-state.css.njk 产物与根目录发布件一致（544B）

## 7. 遗留

- 紫笺复核回答待回（到达后按需补推）
- 4.1 / 5.2 验收未开始（本报告不构成验收结论）
