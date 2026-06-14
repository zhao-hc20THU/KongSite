export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi: string;
  url: string;
  tags: string[];
  citationCount?: number;
};

export const recentPublications: Publication[] = [
  {
    title: "Moisture sorption behaviour, microstructural changes and macroscopic deformation of hardened cement pastes during the first three drying-resaturation cycles",
    authors: "Jianhao Yin, Chaoyang Zhang, Xiangming Kong*, Xiaowei Hou, Jiaxin Liao, Jian Liu, Wenyu Li",
    journal: "Cement and Concrete Research",
    year: 2024,
    volume: "186",
    pages: "107677",
    doi: "10.1016/j.cemconres.2024.107677",
    url: "https://doi.org/10.1016/j.cemconres.2024.107677",
    tags: ["moisture sorption", "microstructure", "cement paste"]
  },
  {
    title: "Phase compositions and pore structure of phosphate modified calcium aluminate cement hardened pastes with varied dosages of sodium polyphosphate",
    authors: "Shangfeng Zhang, Chaoyang Zhang, Xiaofan Pang, Ligang Shi, Maolin Song, Bin Yu, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2024,
    volume: "184",
    pages: "107609",
    doi: "10.1016/j.cemconres.2024.107609",
    url: "https://doi.org/10.1016/j.cemconres.2024.107609",
    tags: ["calcium aluminate cement", "phosphate modification", "pore structure"]
  },
  {
    title: "Mechanical properties of polymer-modified mortars using polymer latexes with varied glass transition temperature and surface charge",
    authors: "Chaoyang Zhang, Jian Liu, Shangfeng Zhang, Xiangming Kong*",
    journal: "Cement and Concrete Composites",
    year: 2024,
    volume: "150",
    pages: "105573",
    doi: "10.1016/j.cemconcomp.2024.105573",
    url: "https://doi.org/10.1016/j.cemconcomp.2024.105573",
    tags: ["polymer-modified mortar", "latex", "mechanical properties"]
  },
  {
    title: "Impact of triethanolamine on the hydration of Portland cement in the presence of high pozzolanic activity supplementary cementitious materials",
    authors: "Jun Jiang, Zhengmao Ye, Jiaming Wu, Qingchun Yang, Quanliang Li, Xiangming Kong",
    journal: "Cement and Concrete Composites",
    year: 2024,
    volume: "147",
    pages: "105435",
    doi: "10.1016/j.cemconcomp.2024.105435",
    url: "https://doi.org/10.1016/j.cemconcomp.2024.105435",
    tags: ["triethanolamine", "SCMs", "hydration"]
  },
  {
    title: "Influence of a dialysed polymer latex on the hydration of OPC - A closer look into adsorption processes",
    authors: "Jakob Schreiber*, Jian Wang, Xiangming Kong, Jurgen Neubauer, Daniel Jansen",
    journal: "Cement and Concrete Research",
    year: 2024,
    volume: "176",
    pages: "107390",
    doi: "10.1016/j.cemconres.2023.107390",
    url: "https://doi.org/10.1016/j.cemconres.2023.107390",
    tags: ["polymer latex", "OPC hydration", "adsorption"]
  },
  {
    title: "Damping performance of hardened cement pastes containing Styrene-Butyl Acrylate polymers with varied glass transition temperature and surface charges",
    authors: "Chaoyang Zhang, Jing Wang, Shangfeng Zhang, Xiaowei Hou, Xiangming Kong*",
    journal: "Cement and Concrete Composites",
    year: 2024,
    volume: "145",
    pages: "105312",
    doi: "10.1016/j.cemconcomp.2023.105312",
    url: "https://doi.org/10.1016/j.cemconcomp.2023.105312",
    tags: ["damping", "polymer", "cement paste"]
  },
  {
    title: "Insight into the role of Beta-cyclodextrin on the hydration of white Portland cement",
    authors: "Wenyu Li, Jian Wang, Weiyi Chen, Jianhao Yin, Haijun Yang, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2023,
    volume: "172",
    pages: "107238",
    doi: "10.1016/j.cemconres.2023.107238",
    url: "https://doi.org/10.1016/j.cemconres.2023.107238",
    tags: ["Beta-cyclodextrin", "white Portland cement", "hydration"]
  },
  {
    title: "Characterization of the nanoparticles formed in aqueous phase of hydrating cement pastes in the presence of PCEs",
    authors: "Jian Wang, Jiaxin Liao, Xiangming Kong*, Jianhao Yin",
    journal: "Cement and Concrete Research",
    year: 2023,
    volume: "165",
    pages: "107087",
    doi: "10.1016/j.cemconres.2022.107087",
    url: "https://doi.org/10.1016/j.cemconres.2022.107087",
    tags: ["PCE", "nanoparticles", "hydrating cement paste"]
  },
  {
    title: "Irreversible microstructural changes of calcium silicate hydrate during the first drying-resaturation cycle",
    authors: "Jianhao Yin, Wenyu Li, Jiang Wang, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2023,
    volume: "163",
    pages: "107032",
    doi: "10.1016/j.cemconres.2022.107032",
    url: "https://doi.org/10.1016/j.cemconres.2022.107032",
    tags: ["C-S-H", "drying-resaturation", "microstructure"]
  },
  {
    title: "Water absorption behavior of hydrophobized concrete using silane emulsion as admixture",
    authors: "Chaoyang Zhang, Shangfeng Zhang, Jianwei Yu, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2022,
    volume: "154",
    pages: "106738",
    doi: "10.1016/j.cemconres.2022.106738",
    url: "https://doi.org/10.1016/j.cemconres.2022.106738",
    tags: ["hydrophobized concrete", "silane emulsion", "water absorption"],
    citationCount: 90
  },
  {
    title: "Correlation between the adsorption behavior of colloidal polymer particles and the yield stress of fresh cement pastes",
    authors: "Chaoyang Zhang, Xiangming Kong*, Jianwei Yu, Daniel Jansen, Joachim Pakusch, Shengxian Wang",
    journal: "Cement and Concrete Research",
    year: 2022,
    volume: "152",
    pages: "106668",
    doi: "10.1016/j.cemconres.2021.106668",
    url: "https://doi.org/10.1016/j.cemconres.2021.106668",
    tags: ["colloidal polymer particles", "yield stress", "fresh cement paste"]
  },
  {
    title: "Influences of PCE superplasticizers with varied architectures on the formation and morphology of calcium hydroxide crystals",
    authors: "Jian Wang, Jianhao Yin, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2022,
    volume: "152",
    pages: "106670",
    doi: "10.1016/j.cemconres.2021.106670",
    url: "https://doi.org/10.1016/j.cemconres.2021.106670",
    tags: ["PCE", "calcium hydroxide", "crystallization"]
  },
  {
    title: "Properties and reaction mechanism of phosphoric acid activated metakaolin geopolymer at varied curing temperatures",
    authors: "Hui Lin, Hui Liu, Yue Li, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2021,
    volume: "144",
    pages: "106425",
    doi: "10.1016/j.cemconres.2021.106425",
    url: "https://doi.org/10.1016/j.cemconres.2021.106425",
    tags: ["phosphoric acid activation", "metakaolin geopolymer", "curing temperature"],
    citationCount: 164
  },
  {
    title: "Rheology of fresh cement pastes containing polymer nanoparticles",
    authors: "Chaoyang Zhang, Xiangming Kong*, Jianhao Yin, Xiaochen Fu",
    journal: "Cement and Concrete Research",
    year: 2021,
    doi: "10.1016/j.cemconres.2021.106419",
    url: "https://doi.org/10.1016/j.cemconres.2021.106419",
    tags: ["rheology", "polymer nanoparticles", "fresh cement paste"]
  }
];

