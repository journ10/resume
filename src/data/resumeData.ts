export const personalInfo = {
  name: '您的姓名',
  logo: '姓名.',
  roles: ['您的职位头衔', '前端工程师', '全栈开发工程师', 'UI/UX 设计师', '产品经理'],
  description: '热爱技术与创新，致力于打造优质的数字产品体验。\n欢迎来到我的在线简历页面。',
  location: '所在城市，中国',
  email: 'your@email.com',
  phone: '+86 1XX XXXX XXXX',
  education: '您的学历',
  languages: '中文 / English',
  availableForWork: true,
  social: {
    github: '#',
    linkedin: '#',
    weixin: '#',
    weibo: '#',
    twitter: '#',
  },
}

export const aboutInfo = {
  yearsExperience: '5',
  projectsCount: '20+',
  intro1:
    '我是一名充满热情的[您的职业]，拥有超过 X 年的行业经验。我专注于[您的专业领域]，热爱用技术解决实际问题并创造有价值的产品。',
  intro2:
    '在我的职业生涯中，我曾服务于多家知名企业，积累了丰富的实战经验。我相信持续学习和团队协作是成功的关键，并始终致力于在工作中追求卓越。',
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  icon: string
  title: string
  skills?: Skill[]
  tags?: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'fas fa-code',
    title: '技术技能',
    skills: [
      { name: '技能名称一', level: 90 },
      { name: '技能名称二', level: 85 },
      { name: '技能名称三', level: 80 },
      { name: '技能名称四', level: 75 },
    ],
  },
  {
    icon: 'fas fa-layer-group',
    title: '框架 & 工具',
    skills: [
      { name: '框架/工具一', level: 88 },
      { name: '框架/工具二', level: 82 },
      { name: '框架/工具三', level: 78 },
      { name: '框架/工具四', level: 70 },
    ],
  },
  {
    icon: 'fas fa-tools',
    title: '其他技能',
    tags: [
      '技能标签一', '技能标签二', '技能标签三', '技能标签四',
      '技能标签五', '技能标签六', '技能标签七', '技能标签八',
      '技能标签九', '技能标签十',
    ],
  },
  {
    icon: 'fas fa-heart',
    title: '软技能',
    tags: ['团队协作', '项目管理', '沟通表达', '解决问题', '快速学习', '创新思维', '领导力', '抗压能力'],
  },
]

export interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    period: '20XX 年 MM 月 — 至今',
    title: '高级[职位名称]',
    company: '公司名称 A · 城市名',
    description:
      '负责[核心工作描述]，主导了[重要项目或成就]。带领团队[X] 人，通过[具体方法]将[指标]提升了[X]%。参与[其他重要工作]，积累了丰富的[领域]经验。',
    tags: ['技能一', '技能二', '技能三', '技能四'],
  },
  {
    period: '20XX 年 MM 月 — 20XX 年 MM 月',
    title: '[职位名称]',
    company: '公司名称 B · 城市名',
    description:
      '主要负责[工作职责描述]。参与[项目名称]的研发，贡献了[具体贡献]。在[方面]取得了显著成果，获得了[奖项/认可]。',
    tags: ['技能一', '技能二', '技能三'],
  },
  {
    period: '20XX 年 MM 月 — 20XX 年 MM 月',
    title: '初级[职位名称]',
    company: '公司名称 C · 城市名',
    description:
      '作为初级成员，参与[工作内容]。在导师指导下快速成长，独立完成了[具体任务]，为团队带来了[价值]。',
    tags: ['技能一', '技能二'],
  },
]

export interface EducationItem {
  icon: string
  degree: string
  major: string
  school: string
  schoolIcon: string
  period: string
}

export const educations: EducationItem[] = [
  {
    icon: 'fas fa-university',
    degree: '硕士研究生',
    major: '您的专业方向',
    school: '您就读的大学名称',
    schoolIcon: 'fas fa-map-marker-alt',
    period: '20XX 年 — 20XX 年',
  },
  {
    icon: 'fas fa-graduation-cap',
    degree: '本科（学士学位）',
    major: '您的本科专业',
    school: '您的本科院校名称',
    schoolIcon: 'fas fa-map-marker-alt',
    period: '20XX 年 — 20XX 年',
  },
  {
    icon: 'fas fa-certificate',
    degree: '专业认证',
    major: '认证名称',
    school: '颁发机构名称',
    schoolIcon: 'fas fa-building',
    period: '20XX 年获得',
  },
]

export interface ProjectItem {
  gradient: string
  icon: string
  title: string
  description: string
  tags: string[]
  github: string
  demo: string
}

export const projects: ProjectItem[] = [
  {
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    icon: 'fas fa-rocket',
    title: '项目名称一',
    description:
      '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
    tags: ['技术一', '技术二', '技术三'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#06b6d4,#0284c7)',
    icon: 'fas fa-mobile-alt',
    title: '项目名称二',
    description:
      '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
    tags: ['技术一', '技术二', '技术三'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    icon: 'fas fa-chart-bar',
    title: '项目名称三',
    description:
      '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
    tags: ['技术一', '技术二', '技术三'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    icon: 'fas fa-leaf',
    title: '项目名称四',
    description:
      '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
    tags: ['技术一', '技术二', '技术三'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)',
    icon: 'fas fa-paint-brush',
    title: '项目名称五',
    description:
      '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
    tags: ['技术一', '技术二', '技术三'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#64748b,#334155)',
    icon: 'fas fa-cog',
    title: '项目名称六',
    description:
      '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
    tags: ['技术一', '技术二', '技术三'],
    github: '#',
    demo: '#',
  },
]
