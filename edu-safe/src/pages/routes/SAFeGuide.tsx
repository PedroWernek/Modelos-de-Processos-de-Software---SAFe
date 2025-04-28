import "../../css/SAFeGuide.css";
import WhatIsSAFe from "../SAFeGuide content/WhatIsSAFe";
import SAFeStructure from "../SAFeGuide content/SAFeStructure";
import SAFeFundamentalPrincipes from "../SAFeGuide content/SAFeFundamentalPrincipes";
import SAFeCentralValues from "../SAFeGuide content/SAFeCentralValues";
import SAFeBenefits from "../SAFeGuide content/SAFeBenefits";
import CustomButton from "../../components/buttons/CustomButton";

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

      <div className="safe-guide__container__content">
        <div id="o-que-e-safe">
          <WhatIsSAFe />
        </div>
        <div id="estrutura-do-safe">
          <SAFeStructure />
        </div>
        <div id="principios-fundamentais">
          <SAFeFundamentalPrincipes />
        </div>
        <div id="valores-centrais">
          <SAFeCentralValues />
        </div>
        <div id="beneficios">
          <SAFeBenefits />
        </div>

        <div className="gotoModules">
          <p>
            Gostou do nosso conteúdo e deseja uma explicação mais detalhada da
            metodologia SAFe? <br />
            Então faça seu registro agora mesmo e tenha acesso a um conteúdo
            exclusivo e gratuito!
          </p>
          <CustomButton
            backgroundColor="#3ac7a6"
            borderColor="#1c1f2c"
            borderTickness="2px"
            textColor="#1c1f2c"
            text="Veja Nossos Módulos"
            link="/modulos"
          />
        </div>
      </div>
    </div>
  );
};

export default SafeGuide;
