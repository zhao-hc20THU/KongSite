export type ResearchDirection = {
  id: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  methods: string[];
  applications: string[];
};

export const researchDirections: ResearchDirection[] = [
  {
    id: "rheology-admixtures",
    titleZh: "流变调控与化学外加剂",
    titleEn: "Rheology Control and Chemical Admixtures",
    summaryZh:
      "关注聚羧酸减水剂、乳液颗粒和水溶性高分子等化学功能材料在新拌水泥浆体中的吸附、分散、桥联、体积效应和流变响应。",
    summaryEn:
      "This direction studies adsorption, dispersion, bridging, volume effects, and rheological responses of superplasticizers, polymer latex particles, and water-soluble polymers in fresh cementitious systems.",
    methods: ["吸附与分散表征", "流变测试", "微结构分析", "多尺度机理解释"],
    applications: ["工作性调控", "泵送与施工性能", "3D 打印建造材料"]
  },
  {
    id: "hydration-setting",
    titleZh: "水化机理、凝结与强度调控",
    titleEn: "Hydration, Setting, and Strength Development",
    summaryZh:
      "围绕水泥水化过程、C-S-H 生成、Ca(OH)2 结晶和醇胺/聚合物外加剂影响，建立凝结和早期强度调控的基础认识。",
    summaryEn:
      "The group investigates cement hydration, C-S-H formation, Ca(OH)2 crystallization, and the effects of alkanolamines and polymer admixtures to support setting and early-strength control.",
    methods: ["水化热与相组成分析", "结晶过程表征", "孔隙与微结构测试", "化学外加剂作用机制分析"],
    applications: ["速凝剂与早强剂", "低熟料胶凝材料", "碱激发与酸激发材料"]
  },
  {
    id: "cracking-toughness",
    titleZh: "收缩开裂控制与力学增韧",
    titleEn: "Shrinkage, Cracking Control, and Toughening",
    summaryZh:
      "研究聚合物纤维、高吸水性树脂、水凝胶和聚合物改性体系对水泥基材料收缩、开裂、韧性和界面粘结性能的影响。",
    summaryEn:
      "This direction examines how polymer fibers, superabsorbent polymers, hydrogels, and polymer-modified systems affect shrinkage, cracking, toughness, and interfacial bonding.",
    methods: ["力学性能测试", "收缩与开裂评价", "界面与孔结构分析", "内养护机制研究"],
    applications: ["抗裂砂浆与混凝土", "增韧水泥基材料", "自修复胶凝材料"]
  },
  {
    id: "transport-durability",
    titleZh: "传输控制、抗渗与耐久性提升",
    titleEn: "Transport Control, Impermeability, and Durability",
    summaryZh:
      "面向水、离子和气体传输过程，研究聚合物膜、孔结构调控、疏水抗渗与耐腐蚀材料体系对耐久性的贡献。",
    summaryEn:
      "This research addresses water, ion, and gas transport by studying polymer film formation, pore-structure regulation, hydrophobic barriers, and corrosion-resistant cementitious systems.",
    methods: ["毛细吸水与渗透测试", "孔结构表征", "耐腐蚀评价", "微结构-性能关联"],
    applications: ["防水防腐涂层", "海工材料", "油井与碳封存固井材料"]
  },
  {
    id: "environment-engineering",
    titleZh: "环境生态与工程应用",
    titleEn: "Environmental Performance and Engineering Applications",
    summaryZh:
      "关注工业固废建材化、重金属固化与浸出风险、CO2 封存固井以及功能建筑高分子材料在重大工程中的应用。",
    summaryEn:
      "The group connects materials chemistry with engineering needs, including industrial solid-waste utilization, heavy-metal immobilization, CO2 storage cementing, and functional construction polymers.",
    methods: ["浸出风险评价", "工程材料体系设计", "现场应用反馈", "科学-技术-工程闭环总结"],
    applications: ["工业固废建材化", "海上碳封存", "功能建筑高分子材料"]
  }
];
