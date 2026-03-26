# 在线简历模板

**Password-Gated Resume Template**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)

基于 React + TypeScript + Vite 的现代化在线简历，支持密码访问控制、多主题切换、中英文双语。

---

## 功能特性

- 🔐 **密码访问控制** — 简历数据存储在 Cloudflare KV，通过临时密码授权查看
- 🎨 **多主题切换** — 内置多套配色主题，一键切换
- 🌐 **中英文双语** — 所有内容支持中英文切换
- 📱 **响应式设计** — 完美适配桌面端和移动端
- ⚡ **极速加载** — Vite 构建 + GitHub Pages 部署，全球 CDN 加速
- 🛡️ **安全设计** — 所有密钥通过环境变量注入，代码中无敏感信息

---

## 项目架构

```
┌──────────────────────┐     ┌──────────────────────────┐
│   GitHub Pages       │     │   Cloudflare Worker      │
│   (前端静态站)        │────▶│   (后端 API)              │
│                      │     │                          │
│  React + TypeScript  │     │  密码验证 / 简历数据管理   │
│  Vite + CSS          │     │  KV 存储 / 管理后台       │
└──────────────────────┘     └──────────────────────────┘
        │                              │
        ▼                              ▼
   用户输入密码 ──────────────▶ POST /api/verify
                                       │
                              密码有效？返回简历数据
```

---

## 快速开始（Fork & Deploy）

### Step 1：部署后端（resume-worker）

