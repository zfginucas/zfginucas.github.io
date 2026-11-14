/* Edit bilingual content and project records here. Facts follow the original homepage. */
const COPY = {
  en: {
    skip: 'Skip to content', navAbout: 'About', navResearch: 'Research', navEducation: 'Education', navExperience: 'Experience',
    role: 'PhD Student', school: 'School of Artificial Intelligence', university: 'University of Chinese Academy of Sciences', location: 'Beijing, China', cv: 'Curriculum Vitae',
    profileNote: 'Open to research collaborations<br>and internship opportunities.',
    aboutTitle: 'About me',
    intro: 'I am a direct-PhD student at the <a href="https://www.ucas.ac.cn/" target="_blank" rel="noopener noreferrer">University of Chinese Academy of Sciences (UCAS)</a>, School of Artificial Intelligence. My research focuses on <strong>AI agents, language model alignment, and AI for science</strong>.',
    bio: 'I build multi-agent systems for scientific workflows and study how language models can reason with tools and verifiable feedback. My interdisciplinary background in plant protection and economics informs my work on omics intelligence and financial applications.',
    previous: 'Previously, I was an algorithm intern at <strong>Hithink RoyalFlush</strong>, working on financial factor-mining agents and reinforcement learning for language model alignment.',
    interestsTitle: 'RESEARCH INTERESTS', interest1: 'AI agents', interest1Desc: 'Multi-agent orchestration, tool use, and human-in-the-loop scientific workflows.', interest2: 'LLM alignment', interest2Desc: 'Verifiable rewards, reinforcement learning, and multi-step reasoning.', interest3: 'AI for science', interest3Desc: 'Omics intelligence, spatial transcriptomics, and knowledge-grounded discovery.',
    researchTitle: 'Research & projects', allCode: 'GitHub', researchIntro: 'Selected research and engineering projects, from scientific agents to model alignment and efficient computing.', filterAll: 'Selected', filterSystems: 'Systems',
    showMore: 'View all 6 projects', showLess: 'Show selected projects', code: 'Code', details: 'Project details', closeDetails: 'Close details', projectSingular: 'project', projectPlural: 'projects',
    educationTitle: 'Education', ucasDate: '2025 — present', ucasName: 'University of Chinese Academy of Sciences', ucasDegree: 'Direct PhD in Computer Application Technology · School of Artificial Intelligence', ucasDetail: 'Expected graduation: June 2030 · GPA: 3.82 / 4.0',
    cauName: 'China Agricultural University', cauDegree: 'BSc in Plant Protection', cauDetail: 'Outstanding Graduate. Thesis on the evolution of plant disease-resistance genes using Tree2GD.',
    pkuName: 'Peking University', pkuDegree: 'Minor in Economics · National School of Development', pkuDetail: 'Dashixing Scholarship, 2023.',
    experienceTitle: 'Experience', internDate: 'Feb — Jul 2026', internOrg: 'Hithink RoyalFlush', internRole: 'Algorithm Intern · B2C Infrastructure', internDetail: 'Developed LangGraph agents for financial factor mining; aligned Qwen3-14B with GRPO using 15K+ expert trajectories; deployed inference with vLLM and FP8.',
    trainingTitle: 'Interdisciplinary research training', trainingSub: 'Omics & plant protection', trainingDetail: 'Screened insecticide-resistance genes in Rhopalosiphum padi through RNAi bioassays; reproduced STAGATE and GraphST for spatial transcriptomics clustering.',
    honorsTitle: 'Selected honors', honor1: 'Outstanding Graduate, China Agricultural University', honor2: 'Dashixing Scholarship, National School of Development, Peking University', honor3: '35th place, Great Wall Cup CTF', honor4: 'Academic Second-Class Scholarship & Merit Student',
    contactTitle: 'Get in touch', contactIntro: 'I welcome conversations about AI agents, LLM alignment, and omics intelligence, as well as research collaborations and internship opportunities.', copyEmail: 'Copy email', copied: 'Copied', copyFailed: 'Please copy the email address directly.', updated: 'Last updated · November 2026', backTop: 'Back to top ↑',
    pageTitle: 'Thomas Zhao | Academic Homepage', description: 'Thomas Zhao is a direct-PhD student at UCAS, working on AI agents, language model alignment, and AI for science.'
  },
  zh: {
    skip: '跳到主要内容', navAbout: '关于', navResearch: '研究', navEducation: '教育', navExperience: '经历',
    role: '人工智能学院 · 直博生', school: '人工智能学院', university: '中国科学院大学', location: '中国 · 北京', cv: '个人简历',
    profileNote: '欢迎科研合作与实习机会。',
    aboutTitle: '关于我',
    intro: '我是<a href="https://www.ucas.ac.cn/" target="_blank" rel="noopener noreferrer">中国科学院大学</a>人工智能学院计算机应用技术专业的直博生，主要研究<strong> AI Agent、大模型对齐与科学智能</strong>。',
    bio: '我关注科研工作流中的多智能体协作，以及语言模型如何结合工具与可验证反馈完成推理。本科的植物保护背景与经济学辅修经历，也使我的研究延伸到组学智能与金融应用。',
    previous: '此前，我在<strong>同花顺</strong>担任算法实习生，参与金融因子挖掘多智能体系统，以及基于强化学习的大模型对齐。',
    interestsTitle: '研究兴趣', interest1: '智能体与协作', interest1Desc: '多智能体编排、工具调用与人在环的科研工作流。', interest2: '大模型对齐', interest2Desc: '可验证奖励、强化学习与多步推理。', interest3: '科学智能', interest3Desc: '组学智能、空间转录组与知识驱动的科学发现。',
    researchTitle: '研究与项目', allCode: 'GitHub', researchIntro: '从科研智能体到模型对齐与高效计算，以下是我的部分研究和工程实践。', filterAll: '精选', filterSystems: '系统',
    showMore: '查看全部 6 个项目', showLess: '收起，查看精选项目', code: '代码', details: '项目详情', closeDetails: '收起详情', projectSingular: '个项目', projectPlural: '个项目',
    educationTitle: '教育经历', ucasDate: '2025 — 至今', ucasName: '中国科学院大学', ucasDegree: '计算机应用技术 · 直博 · 人工智能学院', ucasDetail: '预计 2030 年 6 月毕业 · GPA：3.82 / 4.0',
    cauName: '中国农业大学', cauDegree: '植物保护 · 本科', cauDetail: '优秀毕业生。本科毕设基于 Tree2GD 研究多种植物抗病基因的演化。',
    pkuName: '北京大学', pkuDegree: '经济学辅修 · 国家发展研究院', pkuDetail: '达世行奖学金（2023）。',
    experienceTitle: '研究与实习经历', internDate: '2026.02 — 07', internOrg: '同花顺', internRole: '算法实习生 · B2C 开发基础架构部', internDetail: '基于 LangGraph 开发金融因子挖掘智能体；使用 15K+ 专家轨迹对 Qwen3-14B 进行 GRPO 对齐；基于 vLLM 与 FP8 部署推理服务。',
    trainingTitle: '跨学科科研训练', trainingSub: '组学与植物保护', trainingDetail: '通过 RNAi 生物测定筛选禾谷缢管蚜抗药性基因；复现 STAGATE 与 GraphST 空间转录组聚类算法。',
    honorsTitle: '荣誉与奖励', honor1: '中国农业大学优秀毕业生', honor2: '北京大学国家发展研究院达世行奖学金', honor3: '“长城杯”CTF 比赛第 35 名', honor4: '学业二等奖学金、三好学生',
    contactTitle: '联系我', contactIntro: '欢迎交流 AI Agent、大模型对齐与组学智能方向的研究，也欢迎科研合作与实习机会。', copyEmail: '复制邮箱', copied: '已复制', copyFailed: '请直接选中并复制邮箱地址。', updated: '最近更新 · 2026 年 11 月', backTop: '返回顶部 ↑',
    pageTitle: 'Thomas Zhao | 个人学术主页', description: 'Thomas Zhao，中国科学院大学人工智能学院直博生，研究 AI Agent、大模型对齐与组学智能。'
  }
};

