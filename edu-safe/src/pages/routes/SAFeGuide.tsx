import "../../css/SAFeGuide.css";
import WhatIsSAFe from "../SAFeGuideContent/WhatIsSAFe";
import SAFeStructure from "../SAFeGuideContent/SAFeStructure";
import SAFeFundamentalPrincipes from "../SAFeGuideContent/SAFeFundamentalPrincipes";
import SAFeCentralValues from "../SAFeGuideContent/SAFeCentralValues";
import SAFeBenefits from "../SAFeGuideContent/SAFeBenefits";
import CustomButton from "../../components/buttons/CustomButton";
import Carousel from "../../components/carousels/Carousel";

const basicSAFe = [
  () => <WhatIsSAFe />,
  () => <SAFeStructure />,
  () => <SAFeFundamentalPrincipes />,
  () => <SAFeCentralValues />,
  () => <SAFeBenefits />,
];

const SafeGuide = () => {
  return (
    <div className="safe-guide">
      <div className="safe-guide__container__content">
        <Carousel Componentes={basicSAFe} />
        <div className="goToModules">
          <p>
            Gostou do nosso conteúdo e deseja uma explicação mais detalhada da
            metodologia SAFe? <br />
            Então faça seu registro agora mesmo e tenha acesso a um conteúdo
            exclusivo e gratuito!
          </p>
          <CustomButton
            backgroundColor="#3ac7a6"
            borderColor="#1c1f2c"
            borderThickness="2px"
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
