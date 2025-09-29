# 美团活动文档项目

## 项目概览
本仓库基于 VitePress 搭建“美团外卖活动推广”知识库，整合优惠活动、推广工具、经营策略等资料。为了兼顾成稿输出与校对流程，仓库同时保留 `.docx` 原稿与结构化 Markdown 文档，便于内容团队快速协同，为市场、运营、服务团队提供统一的行动指引。

## 内容体系
- **外卖活动专题**：`docs/waimai-activities/` 收录满减、减配送费、门店新客立减、折扣商品、优惠券等常规玩法，强调配置流程、目标人群与监控指标。
- **推广工具专题**：`docs/waimai-promotion/` 下分 `campaign-tools/`（点金推广、拼好饭推广、铂金展位、超级流量卡、订单通等投放工具）与 `operation-support/`（袋鼠店长、赏金联盟、精准营销、金字招牌等经营支撑能力）。
- **素材归档**：`materials/` 依据业务板块拆分 `activities/`、`promotion/`、`overview/`，并以 `raw/`、`markdown/` 管理原稿与成稿；`images/` 仅保留 `activities/`、`promotion/`、`overview/`、`common/` 四级目录，保证任一目录不超过 8 个文件或子目录。
- **站点配置**：导航、主题与构建参数集中在 `docs/.vitepress/config.ts`，首页导航入口统一维护在 `docs/index.md`。

## 技术栈与运行环境
- Node.js ≥ 18（推荐 LTS 版本），npm ≥ 9。
- VitePress 1.3.x，内置 TypeScript 配置。
- Windows 终端需执行 `chcp 65001` 切换 UTF-8，避免中文输出乱码。

## 本地开发流程
1. 安装依赖：`npm install`。
2. 启动前检查 5173 端口：
   - macOS / Linux：`lsof -ti:5173`
   - Windows：`netstat -ano | findstr 5173`
3. 如被占用，执行 `kill -9 <PID>` 或 `taskkill /F /PID <PID>` 释放端口。
4. 启动开发服务器：`npm run docs:dev`，按终端地址在浏览器预览。
5. 调试完成后，在 `AGENTS.md` 追加操作时间、端口以及命令记录。

## 素材与代码规范
- 所有文档、注释、提交信息必须使用中文；变量与函数可使用英文小驼峰命名，常量使用全大写蛇形。
- Markdown 默认 2 空格缩进，标题层级需连续；插图统一采用相对路径引用 `images/` 或 `docs/public/` 内素材。
- 单文件行数限制：动态语言 ≤ 200 行，静态语言 ≤ 250 行；目录内文件或子目录不得超过 8 个，超出时需新建子目录拆分。

## 质量检查清单
1. `npm run docs:build`：验证构建通过，排查死链与语法错误。
2. `npm run docs:preview`：预览静态产物，核对导航、锚点与图片是否正常。
3. 自查内容是否存在重复段落或数据泥团，新稿件需同步更新侧边栏与首页导航。

## GitHub Actions 部署指南
仓库已内置 `.github/workflows/deploy-docs.yml`，提交到 GitHub 后可自动构建并发布到 Pages。流程如下：
1. **推送代码**：确保默认分支为 `main`，将仓库上传至 GitHub。
2. **Pages 配置**：在 GitHub 项目 Settings → Pages，将 Source 设为 “GitHub Actions”。
3. **自动设置 base**：`docs/.vitepress/config.ts` 通过 `DEPLOY_BASE` 环境变量动态计算基础路径，工作流会自动注入 `/${{ github.event.repository.name }}/`。如需自定义域名或根目录部署，可在仓库 Secrets 中设置 `DOCS_BASE_PATH` 并在工作流中覆盖。
4. **首次部署**：推送后 GitHub Actions 会运行 `Deploy Docs` 工作流，构建结果存放于 `docs/.vitepress/dist` 并上传到 Pages。
5. **上线验证**：构建完成后，Pages 页面会显示访问链接（形如 `https://<用户名>.github.io/<仓库名>/`）。若资源 404，请确认 `DEPLOY_BASE` 与仓库名一致，或检查图片路径是否以 `/` 开头。

> 若仓库名后续变更，请同步更新 GitHub Actions 中的 `DOCS_BASE_PATH` 或在手动运行工作流时覆盖环境变量，确保 base 路径与实际访问地址一致。

## 常见问题排查
- **构建失败**：通常为侧边栏引用缺失、Markdown 语法错误或图片地址不正确，请查看 Actions 日志中 `npm run docs:build` 的输出。
- **页面空白**：检查访问路径是否包含仓库名，或确认 `DEPLOY_BASE` 已正确注入。
- **图片无法显示**：确认素材已归档到对应目录，并以相对路径引用，例如 `![示例图](../../images/activities/满减活动/满减活动_1.png)`。

## 贡献与协作规范
- Git 提交信息使用祈使句，例如“补充门店新客立减案例”。
- 拉取请求需包含变更摘要、验证方式与潜在风险；涉及截图的改动应先将图片归档再引用。
- 删除或移动文档前确认无其他页面引用，涉及真实商户或用户数据必须脱敏后再提交。