const PROJECTS = [
  {
    id: 'scientific-agents', category: 'agents', diagram: 'agents',
    en: { title: 'Scientific Multi-Agent System', meta: 'RESEARCH PROJECT · ONGOING', description: 'A supervisor–worker system for scientific workflows, integrating domain tools, a GraphRAG knowledge graph, persistent state, and human-in-the-loop review.', details: 'Built with OpenCode and MCP, with 200+ domain skills spanning single-cell and spatial transcriptomics, structural variants, KEGG/GO analysis, and NCBI queries. A centralized state store supports coordination and review.' },
    zh: { title: '科研多智能体系统', meta: '研究项目 · 进行中', description: '面向科研工作流的 Supervisor–Worker 多智能体系统，结合领域工具、GraphRAG 知识图谱、持久化状态与人在环审阅。', details: '基于 OpenCode 与 MCP，集成 200+ 领域技能，支持单细胞与空间转录组、结构变异、KEGG/GO 分析与 NCBI 查询；通过中心化状态存储协调任务与审阅。' }
  },
  {
    id: 'omics-alignment', category: 'llm', diagram: 'alignment',
    en: { title: 'Omics LLM Pretraining & Alignment', meta: 'RESEARCH PROJECT · ONGOING', description: 'Adapting Qwen3-8B to omics through continued pretraining, instruction tuning, and preference alignment, with verifiable rewards for multi-step reasoning.', details: 'Continued mid-training on omics literature and structured KEGG/GO data, followed by SFT on 10K+ instructions, DPO for expert preferences, and GRPO/RLVR for verifiable reasoning.' },
    zh: { title: '组学大模型持续预训练与对齐', meta: '研究项目 · 进行中', description: '围绕 Qwen3-8B，结合组学领域持续预训练、指令微调与偏好对齐，探索可验证奖励驱动的多步推理。', details: '以组学文献和结构化 KEGG/GO 数据进行 continued mid-training；使用 10K+ 指令开展 SFT，通过 DPO 对齐专家偏好，并以 GRPO/RLVR 优化可验证推理。' }
  },
  {
    id: 'openoperator', category: 'systems', diagram: 'operator', url: 'https://github.com/zfginucas/openoperator-start-kit',
    en: { title: 'OpenOperator', meta: 'OPEN SOURCE · EFFICIENT COMPUTING', description: 'An automated generation–evaluation loop for BANG C operators on Cambricon MLU370, using hardware feedback to guide iterative optimization.', details: 'The loop covers task selection, code generation, syntax checks, hardware benchmarking, scoring, and reflection. It explores six optimization dimensions; 14 of 139 operators passed the project evaluation.' },
    zh: { title: 'OpenOperator', meta: '开源项目 · 高效计算', description: '面向寒武纪 MLU370 的 BANG C 算子自动优化系统，以硬件评测反馈驱动代码生成、验证与迭代。', details: '完整流程包括选题、代码生成、语法检查、硬件评测、评分与经验总结。探索六种优化维度，已有 14 / 139 个算子通过项目评测。' }
  },
  {
    id: 'balancing-robot', category: 'systems', diagram: 'robot',
    en: { title: 'Balancing Robot with Reinforcement Learning', meta: 'COURSE PROJECT · SIM-TO-REAL', description: 'From LQR baselines to imitation learning and residual RL, deploying a hierarchical controller on a physical STM32-based balancing robot.', details: 'Collected 200K expert state–action pairs for a behavioral cloning warm start, then explored PPO/SAC/TD3+BC and DAgger online corrections. PC–STM32 hierarchical control supports standing and driving.' },
    zh: { title: '二阶平衡车强化学习控制', meta: '课程项目 · SIM-TO-REAL', description: '从 LQR 基线到模仿学习与残差强化学习，基于 PC–STM32 分级控制实现从仿真到实车的部署。', details: '收集 200K 专家状态–动作数据用于行为克隆预热，探索 PPO/SAC/TD3+BC，并通过 DAgger 在线纠正，完成实车站立与移动。' }
  },
  {
    id: 'tradeshield', category: 'agents', diagram: 'risk', url: 'https://github.com/LuBryant/TradeShield-AI',
    en: { title: 'TradeShield-AI', meta: 'HACKATHON PROJECT · WEB3', description: 'An AI-priced electronic bill-of-lading RWA protocol, connecting a risk-pricing agent to on-chain evidence and smart contracts.', details: 'Five Solidity contracts and 154 tests, deployed on Sepolia, with evidence_hash anchoring. Awarded in the Security/Risk Agent track at ETH Beijing 2026.' },
    zh: { title: 'TradeShield-AI', meta: '黑客松项目 · WEB3', description: '由 AI 动态定价的电子提单 RWA 协议，将风险定价智能体与链上证据、智能合约连接。', details: '包含五个 Solidity 合约与 154 个测试，部署于 Sepolia，支持 evidence_hash 链上锚定；在 ETH Beijing 2026 黑客松 Security/Risk Agent 赛道获奖。' }
  },
  {
    id: 'web-agent', category: 'agents', diagram: 'web', url: 'https://github.com/zfginucas/web_Agent',
    en: { title: 'Web Agent', meta: 'OPEN SOURCE · BROWSER AUTOMATION', description: 'A browser extension that translates natural-language instructions into web actions, with course review and enrollment workflows for UCAS students.', details: 'Supports Edge and Chrome, identifies page forms and buttons, and integrates eight AI platform APIs for natural-language browser interaction.' },
    zh: { title: 'Web Agent', meta: '开源项目 · 浏览器自动化', description: '将自然语言指令转化为网页操作的浏览器扩展，为国科大学生提供课程评价与选课工作流。', details: '支持 Edge 与 Chrome，自动识别表单及按钮，集成八种 AI 平台 API，实现自然语言驱动的浏览器交互。' }
  }
];
