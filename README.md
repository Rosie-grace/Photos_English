## 看图识英文（Flashcard English）

一个基于 Next.js 15 + React 19 的看图识词互动学习小应用，通过抽卡答题的方式巩固英语单词记忆。内置图片与题库，支持得分/连对统计，并在标题栏显示当日天气与随机每日名言。

### 功能特性

- 学习卡片：每次展示一张图与 4 个英文选项，点击作答即时反馈对错
- 进度与统计：总分、连续答对、正确率与学习进度条
- 天气展示：自动随机城市（或定位失败时 fallback），显示气温与天气现象
- 每日名言：从公开 API 随机拉取名言，失败自动切换到备用源，并支持作者展示
- 响应式设计：桌面端标题栏右侧展示“天气 + 名言”，支持换行不遮挡标题

### 本地启动

1. 安装依赖
   - 推荐使用 Node 18+ / 20+ / 22+
   - Windows PowerShell（当前仓库已验证）
   
   使用 npm：
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`

2. 启动开发服务器
   \`\`\`bash
   npm run dev
   \`\`\`
   打开浏览器访问 `http://localhost:3000`

3. 生产构建（可选）
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

### 常见问题

- 依赖冲突（ERESOLVE）
  - 如遇到 `vaul` 与 React 19 的 peer 依赖冲突，已在本项目中移除 `vaul`，请使用：
    \`\`\`bash
    npm install --legacy-peer-deps
    \`\`\`

- 外网名言 API 无法访问 / 证书报错
  - 已实现多源回退（Quotable → DummyJSON → 一言），并带超时与兜底文案
  - 若仍无法获取，检查本机网络/SSL 证书；功能不影响核心答题流程

### 技术栈

- Next.js 15（App Router）
- React 19
- TypeScript 5
- Tailwind CSS 4
- Radix UI（按钮、卡片、进度等封装组件）

### 目录结构（关键）

- `app/page.tsx`：页面主体逻辑（题库、答题、统计、天气与名言）
- `app/layout.tsx`：根布局与字体
- `components/ui/*`：UI 基础组件
- `public/*`：题目配图

### 版权与致谢

- 图片仅用于学习与演示
- 名言 API：Quotable、DummyJSON、Hitokoto

---

如需自定义城市池、名言标签、或题库内容，请修改 `app/page.tsx` 中对应列表与数据结构。