export const homeSelectedPublications: Publication[] = [
  {
    title: "Towards a further understanding of cement hydration in the presence of triethanolamine",
    authors: "Zichen Lu, Xiangming Kong*, Daniel Jansen*, Chaoyang Zhang, Jian Wang, Xiaofan Pang, Jianhao Yin",
    journal: "Cement and Concrete Research",
    year: 2020,
    volume: "132",
    pages: "106041",
    doi: "10.1016/j.cemconres.2020.106041",
    url: "https://doi.org/10.1016/j.cemconres.2020.106041",
    tags: ["triethanolamine", "cement hydration", "alkanolamines"],
    citationCount: 188
  },
  {
    title: "Properties and reaction mechanism of phosphoric acid activated metakaolin geopolymer at varied curing temperatures",
    authors: "Hui Lin, Hui Liu, Yue Li, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2021,
    volume: "144",
    pages: "106425",
    doi: "10.1016/j.cemconres.2021.106425",
    url: "https://doi.org/10.1016/j.cemconres.2021.106425",
    tags: ["geopolymer", "acid activation", "novel cementitious materials"],
    citationCount: 164
  },
  {
    title: "Water absorption behavior of hydrophobized concrete using silane emulsion as admixture",
    authors: "Chaoyang Zhang, Shangfeng Zhang, Jianwei Yu, Xiangming Kong*",
    journal: "Cement and Concrete Research",
    year: 2022,
    volume: "154",
    pages: "106738",
    doi: "10.1016/j.cemconres.2022.106738",
    url: "https://doi.org/10.1016/j.cemconres.2022.106738",
    tags: ["hydrophobized concrete", "durability", "water transport"],
    citationCount: 90
  }
];
