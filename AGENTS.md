# Repository Guidelines

## 项目结构与模块组织
- `docs/` 是 VitePress 文档根目录，内容依业务拆分在 `docs/waimai-activities/` 与 `docs/waimai-promotion/`；页面导航统一维护在 `docs/.vitepress/config.ts`，首页入口位于 `docs/index.md`。
- `materials/` 负责资料归档：`activities/` 与 `promotion/` 目录各含 `raw/`（原始 `.docx`）与 `markdown/`（成稿 `.md`），`overview/` 存放策略性综述文档。
- `images/` 仅保留 `activities/`、`promotion/`、`overview/`、`common/` 四个子目录，内部再按主题分层，确保任一目录不超过 8 个文件或子目录。
- `.github/workflows/` 存放自动化流程；`deploy-docs.yml` 用于构建并发布 GitHub Pages。
- 根目录保持 8 个条目以内；动态语言文件 ≤ 200 行，静态语言文件 ≤ 250 行，超出需拆分。

## 构建、测试与开发命令
- `npm install`：安装或更新依赖。
- `npm run docs:dev`：启动本地开发服务器，实时热更新。
- `npm run docs:build`：产出静态站点并校验死链/语法。
- `npm run docs:preview`：预览构建结果，复核导航与静态资源。

## 开发服务器端口管理
1. 检查端口：macOS/Linux 运行 `lsof -ti:5173`，Windows 运行 `netstat -ano | findstr 5173`。
2. 如被占用，执行 `kill -9 <PID>` 或 `taskkill /F /PID <PID>` 释放。
3. 启动：`npm run docs:dev`，调试完成后在文末记录操作时间、端口与命令。

**最近一次记录**：2025-09-28，端口 5173，按流程完成检查与启动。

## 编码风格与命名约定
- TypeScript、Markdown、配置文件统一使用 2 空格缩进并保留文件末尾换行。
- 函数与变量用英文小驼峰，常量使用全大写蛇形；注释、提交说明与文档需使用中文。
- 引用图片与附件时务必使用相对路径，禁止硬编码绝对磁盘地址。

## 测试与校验指引
- 提交前执行 `npm run docs:build`，确保无构建错误。
- 新增或调整页面需人工检查链接、锚点与图片是否有效，并根据需要更新 `docs/index.md` 与侧边栏配置。

## 提交与合并请求规范
- 提交信息使用祈使句，例如“补充优惠券活动文档”。
- 拉取请求需附变更摘要、验证方式与潜在风险；涉及截图的改动应将图片归档到 `images/` 后再引用。
- 大规模改动需在描述中给出回滚方案，并提前同步评审人。

## 自动化部署说明
- `docs/.vitepress/config.ts` 通过 `DEPLOY_BASE` 环境变量设置基础路径，本地开发默认为 `/`。
- GitHub Actions 工作流会自动注入 `/${{ github.event.repository.name }}/` 作为部署路径，如需自定义可在仓库 Secrets 中提供 `DOCS_BASE_PATH` 并调整工作流环境变量。

## 安全与配置提示
- 禁止提交真实商户或用户数据，示例须脱敏。
- 私密配置应存放于环境变量或私有仓库，本仓库仅保留模板或说明文件。
- 在删除或移动资源前确认无页面引用，避免破坏现有导航。
