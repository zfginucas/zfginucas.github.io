/* Bilingual copy + project data for the personal site. */

const I18N = {
  zh: {
    page_title: "Thomas Zhao · AI Agents & LLM Systems",
    meta_description:
      "Thomas Zhao 的个人学术主页：中国科学院大学人工智能学院直博生，研究 AI Agent、大模型对齐与组学智能。",

    skip_link: "跳到主要内容",
    nav_about: "关于",
    nav_research: "研究",
    nav_projects: "项目",
    nav_experience: "经历",
    nav_contact: "联系",

    hero_eyebrow: "PhD Student · AI Agents & LLM Systems",
    hero_affil: "中国科学院大学 · 人工智能学院 · 计算机技术应用直博",
    hero_summary:
      "研究 AI Agent、大模型对齐与组学智能。做过金融因子挖掘、科研多智能体系统和异构算子自动优化，喜欢把模型能力落到能跑的系统里。",
    hero_cta_projects: "查看项目",
    hero_cta_github: "GitHub",
    hero_cta_email: "邮件联系",
    hero_cta_resume: "简历",
    hero_availability: "欢迎科研合作与实习机会",

    stat_gpa_label: "GPA",
    stat_skills_label: "领域技能",
    stat_samples_label: "GRPO 训练样本",
    stat_ops_label: "算子通过",

    terminal_whoami_out: "Thomas Zhao · PhD @ UCAS",
    terminal_research_out: "AI agents · LLM alignment · omics",
    terminal_now_out: "building scientific multi-agent systems",

    section_research_label: "01 / RESEARCH",
    section_research_title: "研究方向",
    section_research_desc:
      "从 Agent 编排到模型对齐，再到组学与强化学习——关注能闭环、可验证的系统。",
    research_1_title: "AI Agents 与多智能体",
    research_1_desc:
      "Supervisor–Worker 编排、MCP 工具调用、状态持久化与人在环审阅；服务科研与金融场景。",
    research_2_title: "LLM 对齐与推理",
    research_2_desc:
      "持续预训练、SFT、DPO、RLVR/GRPO；关注可验证奖励与多步推理。",
    research_3_title: "组学与空间转录组",
    research_3_desc:
      "单细胞/空间转录组分析、KEGG/GO、GraphRAG，以及计算病理多模态模型。",
    research_4_title: "强化学习与具身系统",
    research_4_desc:
      "PPO/SAC/TD3+BC、LQR 基线、Sim-to-Real；从仿真到 STM32 实车部署。",

    section_projects_label: "02 / SELECTED WORK",
    section_projects_title: "代表项目",
    section_projects_desc:
      "6 个从研究到落地的项目，覆盖 Agent、LLM、异构计算与 Web3。",
    filter_all: "全部",
    filter_agents: "Agent",
    filter_llm: "LLM",
    filter_systems: "系统",
    filter_web3: "Web3",
    projects_more: "更多项目在 GitHub",

    section_experience_label: "03 / EXPERIENCE",
    section_experience_title: "经历与教育",
    section_experience_desc: "产业实习、直博科研与跨学科背景。",
    tag_internship: "实习",
    tag_education: "教育",
    tag_research: "科研",

    exp_hithink_role: "算法实习生",
    exp_hithink_org: "同花顺 · B2C 开发基础架构部",
    exp_hithink_period: "2026.02 — 2026.07",
    exp_hithink_b1:
      "LangGraph 多智能体因子挖掘：Search → Extract → Review → Chart Planning，单指标响应时间降低 60%+。",
    exp_hithink_b2:
      "GRPO 对齐 Qwen3-14B，15K+ 专家轨迹；设计数据源/图表匹配/完整度/效率多维规则奖励。",
    exp_hithink_b3:
      "vLLM + FP8 部署，推理成本降至通用模型 1/3 以下，P50 < 8s，支撑 F10 日均万级请求。",

    exp_ucas_role: "计算机技术应用 · 直博",
    exp_ucas_org: "中国科学院大学 · 人工智能学院",
    exp_ucas_period: "2025.09 — 2030.06",
    exp_ucas_desc:
      "GPA 3.82/4.0；研究 AI Agent、大模型对齐与组学智能；20251602 班班长。",

    exp_cau_role: "植物保护 · 本科",
    exp_cau_org: "中国农业大学",
    exp_cau_period: "2021.09 — 2025.06",
    exp_cau_desc:
      "优秀毕业生；本科毕设基于 Tree2GD 研究多种植物抗病基因演化。",

    exp_pku_role: "经济学 · 辅修",
    exp_pku_org: "北京大学国家发展研究院",
    exp_pku_period: "2022.09 — 2025.06",
    exp_pku_desc: "达世行奖学金；经双学生会联络部部长。",

    exp_research_role: "科研训练",
    exp_research_org: "组学与植物保护交叉",
    exp_research_period: "2023.03 — 2025.07",
    exp_research_desc:
      "禾谷缢管蚜抗药性基因筛选（RNA 提取、RNAi 生物测定）；复现 STAGATE、GraphST 空间转录组聚类算法。",

    section_skills_label: "04 / TOOLKIT",
    section_skills_title: "技能与荣誉",
    section_skills_desc: "做研究也做工程，习惯把工具链用深。",
    skill_llm: "LLM & Agent",
    skill_llm_items:
      "RAG · GraphRAG · LoRA · LangGraph · MCP · OpenCode · Claude Code",
    skill_dl: "深度学习",
    skill_dl_items:
      "PyTorch · HuggingFace · ModelScope · vLLM · FP8 · DPO / GRPO",
    skill_sys: "工程与系统",
    skill_sys_items:
      "Python · C/C++ · JavaScript · Solidity · STM32 · Linux",
    skill_web3: "Web3",
    skill_web3_items: "Conflux eSpace · EIP-712 · 智能合约 · RWA",
    skill_lang: "语言",
    skill_lang_items: "CET-6 · 中文（母语）",

    honors_title: "荣誉",
    honor_1: "中国农业大学优秀毕业生 · 2025",
    honor_2: "北大国发院达世行奖学金 · 2023",
    honor_3: "“长城杯”CTF 比赛第 35 名 · 2023",
    honor_4: "学业二等奖学金、三好学生 · 2022",

    section_contact_label: "05 / CONTACT",
    section_contact_title: "聊聊？",
    section_contact_desc:
      "欢迎 AI Agent、LLM 对齐、组学智能方向的科研合作与实习机会。",
    contact_email_label: "邮箱",
    contact_github_label: "GitHub",
    contact_location_label: "所在地",
    contact_location_value: "北京 · 安徽阜阳",
    contact_copy: "复制邮箱",
    contact_copied: "已复制",
    contact_resume: "下载简历",

    footer_text:
      "© 2026 Thomas Zhao · 用 HTML / CSS / JS 手写 · 托管于 GitHub Pages",

    status_ongoing: "进行中",
    status_open_source: "开源",
    status_award: "获奖",
    status_course: "课程项目",
    status_hackathon: "黑客松",
  },

  en: {
    page_title: "Thomas Zhao · AI Agents & LLM Systems",
    meta_description:
      "Personal academic homepage of Thomas Zhao, direct-PhD student at UCAS School of AI, working on AI agents, LLM alignment, and omics intelligence.",

    skip_link: "Skip to content",
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "Work",
    nav_experience: "Experience",
    nav_contact: "Contact",

    hero_eyebrow: "PhD Student · AI Agents & LLM Systems",
    hero_affil:
      "University of Chinese Academy of Sciences · School of AI · Direct PhD",
    hero_summary:
      "I work on AI agents, LLM alignment, and omics intelligence. I have built financial factor-mining agents, scientific multi-agent systems, and automated operator optimization — I like turning model capabilities into systems that actually run.",
    hero_cta_projects: "View work",
    hero_cta_github: "GitHub",
    hero_cta_email: "Email me",
    hero_cta_resume: "Resume",
    hero_availability: "Open to research collaboration and internships",

    stat_gpa_label: "GPA",
    stat_skills_label: "Domain skills",
    stat_samples_label: "GRPO samples",
    stat_ops_label: "Operators passed",

    terminal_whoami_out: "Thomas Zhao · PhD @ UCAS",
    terminal_research_out: "AI agents · LLM alignment · omics",
    terminal_now_out: "building scientific multi-agent systems",

    section_research_label: "01 / RESEARCH",
    section_research_title: "Research",
    section_research_desc:
      "From agent orchestration to model alignment, omics, and RL — I care about closed-loop, verifiable systems.",
    research_1_title: "AI Agents & Multi-Agent Systems",
    research_1_desc:
      "Supervisor–Worker orchestration, MCP tool use, persistent state, and human-in-the-loop review for research and finance.",
    research_2_title: "LLM Alignment & Reasoning",
    research_2_desc:
      "Continued pretraining, SFT, DPO, and RLVR/GRPO; focused on verifiable rewards and multi-step reasoning.",
    research_3_title: "Omics & Spatial Transcriptomics",
    research_3_desc:
      "Single-cell and spatial transcriptomics, KEGG/GO, GraphRAG, and multimodal computational pathology.",
    research_4_title: "RL & Embodied Systems",
    research_4_desc:
      "PPO/SAC/TD3+BC, LQR baselines, and sim-to-real deployment from simulation to STM32 hardware.",

    section_projects_label: "02 / SELECTED WORK",
    section_projects_title: "Selected Work",
    section_projects_desc:
      "Six projects from research to deployment, spanning agents, LLMs, heterogeneous computing, and Web3.",
    filter_all: "All",
    filter_agents: "Agent",
    filter_llm: "LLM",
    filter_systems: "Systems",
    filter_web3: "Web3",
    projects_more: "More on GitHub",

    section_experience_label: "03 / EXPERIENCE",
    section_experience_title: "Experience & Education",
    section_experience_desc:
      "Industry internship, direct-PhD research, and an interdisciplinary background.",
    tag_internship: "Internship",
    tag_education: "Education",
    tag_research: "Research",

    exp_hithink_role: "Algorithm Intern",
    exp_hithink_org: "Hithink RoyalFlush · B2C Infrastructure",
    exp_hithink_period: "2026.02 — 2026.07",
    exp_hithink_b1:
      "LangGraph multi-agent factor mining: Search → Extract → Review → Chart Planning, cutting single-metric response time by 60%+.",
    exp_hithink_b2:
      "Aligned Qwen3-14B with GRPO on 15K+ expert trajectories; designed multi-dimensional rewards for source correctness, chart matching, completeness, and latency.",
    exp_hithink_b3:
      "Deployed with vLLM + FP8; inference cost below one third of a general model, P50 < 8s, serving 10K+ daily F10 requests.",

    exp_ucas_role: "Direct PhD · Computer Technology",
    exp_ucas_org: "University of Chinese Academy of Sciences · School of AI",
    exp_ucas_period: "2025.09 — 2030.06",
    exp_ucas_desc:
      "GPA 3.82/4.0; research on AI agents, LLM alignment, and omics; class monitor of 20251602.",

    exp_cau_role: "BSc · Plant Protection",
    exp_cau_org: "China Agricultural University",
    exp_cau_period: "2021.09 — 2025.06",
    exp_cau_desc:
      "Outstanding graduate; undergraduate thesis on disease-resistance gene evolution across plants with Tree2GD.",

    exp_pku_role: "Minor · Economics",
    exp_pku_org: "National School of Development, Peking University",
    exp_pku_period: "2022.09 — 2025.06",
    exp_pku_desc:
      "Dashixing Scholarship; liaison department head of the NSD student union.",

    exp_research_role: "Research Training",
    exp_research_org: "Omics × Plant Protection",
    exp_research_period: "2023.03 — 2025.07",
    exp_research_desc:
      "Screened insecticide-resistance genes in Rhopalosiphum padi (RNA extraction, RNAi bioassays); reproduced STAGATE and GraphST spatial clustering algorithms.",

    section_skills_label: "04 / TOOLKIT",
    section_skills_title: "Toolkit & Honors",
    section_skills_desc:
      "I do research and engineering, and I like to use my tools deeply.",
    skill_llm: "LLM & Agent",
    skill_llm_items:
      "RAG · GraphRAG · LoRA · LangGraph · MCP · OpenCode · Claude Code",
    skill_dl: "Deep Learning",
    skill_dl_items:
      "PyTorch · HuggingFace · ModelScope · vLLM · FP8 · DPO / GRPO",
    skill_sys: "Engineering & Systems",
    skill_sys_items:
      "Python · C/C++ · JavaScript · Solidity · STM32 · Linux",
    skill_web3: "Web3",
    skill_web3_items: "Conflux eSpace · EIP-712 · Smart contracts · RWA",
    skill_lang: "Languages",
    skill_lang_items: "CET-6 · Chinese (native) · English (working)",

    honors_title: "Honors",
    honor_1: "Outstanding Graduate, China Agricultural University · 2025",
    honor_2: "Dashixing Scholarship, NSD Peking University · 2023",
    honor_3: "Great Wall Cup CTF, 35th place · 2023",
    honor_4: "Academic Second-Class Scholarship & Merit Student · 2022",

    section_contact_label: "05 / CONTACT",
    section_contact_title: "Let's talk",
    section_contact_desc:
      "Open to research collaboration and internships in AI agents, LLM alignment, and omics intelligence.",
    contact_email_label: "Email",
    contact_github_label: "GitHub",
    contact_location_label: "Location",
    contact_location_value: "Beijing · Fuyang, Anhui",
    contact_copy: "Copy email",
    contact_copied: "Copied",
    contact_resume: "Download CV",

    footer_text:
      "© 2026 Thomas Zhao · Hand-written in HTML / CSS / JS · Hosted on GitHub Pages",

    status_ongoing: "Ongoing",
    status_open_source: "Open source",
    status_award: "Award",
    status_course: "Course project",
    status_hackathon: "Hackathon",
  },
};

