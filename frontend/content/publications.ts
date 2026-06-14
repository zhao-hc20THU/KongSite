export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  url: string;
  sourceLabel?: string;
  tags: string[];
  citationCount?: number;
};

export const recentPublications: Publication[] = [
  {
    title: "Role of functional monomers of latex polymer in governing moisture-induced deterioration of mechanical properties of polymer-inorganic composites",
    authors: "J. Wang, ... X. Kong",
    journal: "Polymer Degradation and Stability",
    year: 2026,
    volume: "Volume 251, September 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S014139102600296X",
    sourceLabel: "ScienceDirect",
    tags: ["latex polymer", "polymer-inorganic composites", "moisture deterioration"]
  },
  {
    title: "Retardation mechanism of alkali-activated slag by organo-silanes: From surface interaction to gel evolution",
    authors: "H. Tian, ... X. Kong",
    journal: "Cement and Concrete Composites",
    year: 2026,
    volume: "Volume 169, May 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0958946526000764",
    sourceLabel: "ScienceDirect",
    tags: ["alkali-activated slag", "organo-silanes", "gel evolution"]
  },
  {
    title: "Na2SO4 and Ca(OH)2 co-activated calcined clay: A low-carbon binder at high temperature",
    authors: "H. Wang, ... X. Kong, ... J. Wang",
    journal: "Construction and Building Materials",
    year: 2026,
    volume: "Volume 518, 4 April 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061826007105",
    sourceLabel: "ScienceDirect",
    tags: ["calcined clay", "low-carbon binder", "high temperature"]
  },
  {
    title: "Moisture responses of polymer-cement waterproofing membranes prepared with different type of polymer latexes",
    authors: "J. Wang, ... X. Kong",
    journal: "Progress in Organic Coatings",
    year: 2026,
    volume: "Volume 213, April 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0300944026000202",
    sourceLabel: "ScienceDirect",
    tags: ["waterproofing membranes", "polymer latex", "moisture response"],
    citationCount: 1
  },
  {
    title: "Enhanced flowability of metakaolin-blended cement through the synergistic effect of polycarboxylate superplasticizer and retarder: Competitive adsorption and retarded hydration",
    authors: "Y. Pan, ... X. Kong, Z. Sun",
    journal: "Cement and Concrete Research",
    year: 2026,
    volume: "Volume 202, April 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0008884626000116",
    sourceLabel: "ScienceDirect",
    tags: ["metakaolin-blended cement", "polycarboxylate", "retarded hydration"]
  },
  {
    title: "Quantitative correlation of cement hydration, pore structure evolution and strength development of cement pastes with accelerators",
    authors: "J. Liao, ... X. Kong, ... P. Zhou",
    journal: "Cement and Concrete Research",
    year: 2026,
    volume: "Volume 200, February 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0008884625003138",
    sourceLabel: "ScienceDirect",
    tags: ["cement hydration", "pore structure", "accelerators"],
    citationCount: 3
  },
  {
    title: "The influence of in-situ polymerization of acrylamide on cement hydration",
    authors: "Y. Rui, ... X. Kong, ... Y. Zheng",
    journal: "Materials Letters",
    year: 2026,
    volume: "Volume 402, 1 January 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0167577X25014053",
    sourceLabel: "ScienceDirect",
    tags: ["in-situ polymerization", "acrylamide", "cement hydration"],
    citationCount: 3
  },
  {
    title: "Tailoring the reaction kinetics of Ca(OH)2-Na2SO4-activated metakaolin system under high-temperature well cementing conditions",
    authors: "H. Tian, ... X. Kong",
    journal: "Construction and Building Materials",
    year: 2026,
    volume: "Volume 506, 13 January 2026",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061825052201",
    sourceLabel: "ScienceDirect",
    tags: ["metakaolin", "reaction kinetics", "well cementing"],
    citationCount: 1
  },
  {
    title: "A new method to improve the crack resistance of cement-based composites: Development of magneto-responsive polymer latex and performance evaluation",
    authors: "L. Wang, ... X. Kong",
    journal: "Construction and Building Materials",
    year: 2025,
    volume: "Volume 505, 26 December 2025",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061825048172",
    sourceLabel: "ScienceDirect",
    tags: ["crack resistance", "magneto-responsive polymer latex", "cement-based composites"]
  },
  {
    title: "In situ polymerization of acrylamide improves cement properties: Fluidity, mechanical properties and hydration mechanism",
    authors: "Y. Rui, ... X. Kong, ... C. Wang",
    journal: "Construction and Building Materials",
    year: 2025,
    volume: "Volume 505, 26 December 2025",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061825049037",
    sourceLabel: "ScienceDirect",
    tags: ["in situ polymerization", "acrylamide", "hydration mechanism"]
  },
  {
    title: "A novel type of superplasticizer with linear polymer structure for alkali-activated slag pastes",
    authors: "H. Tian, ... X. Kong, Y. Wang",
    journal: "Construction and Building Materials",
    year: 2025,
    volume: "Volume 494, 10 October 2025",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061825036591",
    sourceLabel: "ScienceDirect",
    tags: ["superplasticizer", "linear polymer", "alkali-activated slag"]
  },
  {
    title: "Effect of latex polymers with different functional monomers on time-dependent rheological properties of fresh cement pastes",
    authors: "J. Wang, ... X. Kong, Y. Xie",
    journal: "Construction and Building Materials",
    year: 2025,
    volume: "Volume 491, 12 September 2025",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061825028612",
    sourceLabel: "ScienceDirect",
    tags: ["latex polymers", "functional monomers", "rheology"]
  },
  {
    title: "Effect of various SCMs on the properties of mortar systems during steam and carbonation curing conditions",
    authors: "Y. HeLian, ... X. Kong",
    journal: "Construction and Building Materials",
    year: 2025,
    volume: "Volume 489, 29 August 2025",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061825022925",
    sourceLabel: "ScienceDirect",
    tags: ["SCMs", "mortar systems", "carbonation curing"]
  },
  {
    title: "Effect of power ultrasound treatment on cement hydration in the presence of polycarboxylate",
    authors: "J. Wang, ... X. Kong",
    journal: "Construction and Building Materials",
    year: 2025,
    volume: "Volume 458, 10 January 2025",
    url: "https://www.sciencedirect.com/science/article/pii/S095006182404635X",
    sourceLabel: "ScienceDirect",
    tags: ["power ultrasound", "cement hydration", "polycarboxylate"]
  },
  {
    title: "Moisture sorption behaviour, microstructural changes and macroscopic deformation of hardened cement pastes during the first three drying-resaturation cycles",
    authors: "J. Yin, ... X. Kong, ... W. Li",
    journal: "Cement and Concrete Research",
    year: 2024,
    volume: "Volume 186, December 2024",
    doi: "10.1016/j.cemconres.2024.107677",
    url: "https://doi.org/10.1016/j.cemconres.2024.107677",
    tags: ["moisture sorption", "microstructure", "cement paste"]
  },
  {
    title: "Moisture sorption and mechanical properties of polymer-cement waterproofing membranes investigated by LF NMR",
    authors: "J. Liao, ... X. Kong",
    journal: "Construction and Building Materials",
    year: 2024,
    volume: "Volume 449, 25 October 2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061824033300",
    sourceLabel: "ScienceDirect",
    tags: ["polymer-cement membrane", "LF NMR", "moisture sorption"]
  },
  {
    title: "The improved cyclic resistance of bio-treated sands with various gradations for liquefaction mitigation: Density increase and/or cementation?",
    authors: "T. Yu, ... X. Kong",
    journal: "Soil Dynamics and Earthquake Engineering",
    year: 2024,
    volume: "Volume 185, October 2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0267726124004469",
    sourceLabel: "ScienceDirect",
    tags: ["bio-treated sands", "liquefaction mitigation", "cementation"]
  },
  {
    title: "Phase compositions and pore structure of phosphate modified calcium aluminate cement hardened pastes with varied dosages of sodium polyphosphate",
    authors: "S. Zhang, ... X. Kong",
    journal: "Cement and Concrete Research",
    year: 2024,
    volume: "Volume 184, October 2024",
    doi: "10.1016/j.cemconres.2024.107609",
    url: "https://doi.org/10.1016/j.cemconres.2024.107609",
    tags: ["calcium aluminate cement", "phosphate modification", "pore structure"]
  },
  {
    title: "Corrosion resistance of polymer-modified hardened cement paste and phosphoric acid-activated metakaolin geopolymer in carbonic acid solution",
    authors: "C. Zhang, ... X. Kong, Bin Yu",
    journal: "Construction and Building Materials",
    year: 2024,
    volume: "Volume 445, 27 September 2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061824030927",
    sourceLabel: "ScienceDirect",
    tags: ["corrosion resistance", "polymer-modified cement", "geopolymer"]
  },
  {
    title: "Mussel-inspired magnesium oxychloride cement-based wood adhesive produced via the synergy of inorganic fiber enhancement and multiple reinforcement network",
    authors: "Y. Han, ... X. Kong, J. Li",
    journal: "Construction and Building Materials",
    year: 2024,
    volume: "Volume 439, 16 August 2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061824025339",
    sourceLabel: "ScienceDirect",
    tags: ["magnesium oxychloride cement", "wood adhesive", "reinforcement network"]
  },
  {
    title: "Mechanical properties of polymer modified mortars using polymer latexes with varied glass transition temperature and surface charges",
    authors: "C. Zhang, ... X. Kong",
    journal: "Cement and Concrete Composites",
    year: 2024,
    volume: "Volume 150, July 2024",
    doi: "10.1016/j.cemconcomp.2024.105573",
    url: "https://doi.org/10.1016/j.cemconcomp.2024.105573",
    tags: ["polymer-modified mortar", "latex", "mechanical properties"]
  },
  {
    title: "Formation of synthetic C-S-H in the presence of triethanolamine and/or polycarboxylate polymers",
    authors: "J. Wang, X. Kong, J. Yin",
    journal: "Construction and Building Materials",
    year: 2024,
    volume: "Volume 424, 19 April 2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0950061824010225",
    sourceLabel: "ScienceDirect",
    tags: ["C-S-H", "triethanolamine", "polycarboxylate"]
  },
  {
    title: "Impact of triethanolamine on the hydration of Portland cement in the presence of high pozzolanic activity supplementary cementitious materials",
    authors: "J. Jiang, ... X. Kong",
    journal: "Cement and Concrete Composites",
    year: 2024,
    volume: "Volume 147, March 2024",
    doi: "10.1016/j.cemconcomp.2024.105435",
    url: "https://doi.org/10.1016/j.cemconcomp.2024.105435",
    tags: ["triethanolamine", "SCMs", "hydration"]
  },
  {
    title: "Influence of a dialysed polymer latex on the hydration of OPC - A closer look into adsorption processes",
    authors: "J. Schreiber, ... X. Kong, ... D. Jansen",
    journal: "Cement and Concrete Research",
    year: 2024,
    volume: "Volume 176, February 2024",
    doi: "10.1016/j.cemconres.2023.107390",
    url: "https://doi.org/10.1016/j.cemconres.2023.107390",
    tags: ["polymer latex", "OPC hydration", "adsorption"]
  },
  {
    title: "Damping performance of hardened cement pastes containing styrene-butyl acrylate polymers with varied glass transition temperature and surface charges",
    authors: "C. Zhang, ... X. Kong",
    journal: "Cement and Concrete Composites",
    year: 2024,
    volume: "Volume 145, January 2024",
    doi: "10.1016/j.cemconcomp.2023.105312",
    url: "https://doi.org/10.1016/j.cemconcomp.2023.105312",
    tags: ["damping", "polymer", "cement paste"]
  },
  {
    title: "Insight into the role of beta-cyclodextrin on the hydration of white Portland cement",
    authors: "W. Li, ... X. Kong",
    journal: "Cement and Concrete Research",
    year: 2023,
    volume: "Volume 172, October 2023",
    doi: "10.1016/j.cemconres.2023.107238",
    url: "https://doi.org/10.1016/j.cemconres.2023.107238",
    tags: ["beta-cyclodextrin", "white Portland cement", "hydration"]
  },
  {
    title: "Effect of internal curing on shrinkage of calcium sulfoaluminate cement concrete and calculation of the shrinkage stress at early age considering creep",
    authors: "Z. Fu, ... X. Kong, J. Zhang",
    journal: "Journal of Building Engineering",
    year: 2023,
    volume: "Volume 76, 1 October 2023",
    url: "https://www.sciencedirect.com/science/article/pii/S2352710223014201",
    sourceLabel: "ScienceDirect",
    tags: ["internal curing", "CSA cement concrete", "shrinkage stress"]
  },
  {
    title: "Mechanical strength and the degradation mechanism of metakaolin based geopolymer mixed with ordinary Portland cement and cured at high temperature and high relative humidity",
    authors: "X. Miao, ... X. Kong",
    journal: "Chinese Journal of Chemical Engineering",
    year: 2023,
    volume: "Volume 60, August 2023",
    url: "https://www.sciencedirect.com/science/article/pii/S1004954123000460",
    sourceLabel: "ScienceDirect",
    tags: ["metakaolin geopolymer", "OPC", "high temperature curing"]
  },
  {
    title: "Numerical simulation on damage behaviors of tile-mortar interface induced by mortar shrinkage and temperature cycles",
    authors: "Y. Zhang, ... X. Kong, ... X. Zhang",
    journal: "Engineering Failure Analysis",
    year: 2023,
    volume: "Volume 148, June 2023",
    url: "https://www.sciencedirect.com/science/article/pii/S1350630723001231",
    sourceLabel: "ScienceDirect",
    tags: ["tile-mortar interface", "shrinkage", "temperature cycles"]
  },
  {
    title: "Role of H3PO4 concentration on the dissolution and reaction kinetics of phosphate acid based metakaolin geopolymer",
    authors: "H. Lin, ... X. Kong",
    journal: "Journal of Non Crystalline Solids",
    year: 2023,
    volume: "Volume 606, 15 April 2023",
    url: "https://www.sciencedirect.com/science/article/pii/S0022309323000649",
    sourceLabel: "ScienceDirect",
    tags: ["H3PO4", "metakaolin geopolymer", "reaction kinetics"]
  },
  {
    title: "Effects of wood fiber on the properties of silicoaluminophosphate geopolymer",
    authors: "H. Lin, ... X. Kong",
    journal: "Journal of Building Engineering",
    year: 2023,
    volume: "Volume 64, 1 April 2023",
    url: "https://www.sciencedirect.com/science/article/pii/S2352710222016588",
    sourceLabel: "ScienceDirect",
    tags: ["wood fiber", "silicoaluminophosphate", "geopolymer"]
  },
  {
    title: "Characterization of the nanoparticles formed in aqueous phase of hydrating cement pastes in the presence of PCEs",
    authors: "J. Wang, ... X. Kong, J. Yin",
    journal: "Cement and Concrete Research",
    year: 2023,
    volume: "Volume 165, March 2023",
    doi: "10.1016/j.cemconres.2022.107087",
    url: "https://doi.org/10.1016/j.cemconres.2022.107087",
    tags: ["PCE", "nanoparticles", "hydrating cement paste"]
  },
  {
    title: "Irreversible microstructural changes of calcium silicate hydrate during the first drying-resaturation cycle",
    authors: "J. Yin, ... X. Kong",
    journal: "Cement and Concrete Research",
    year: 2023,
    volume: "Volume 163, January 2023",
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
