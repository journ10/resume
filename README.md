# 在线简历 - React + TypeScript

基于 React 18 + TypeScript + Vite 构建的现代化在线简历模板。

## 技术栈

- **React 18** + **TypeScript**
- **Vite** 构建工具
- **纯 CSS**（无 UI 库依赖）
- **GitHub Actions** 自动部署

## 快速开始

```bash
npm install
npm run dev
```

## 自定义简历内容

只需修改 `src/data/resumeData.ts` 文件即可更新所有简历内容：
- 个人信息（姓名、邮箱、地址等）
- 职业技能与进度条
- 工作经历时间线
- 教育背景
- 项目作品

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

访问地址：`https://journ10.github.io`
