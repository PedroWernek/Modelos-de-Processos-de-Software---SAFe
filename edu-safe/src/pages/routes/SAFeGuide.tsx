import SAFeIntro from "../modules/SAFeIntro";
import "../../css/SAFeGuide.css";
import WhatIsSAFe from "../content/WhatIsSAFe";
import SAFeStructure from "../content/SAFeStructure";
import SAFeFundamentalPrincipes from "../content/SAFeFundamentalPrincipes";
import SAFeCentralValues from "../content/SAFeCentralValues";
import SAFeBenefits from "../content/SAFeBenefits";

const SafeGuide = () => {
  return (
    <div className="safe-guide">
      <nav className="safe-guide__container__sidebar">
        <ul className="safe-guide__container__sidebar__list">
          <li>
            <a href="#o-que-e-safe">O que é SAFe</a>
          </li>
          <li>
            <a href="#estrutura-do-safe">Estrutura do SAFe</a>
          </li>
          <li>
            <a href="#principios-fundamentais">Princípios Fundamentais</a>
          </li>
          <li>
            <a href="#valores-centrais">Valores Centrais</a>
          </li>
          <li>
            <a href="#beneficios">Benefícios do SAFe</a>
          </li>
        </ul>
      </nav>
      <div className="safe-guide__container">
        <div className="safe-guide__container__content">
          <div id="o-que-e-safe" className="o-que-e-safe">
            <WhatIsSAFe />
          </div>
          <div id="estrutura-do-safe" className="estrutura-do-safe">
            <SAFeStructure />
          </div>
          <div id="principios-fundamentais" className="principios-fundamentais">
            <SAFeFundamentalPrincipes />
          </div>
          <div id="valores-centrais" className="valores-centrais">
            <SAFeCentralValues />
          </div>
          <div id="beneficios" className="beneficios">
            <SAFeBenefits />
          </div>
          <div>
            <p>
              Gostou de nosso conteúdo e deseja ter uma explicação mais
              detalhada da metodologia SAFe? <br />
              Então faça seu registro agora mesmo e tenha acesso a um conteúdo
              exclusivo e gratuito! <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeGuide;
