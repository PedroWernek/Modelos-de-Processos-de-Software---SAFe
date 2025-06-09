import "../../css/SAFeGuide.css";
import WhatIsSAFe from "../SAFeGuideContent/WhatIsSAFe";
import SAFeStructure from "../SAFeGuideContent/SAFeStructure";
import SAFeFundamentalPrincipes from "../SAFeGuideContent/SAFeFundamentalPrincipes";
import SAFeCentralValues from "../SAFeGuideContent/SAFeCentralValues";
import SAFeBenefits from "../SAFeGuideContent/SAFeBenefits";
import CustomButton from "../../components/random/buttons/CustomButton";
import Carousel from "../../components/random/carousels/Carousel";

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
        <Carousel
          Componentes={basicSAFe.map((Component, idx) => (
            <Component key={idx} />
          ))}
        />
        <div className="goToModules">
          <p>
            Gostou do nosso conteúdo e deseja uma explicação mais detalhada da
            metodologia SAFe? <br />
            Então faça seu registro agora mesmo e tenha acesso a um conteúdo
            exclusivo e gratuito!
          </p>
          <CustomButton
            backgroundColor="#7de2d1"
            textColor="#131515"
            text="Veja Nossos Módulos"
            linkNav={
              localStorage.getItem("token") != null ? "/modulos" : "/autenticar"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SafeGuide;