前往 [journ10/resume-worker](https://github.com/journ10/resume-worker)，Fork 并按其 README 说明部署 Cloudflare Worker，完成后记录你的 **Worker URL**（形如 `https://resume-worker.your-subdomain.workers.dev`）。

### Step 2：Fork 本项目

点击右上角 **Fork** 按钮，将本仓库 Fork 到你的 GitHub 账号下。

### Step 3：配置 GitHub Secrets

在你 Fork 后的仓库中，前往 **Settings → Secrets and variables → Actions**，添加以下 Secret：

| Secret 名称 | 说明 |
|-------------|------|
| `WORKER_URL` | 你的 Cloudflare Worker 地址（来自 Step 1），例如 `https://resume-worker.your-subdomain.workers.dev` |

### Step 4：触发部署

Push 任意提交到 `main` 分支，或前往 **Actions → Deploy to GitHub Pages → Run workflow** 手动触发。

GitHub Actions 会自动构建并将站点发布到 GitHub Pages。

### Step 5：上传简历数据 & 创建密码

1. 访问你的 Worker 管理后台（`https://your-worker-url/admin-panel-x7k9`）
2. 使用你的 `ADMIN_KEY` 登录
3. 上传简历 JSON 数据（格式见下方）
4. 创建一个访问密码

---

## 简历数据格式

通过 Worker 管理后台上传以下格式的 JSON 数据：

```json
{
  "personalInfo": {
    "name": "张三",
    "logo": "ZS",
    "roles": {
      "zh": ["前端工程师", "全栈开发者"],
      "en": ["Frontend Engineer", "Full Stack Developer"]
    },
    "description": {
      "zh": "热爱技术，专注于构建高质量的 Web 应用。",
      "en": "Passionate about technology, focused on building high-quality web applications."
    },
    "location": "北京，中国",
    "email": "zhangsan@example.com",
    "phone": "+86 138 0000 0000",
    "education": {
      "zh": "北京大学 · 计算机科学",
      "en": "Peking University · Computer Science"
    },
    "languages": "中文 / English",
    "availableForWork": true,
    "social": {
      "github": "https://github.com/zhangsan",
      "linkedin": "https://linkedin.com/in/zhangsan",
      "weixin": "",
      "weibo": "",
      "twitter": ""
    }
  },
  "aboutInfo": {
    "yearsExperience": "5",
    "projectsCount": "20",
    "intro1": {
      "zh": "我是一名拥有 5 年经验的前端工程师，熟悉 React、Vue、TypeScript 等主流技术栈。",
      "en": "I'm a frontend engineer with 5 years of experience, proficient in React, Vue, TypeScript and more."
    },
    "intro2": {
      "zh": "热衷于探索新技术，善于解决复杂问题，具备良好的团队协作能力。",
      "en": "I enjoy exploring new technologies, solving complex problems, and collaborating effectively in teams."
    }
  },
  "skillCategories": [
    {
      "icon": "💻",
      "title": { "zh": "前端开发", "en": "Frontend" },
      "skills": [
        { "name": "React", "level": 90 },
        { "name": "TypeScript", "level": 85 },
        { "name": "CSS", "level": 80 }
      ]
    },
    {
      "icon": "🛠️",
      "title": { "zh": "工具链", "en": "Toolchain" },
      "tags": ["Vite", "Webpack", "Git", "Docker"]
    },
    {
      "icon": "🌐",
      "title": { "zh": "后端 & 云", "en": "Backend & Cloud" },
      "tags": {
        "zh": ["Node.js", "Cloudflare Workers", "数据库"],
        "en": ["Node.js", "Cloudflare Workers", "Databases"]
      }
    }
  ],
  "experiences": [
    {
      "period": { "zh": "2022.07 — 至今", "en": "Jul 2022 — Present" },
      "title": { "zh": "高级前端工程师", "en": "Senior Frontend Engineer" },
      "company": "某科技公司",
      "description": {
        "zh": "负责公司核心产品的前端架构设计与开发，推动团队工程化建设。",
        "en": "Responsible for frontend architecture design of core products and driving engineering best practices."
      },
      "tags": ["React", "TypeScript", "Vite"]
    },
    {
      "period": { "zh": "2020.07 — 2022.06", "en": "Jul 2020 — Jun 2022" },
      "title": { "zh": "前端工程师", "en": "Frontend Engineer" },
      "company": "某互联网公司",
      "description": {
        "zh": "参与多个 B 端和 C 端项目开发，优化页面性能与用户体验。",
        "en": "Participated in multiple B2B and B2C projects, optimizing page performance and user experience."
      },
      "tags": ["Vue", "JavaScript", "Element UI"]
    }
  ],
  "educations": [
    {
      "icon": "🎓",
      "degree": { "zh": "工学学士", "en": "Bachelor of Engineering" },
      "major": { "zh": "计算机科学与技术", "en": "Computer Science and Technology" },
      "school": { "zh": "北京大学", "en": "Peking University" },
      "schoolIcon": "🏫",
      "period": { "zh": "2016.09 — 2020.06", "en": "Sep 2016 — Jun 2020" }
    }
  ],
  "projects": [
    {
      "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "icon": "🚀",
      "title": { "zh": "在线简历模板", "en": "Resume Template" },
      "description": {
        "zh": "基于 React + Cloudflare Worker 的密码保护简历模板，支持多主题和双语。",
        "en": "A password-protected resume template built with React + Cloudflare Worker, supporting multiple themes and bilingual content."
      },
      "tags": ["React", "TypeScript", "Cloudflare Workers"],
      "github": "https://github.com/zhangsan/resume",
      "demo": "https://zhangsan.github.io"
    }
  ]
}
```

---

## 自定义

- **修改主题**：编辑 CSS 变量（位于各组件样式文件）
- **修改文案**：编辑 `src/i18n/zh.ts` 和 `src/i18n/en.ts`
- **简历数据**：通过 Worker 管理后台上传，无需修改代码

---

## 本地开发

```bash
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
npm install
cp .env.example .env  # 填写你的 Worker URL
npm run dev
```

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React 18、TypeScript、Vite、Pure CSS |
| 后端 | Cloudflare Workers、KV Storage |
| 部署 | GitHub Pages + GitHub Actions |
| 费用 | 全部使用免费服务 |

---

## 相关项目

- 🔧 [resume-worker](https://github.com/journ10/resume-worker) — 后端 Cloudflare Worker 服务

---

## License

[MIT](LICENSE) © 2026 journ10
