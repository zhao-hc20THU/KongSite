export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  url: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title: "Formation of synthetic C-S-H in the presence of triethanolamine and/or polycarboxylate polymers",
    authors: "Jian Wang, Xiangming Kong*, et al.",
    journal: "Construction and Building Materials",
    year: 2024,
    doi: "10.1016/j.conbuildmat.2024.135881",
    url: "https://doi.org/10.1016/j.conbuildmat.2024.135881",
    tags: ["C-S-H", "alkanolamines", "polycarboxylate polymers"]
  },
  {
    title: "Characterization of the nanoparticles formed in aqueous phase of hydrating cement pastes in the presence of PCEs",
    authors: "Jian Wang, Jiaxin Liao, Xiangming Kong*, et al.",
    journal: "Cement and Concrete Research",
    year: 2023,
    doi: "10.1016/j.cemconres.2022.107087",
    url: "https://doi.org/10.1016/j.cemconres.2022.107087",
    tags: ["PCE", "nanoparticles", "cement hydration"]
  },
  {
    title: "Correlation between the adsorption behavior of colloidal polymer particles and the yield stress of fresh cement pastes",
    authors: "Chaoyang Zhang, et al.",
    journal: "Cement and Concrete Research",
    year: 2022,
    doi: "10.1016/j.cemconres.2021.106668",
    url: "https://doi.org/10.1016/j.cemconres.2021.106668",
    tags: ["rheology", "polymer latex", "cement paste"]
  },
  {
    title: "Water absorption behavior of hydrophobized concrete using silane emulsion as admixture",
    authors: "Chaoyang Zhang, et al.",
    journal: "Cement and Concrete Research",
    year: 2022,
    doi: "10.1016/j.cemconres.2022.106738",
    url: "https://doi.org/10.1016/j.cemconres.2022.106738",
    tags: ["hydrophobic concrete", "water absorption", "durability"]
  },
  {
    title: "Influences of PCE superplasticizers with varied architectures on the formation and morphology of calcium hydroxide crystals",
    authors: "Jian Wang, Xiangming Kong*, et al.",
    journal: "Cement and Concrete Research",
    year: 2022,
    doi: "10.1016/j.cemconres.2021.106670",
    url: "https://doi.org/10.1016/j.cemconres.2021.106670",
    tags: ["PCE", "Ca(OH)2", "crystallization"]
  },
  {
    title: "Rheology of fresh cement pastes containing polymer nanoparticles",
    authors: "Chaoyang Zhang, et al.",
    journal: "Cement and Concrete Research",
    year: 2021,
    doi: "10.1016/j.cemconres.2021.106419",
    url: "https://doi.org/10.1016/j.cemconres.2021.106419",
    tags: ["rheology", "polymer nanoparticles", "cement paste"]
  },
  {
    title: "Impacts of two alkanolamines on crystallization and morphology of calcium hydroxide",
    authors: "Jian Wang, Xiangming Kong*, et al.",
    journal: "Cement and Concrete Research",
    year: 2020,
    doi: "10.1016/j.cemconres.2020.106250",
    url: "https://doi.org/10.1016/j.cemconres.2020.106250",
    tags: ["alkanolamines", "Ca(OH)2", "hydration regulation"]
  },
  {
    title: "Towards a further understanding of cement hydration in the presence of triethanolamine",
    authors: "Zichen Lu, Xiangming Kong*, et al.",
    journal: "Cement and Concrete Research",
    year: 2020,
    doi: "10.1016/j.cemconres.2020.106041",
    url: "https://doi.org/10.1016/j.cemconres.2020.106041",
    tags: ["triethanolamine", "cement hydration", "alkanolamines"]
  },
  {
    title: "Pore structure of hardened cement paste containing colloidal polymers with varied glass transition temperature and surface charges",
    authors: "Chaoyang Zhang, et al.",
    journal: "Cement and Concrete Composites",
    year: 2019,
    doi: "10.1016/j.cemconcomp.2018.11.001",
    url: "https://doi.org/10.1016/j.cemconcomp.2018.11.001",
    tags: ["pore structure", "colloidal polymers", "durability"]
  },
  {
    title: "Effect of highly carboxylated colloidal polymers on cement hydration and interactions with calcium ions",
    authors: "Zichen Lu, Xiangming Kong*, et al.",
    journal: "Cement and Concrete Research",
    year: 2018,
    doi: "10.1016/j.cemconres.2018.08.010",
    url: "https://doi.org/10.1016/j.cemconres.2018.08.010",
    tags: ["colloidal polymers", "calcium ions", "cement hydration"]
  },
  {
    title: "Effects of comb-shaped superplasticizers with different charge characteristics on the microstructure and properties of fresh cement pastes",
    authors: "Yanrong Zhang, et al.",
    journal: "Construction and Building Materials",
    year: 2017,
    doi: "10.1016/j.conbuildmat.2017.08.087",
    url: "https://doi.org/10.1016/j.conbuildmat.2017.08.087",
    tags: ["superplasticizers", "microstructure", "fresh cement paste"]
  },
  {
    title: "Effect of polymer latexes with cleaned serum on the phase development of hydrating cement pastes",
    authors: "Xiangming Kong*, Joachim Pakusch, et al.",
    journal: "Cement and Concrete Research",
    year: 2016,
    doi: "10.1016/j.cemconres.2016.02.013",
    url: "https://doi.org/10.1016/j.cemconres.2016.02.013",
    tags: ["polymer latexes", "phase development", "hydration"]
  },
  {
    title: "Correlations of the dispersing capability of NSF type and PCE type superplasticizers and their impacts on cement hydration with the adsorption in fresh cement pastes",
    authors: "Zhang Yanrong, Kong Xiangming",
    journal: "Cement and Concrete Research",
    year: 2015,
    doi: "10.1016/j.cemconres.2014.11.009",
    url: "https://doi.org/10.1016/j.cemconres.2014.11.009",
    tags: ["superplasticizers", "adsorption", "cement hydration"]
  },
  {
    title: "Retardation effect of styrene-acrylate copolymer latexes on cement hydration",
    authors: "Xiangming Kong*, Sebastian Emmerling, Joachim Pakusch, Markus Rueckel, Jorg Nieberle",
    journal: "Cement and Concrete Research",
    year: 2015,
    doi: "10.1016/j.cemconres.2015.04.014",
    url: "https://doi.org/10.1016/j.cemconres.2015.04.014",
    tags: ["polymer latexes", "retardation", "cement hydration"]
  }
];