const PROJECTS = [
  {
    id: "multi-agent",
    category: "agents",
    title: { zh: "科研多智能体系统", en: "Scientific Multi-Agent System" },
    subtitle: {
      zh: "OpenCode · Supervisor–Worker 编排",
      en: "OpenCode · Supervisor–Worker orchestration",
    },
    desc: {
      zh: "内置 200+ 领域技能，支持单细胞空间转录组、结构变异、KEGG/GO 与 NCBI 查询；GraphRAG 知识图谱 + 中心化状态持久化 + 人在环审阅。",
      en: "200+ domain skills for spatial transcriptomics, structural variants, KEGG/GO and NCBI queries; GraphRAG knowledge graph, centralized state persistence, and human-in-the-loop review.",
    },
    tags: ["Multi-Agent", "GraphRAG", "MCP", "Bioinformatics"],
    metric: { zh: "200+ 领域技能", en: "200+ domain skills" },
    status: { zh: "进行中", en: "Ongoing" },
    link: "",
  },
  {
    id: "omics-llm",
    category: "llm",
    title: {
      zh: "组学大模型持续预训练与对齐",
      en: "Omics LLM Pretraining & Alignment",
    },
    subtitle: {
      zh: "Qwen3-8B · Continued Pretraining → SFT → DPO → RLVR",
      en: "Qwen3-8B · Continued pretraining → SFT → DPO → RLVR",
    },
    desc: {
      zh: "百万级组学文献 + 结构化 KEGG/GO 数据 continued mid-training；10K+ 指令 SFT；DPO 对齐专家决策；GRPO/RLVR 优化多步推理。",
      en: "Continued mid-training on millions of omics papers and structured KEGG/GO data; 10K+ instruction SFT; DPO alignment to expert decisions; GRPO/RLVR for multi-step reasoning.",
    },
    tags: ["Qwen3-8B", "DPO", "RLVR", "GRPO"],
    metric: { zh: "10K+ 指令样本", en: "10K+ instruction samples" },
    status: { zh: "进行中", en: "Ongoing" },
    link: "",
  },
  {
    id: "openoperator",
    category: "systems",
    title: { zh: "OpenOperator", en: "OpenOperator" },
    subtitle: {
      zh: "BANG C · MLU370 · 自进化算子优化",
      en: "BANG C · MLU370 · Self-evolving operator optimization",
    },
    desc: {
      zh: "选题 → 生成 → 语法检查 → 硬件评测 → 评分 → 经验总结的全自动闭环；探索 6 种优化维度，打通 14/139 个算子。",
      en: "A self-evolving loop — select, generate, compile, benchmark, score, reflect — for Cambricon MLU370 BANG C operators; 14/139 operators passed across 6 optimization dimensions.",
    },
    tags: ["BANG C", "MLU370", "Agent", "Heterogeneous"],
    metric: { zh: "14/139 算子", en: "14/139 operators" },
    status: { zh: "开源", en: "Open source" },
    link: "https://github.com/zfginucas/openoperator-start-kit",
  },
  {
    id: "balance-car",
    category: "systems",
    title: {
      zh: "二阶平衡车 RL 控制",
      en: "Balancing Robot RL",
    },
    subtitle: {
      zh: "LQR → BC → PPO/SAC/TD3+BC · Sim-to-Real",
      en: "LQR → BC → PPO/SAC/TD3+BC · Sim-to-Real",
    },
    desc: {
      zh: "LQR 安全基线 + 200K 专家数据；BC warm start + 残差 RL + DAgger 在线纠正；PC–STM32 分级控制，完成实车站立/移动。",
      en: "LQR safety baseline with 200K expert state-action pairs; BC warm start + residual PPO + DAgger online corrections; PC–STM32 hierarchical control with real-robot standing and driving.",
    },
    tags: ["PPO", "LQR", "DAgger", "STM32"],
    metric: { zh: "0.785 存活率", en: "0.785 survival rate" },
    status: { zh: "课程项目", en: "Course project" },
    link: "",
  },
  {
    id: "tradeshield",
    category: "web3",
    title: { zh: "TradeShield-AI", en: "TradeShield-AI" },
    subtitle: {
      zh: "AI 动态定价的电子提单 RWA 协议",
      en: "AI-priced eBL RWA protocol",
    },
    desc: {
      zh: "5 个 Solidity 合约、154 个测试，部署 Sepolia；风险定价 Agent + evidence_hash 链上锚定；ETH Beijing 2026 黑客松 Security/Risk Agent 赛道获奖。",
      en: "5 Solidity contracts, 154 tests, deployed on Sepolia; risk-pricing agent with on-chain evidence hashes; award at ETH Beijing 2026 (Security/Risk Agent track).",
    },
    tags: ["RWA", "Solidity", "AI Agent", "DeFi"],
    metric: { zh: "154 个测试", en: "154 tests" },
    status: { zh: "获奖", en: "Award" },
    link: "https://github.com/LuBryant/TradeShield-AI",
  },
  {
    id: "web-agent",
    category: "agents",
    title: { zh: "Web Agent", en: "Web Agent" },
    subtitle: {
      zh: "Edge/Chrome 扩展 · 自然语言网页操作",
      en: "Edge/Chrome extension · Natural-language web actions",
    },
    desc: {
      zh: "自动识别表单与按钮，集成 8 种 AI 平台 API；一键课程评价、自动选课，服务国科大师生。",
      en: "Turns natural language into web actions; 8 AI platform APIs; one-click course review and enrollment for UCAS students.",
    },
    tags: ["JavaScript", "Chrome Extension", "LLM API", "DOM"],
    metric: { zh: "8 个 AI 平台", en: "8 AI platforms" },
    status: { zh: "开源", en: "Open source" },
    link: "https://github.com/zfginucas/web_Agent",
  },
];
