# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览
这是一个基于 VitePress 的美团外卖活动推广知识库项目，用于系统整理和展示美团外卖的活动营销策略和推广工具使用方法。

## 开发命令

### 端口检查与服务启动（必须按顺序执行）
```bash
# 1. 检查 5173 端口占用
# Windows:
netstat -ano | findstr :5173
# macOS/Linux:
lsof -ti:5173

# 2. 若端口被占用，强制终止进程
# Windows:
taskkill /F /PID <进程ID>
# macOS/Linux:
kill -9 <进程ID>

# 3. 启动开发服务器
npm run docs:dev
```

### 构建与预览
```bash
# 构建静态站点
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 测试流程
在发布前必须执行以下检查：
1. `npm run docs:build` - 确保构建无错误
2. `npm run docs:preview` - 验证导航、锚点、图片正常

## 项目架构

### 文档组织结构
- **外卖活动模块** (`docs/waimai-activities/`)：满减、减配送费、买赠、折扣商品、优惠券、门店新客立减、精准营销等活动配置
- **外卖推广模块** (`docs/waimai-promotion/`)：
  - `campaign-tools/`：点金推广、拼好饭推广、铂金展位、超级流量卡、订单通等投放工具
  - `operation-support/`：袋鼠店长、赏金联盟、精准营销、金字招牌等经营支撑
- **素材归档** (`materials/`)：原稿 `.docx` 和成稿 `.md` 分类存储
- **图片资源** (`images/`)：按 `activities/`、`promotion/`、`overview/`、`common/` 组织

### 关键配置文件
- **站点配置**：`docs/.vitepress/config.ts` - 导航结构、侧边栏、主题设置、基础路径自适应
- **首页入口**：`docs/index.md` - 主页布局和导航卡片
- **自动部署**：`.github/workflows/deploy-docs.yml` - GitHub Pages 自动发布流程

### 基础路径自适应机制
`config.ts` 中的基础路径配置会自动适配不同部署环境：
- 优先读取 `DEPLOY_BASE` 环境变量
- 其次使用 `GITHUB_REPOSITORY` 推算 `/<仓库名>/`
- 默认回退到 `/`（本地开发）

## 重要规范

### 文件行数限制
- 动态语言文件（JS/TS）：≤ 200 行
- 目录内文件/子目录数：≤ 8 个

### 图片引用规则
- 必须使用相对路径
- 图片存放在 `docs/public/` 或 `images/` 目录
- 禁止硬编码绝对路径

### 中文优先原则
- 所有文档、注释、提交信息使用中文
- 代码变量名可用英文小驼峰
- 常量使用全大写蛇形命名

## GitHub Pages 部署
1. 推送到 `main` 分支或手动触发工作流
2. 自动构建并发布到 `https://<用户名>.github.io/<仓库名>/`
3. 若样式丢失，检查基础路径配置是否正确

## 开发注意事项
- 修改导航结构后需同步更新 `config.ts` 的侧边栏配置
- 新增页面需在 `docs/index.md` 添加对应入口链接
- 删除文件前确认无其他页面引用
- 涉及真实商户数据必须脱敏处理