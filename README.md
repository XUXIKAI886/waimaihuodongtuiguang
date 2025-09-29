# 🍔 美团外卖活动推广知识库

<div align="center">
  <img src="https://img.shields.io/badge/VitePress-1.6.x-646CFF?style=flat&logo=vite&logoColor=white" alt="VitePress">
  <img src="https://img.shields.io/badge/Node.js-≥18-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Status">
</div>

## 📚 项目介绍

基于 **VitePress** 构建的美团外卖活动推广知识管理系统，为商家和运营团队提供系统化的营销活动配置指南和推广工具使用手册。

### ✨ 核心特性

- 🎯 **全面覆盖**：涵盖满减、买赠、优惠券等 7 大类活动玩法
- 🚀 **推广工具**：点金推广、拼好饭、铂金展位等 9 种投放工具详解
- 📊 **数据驱动**：配置要点、目标人群、监控指标一站式指导
- 🖼️ **图文并茂**：操作截图与流程图让复杂配置一目了然
- 🔄 **自动部署**：GitHub Actions 持续集成，推送即发布

## 🚀 快速开始

### 前置要求

- **Node.js** ≥ 18.0.0（推荐使用 LTS 版本）
- **npm** ≥ 9.0.0 或 **pnpm** ≥ 8.0.0
- **Git** 用于版本控制

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/your-username/meituan-activities.git
cd meituan-activities

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run docs:dev

# 访问 http://localhost:5173 查看效果
```

## 📁 项目结构

```
美团活动/
├── docs/                        # VitePress 文档目录
│   ├── .vitepress/             # VitePress 配置
│   │   ├── config.ts           # 站点配置文件
│   │   ├── cache/              # 构建缓存
│   │   └── dist/               # 构建输出
│   ├── waimai-activities/      # 外卖活动文档
│   │   ├── index.md            # 活动概览页
│   │   ├── manjian-huodong.md  # 满减活动
│   │   ├── xinke-lijian.md     # 新客立减
│   │   └── ...                 # 其他活动类型
│   ├── waimai-promotion/       # 推广工具文档
│   │   ├── campaign-tools/     # 投放工具
│   │   └── operation-support/  # 经营支撑
│   └── index.md                # 首页
├── materials/                   # 原始资料归档
│   ├── activities/             # 活动资料
│   ├── promotion/              # 推广资料
│   └── overview/               # 综述资料
├── images/                     # 图片资源
├── .github/                    # GitHub 配置
│   └── workflows/              # 自动化工作流
│       └── deploy-docs.yml     # 自动部署配置
├── package.json                # 项目配置
├── README.md                   # 项目说明
├── CLAUDE.md                   # Claude AI 指南
└── AGENTS.md                   # 开发规范

```

## 💻 开发指南

### 本地开发
#### 端口管理（重要）

启动开发服务器前**必须**检查端口占用：

```bash
# Windows 系统
netstat -ano | findstr :5173
taskkill /F /PID <进程ID>    # 若端口被占用

# macOS/Linux 系统
lsof -ti:5173
kill -9 <进程ID>              # 若端口被占用
```

#### 常用命令

| 命令 | 说明 | 端口 |
|------|------|------|
| `npm run docs:dev` | 启动开发服务器 | 5173 |
| `npm run docs:build` | 构建生产版本 | - |
| `npm run docs:preview` | 预览构建结果 | 4173 |

### 内容编写规范

#### 文档规范
- 📝 所有文档、注释使用**中文**
- 🔤 代码变量使用英文小驼峰命名
- 📏 Markdown 使用 2 空格缩进
- 🖼️ 图片使用相对路径引用

#### 代码质量标准
- 单文件行数：动态语言 ≤ 200 行，静态语言 ≤ 250 行
- 目录文件数：每个目录 ≤ 8 个文件或子目录
- 提交信息：使用中文祈使句，如"添加满减活动配置说明"

## 🔧 构建与部署

### 本地构建

```bash
# 构建静态站点
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 自动部署（GitHub Pages）
本项目已配置 GitHub Actions 自动部署流程：

1. **推送触发**：推送代码到 `main` 分支自动触发部署
2. **访问地址**：`https://<用户名>.github.io/<仓库名>/`
3. **配置文件**：`.github/workflows/deploy-docs.yml`

#### 部署配置步骤

1. 在 GitHub 仓库的 `Settings → Pages` 中：
   - Source 选择 **GitHub Actions**
   - 等待首次部署完成

2. 基础路径自动适配：
   - 本地开发：`/`
   - GitHub Pages：`/<仓库名>/`
   - 自定义域名：修改 `DEPLOY_BASE` 环境变量

## 📖 内容体系

### 外卖活动知识
- 📈 **销量提升**：满减活动、减配送费
- 🆕 **新客获取**：门店新客立减、精准营销
- 🎁 **复购促进**：买赠活动、折扣商品、优惠券体系

### 推广工具矩阵
- 💰 **付费推广**：点金推广、拼好饭推广、铂金展位
- 🏆 **品牌建设**：金字招牌、超级流量卡
- 🤝 **合作推广**：赏金联盟、袋鼠店长

## ❓ 常见问题

<details>
<summary><b>构建失败怎么办？</b></summary>

查看 GitHub Actions 中的错误日志，常见原因：
- Markdown 语法错误
- 图片路径错误
- 链接失效

解决方法：本地先运行 `npm run docs:build` 测试
</details>

<details>
<summary><b>页面样式丢失？</b></summary>

检查基础路径配置：
- 确认 `config.ts` 中的 `base` 设置
- 验证 `DEPLOY_BASE` 环境变量
</details>

<details>
<summary><b>如何添加新页面？</b></summary>

1. 在对应目录创建 `.md` 文件
2. 更新 `config.ts` 中的侧边栏配置
3. 在 `index.md` 添加导航链接
</details>

## 🤝 贡献指南

欢迎贡献内容！请遵循以下规范：

1. **Fork** 本仓库
2. 创建特性分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加某某功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建 **Pull Request**

### 提交规范
- ✅ 使用中文祈使句："添加满减活动说明"
- ✅ 单次提交专注一个功能点
- ❌ 避免大而全的提交

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 📮 联系方式

- 📧 邮箱：your-email@example.com
- 💬 微信：your-wechat
- 🔗 官网：https://your-website.com

---

<div align="center">
  <sub>Built with ❤️ using VitePress</sub>
</div>
