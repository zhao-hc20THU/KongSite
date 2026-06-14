export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  tags: string[];
  editorNote?: string;
};

export const publications: Publication[] = [
  {
    title: "Formation of synthetic C-S-H in the presence of triethanolamine and/or polycarboxylate polymers",
    authors: "Jian Wang, Xiangming Kong*, et al.",
    journal: "Construction and Building Materials",
    year: 2024,
    tags: ["C-S-H", "alkanolamines", "polycarboxylate polymers"],
    editorNote: "Source: provided PPT slide text. DOI/pages need confirmation."
  },
  {
    title: "Correlation between the adsorption behavior of colloidal polymer particles and the yield stress of fresh cement pastes",
    authors: "Chaoyang Zhang, et al.",
    journal: "Cement and Concrete Research",
    year: 2022,
    tags: ["rheology", "polymer latex", "cement paste"],
    editorNote: "Source: provided PPT slide text. DOI/pages need confirmation."
  },
  {
    title: "Impacts of two alkanolamines on crystallization and morphology of calcium hydroxide",
    authors: "Jian Wang, Xiangming Kong*, et al.",
    journal: "Cement and Concrete Research",
    year: 2020,
    tags: ["alkanolamines", "Ca(OH)2", "hydration regulation"],
    editorNote: "Source: provided PPT slide text. DOI/pages need confirmation."
  },
  {
    title: "Correlations of the dispersing capability of NSF type and PCE type superplasticizers and their impacts on cement hydration with the adsorption in fresh cement pastes",
    authors: "Zhang Yanrong, Kong Xiangming",
    journal: "Cement and Concrete Research",
    year: 2015,
    tags: ["superplasticizers", "adsorption", "cement hydration"],
    editorNote: "Source: provided PPT slide text. DOI/pages need confirmation."
  }
];
