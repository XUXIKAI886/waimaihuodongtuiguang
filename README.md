# 美团活动文档项目

## 项目概览
本仓库基于 VitePress 搭建“美团外卖活动推广”知识库，聚合优惠活动、推广工具、经营策略等内容。为兼顾校对与上线流程，仓库同时保留 `.docx` 原稿与结构化 Markdown 成稿，方便内容团队快速协作，为市场、运营、服务岗位提供统一行动指引。

## 内容体系
- **外卖活动专题**：`docs/waimai-activities/` 收录满减、减配送费、门店新客立减、折扣商品、优惠券等常规玩法，涵盖配置流程、目标人群与监控指标。
- **推广工具专题**：`docs/waimai-promotion/` 下设 `campaign-tools/`（点金推广、拼好饭推广、铂金展位、超级流量卡、订单通等投放工具）与 `operation-support/`（袋鼠店长、赏金联盟、精准营销、金字招牌等经营支撑能力）。
- **资料与素材归档**：`materials/` 以 `activities/`、`promotion/`、`overview/` 归档原稿 `raw/` 与成稿 `markdown/`；`images/` 仅保留 `activities/`、`promotion/`、`overview/`、`common/` 四个子目录，确保任一目录不超过 8 个文件或子目录。
- **站点配置**：导航、主题及构建参数集中在 `docs/.vitepress/config.ts`，首页导航入口维护于 `docs/index.md`。

## 技术栈与运行环境
- Node.js ≥ 18（推荐 LTS），npm ≥ 9。
- VitePress 1.6.x，内置 TypeScript 配置。
- Windows 终端需执行 `chcp 65001` 切换 UTF-8，避免中文输出乱码。

## 本地开发流程
1. 安装依赖：`npm install`。
2. 启动前检查 5173 端口：
   - macOS / Linux：`lsof -ti:5173`
   - Windows：`netstat -ano | findstr 5173`
3. 如被占用，执行 `kill -9 <PID>` 或 `taskkill /F /PID <PID>` 释放端口。
4. 启动开发服务器：`npm run docs:dev`，按终端输出的地址在浏览器预览。
5. 调试完成后，在 `AGENTS.md` 记录操作时间、端口、命令。

## 目录与素材规范
- 所有文档、注释、提交信息必须使用中文；代码变量与函数可使用英文小驼峰，常量使用全大写蛇形。
- Markdown 默认 2 空格缩进，标题层级需连续；图片必须使用相对路径引用 `images/` 或 `docs/public/` 内素材。
- 单文件行数限制：动态语言 ≤ 200 行，静态语言 ≤ 250 行；目录内文件或子目录不得超过 8 个，超出时需拆分。

## 质量检查清单
1. 执行 `npm run docs:build`，确认构建通过、无死链与语法错误。
2. 执行 `npm run docs:preview`，核对导航、锚点、图片是否正常。
3. 自查是否存在重复段落或数据泥团，并同步更新侧边栏与首页导航。

## GitHub Actions 部署指南
仓库自带 `.github/workflows/deploy-docs.yml`，推送到 `main` 或手动运行工作流即可自动发布至 GitHub Pages。
1. **启用 Pages**：在 GitHub `Settings → Pages` 中将 Source 设为 “GitHub Actions”。
2. **基础路径自适应**：`docs/.vitepress/config.ts` 默认读取 `DEPLOY_BASE`，若未设置则回退使用 `GITHUB_REPOSITORY` 自动推算 `/<仓库名>/`。这保证在项目 Pages（非自定义域名）场景下静态资源路径正确。
3. **自定义部署路径**：若使用自定义域名或不同目录，可在仓库 Secrets 中添加 `DOCS_BASE_PATH`，并在工作流中覆盖 `DEPLOY_BASE`。
4. **触发部署**：推送或在 Actions 页面点击 “Run workflow”。构建成功后将自动发布到 `https://<用户名>.github.io/<仓库名>/`。
5. **故障排查**：若页面仅显示纯文本或样式丢失，多半是基础路径配置错误，确认 `DEPLOY_BASE` 或仓库名后重新运行工作流。

## 常见问题
- **构建失败**：查看 Actions 中 `npm run docs:build` 输出，常见原因是引用缺失、语法错误或图片路径错误。
- **资源 404**：检查图片是否按规范归档并使用相对路径；确认构建输出的资源名前带有仓库前缀。
- **本地/线上差异**：线上路径包含仓库名，本地为根路径。可通过 `DEPLOY_BASE='/' npm run docs:build` 模拟自定义域名环境。

## 贡献协作规范
- Git 提交信息使用祈使句，例如“补充门店新客立减案例”。
- 拉取请求需包含改动摘要、验证方式与潜在风险；涉及截图的改动应先归档到 `images/` 再引用。
- 删除或移动文档前确认无其他页面引用；涉及真实商户或用户数据必须脱敏后再提交。
