import "../../css/SAFeGuide.css";
import WhatIsSAFe from "../SAFeGuide content/WhatIsSAFe";
import SAFeStructure from "../SAFeGuide content/SAFeStructure";
import SAFeFundamentalPrincipes from "../SAFeGuide content/SAFeFundamentalPrincipes";
import SAFeCentralValues from "../SAFeGuide content/SAFeCentralValues";
import SAFeBenefits from "../SAFeGuide content/SAFeBenefits";
import CustomButton from "../../components/buttons/CustomButton";
import Carrousel from "../../components/carousels/Carrousel";

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
        <Carrousel Componentes={basicSAFe} />
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
