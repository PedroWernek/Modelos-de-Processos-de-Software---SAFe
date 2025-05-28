import React from "react";

import modulo2 from "../../assets/modulo2.jpg";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonGoals from "../../components/lessons/LessonGoals";
import CustomButton from "../../components/random/buttons/CustomButton";

const SAFeModule2 = () => {
  return (
    <div>
      <LessonHeader
        unit="Unidade básica 2"
        title="A Estrutura do SAFe"
        textColor="#ffffff"
        backgroundImage={modulo2}
      />

      <LessonGoals
        goals={[
          "Entender os quatro valores principais que guiam o SAFe.",
          "Conhecer as dez ideias-chave que o SAFe defende.",
          "Ver as quatro formas de usar o SAFe, dependendo do tamanho da empresa.",
          "Descobrir qual forma do SAFe pode ser a melhor para diferentes situações.",
          "Começar a entender quem faz o quê nos times do SAFe.",
        ]}
        backgroundColor="#1a2e4c"
        textColor="white"
      />

      <div className="lesson-content__content">
        <section>
          <h1>Os Quatro Valores Essenciais do SAFe</h1>
          <ul>
            <li>
              <strong>Alinhamento:</strong> Todos os times e partes da empresa
              devem trabalhar com os mesmos objetivos. O SAFe transforma a visão
              da empresa em ações concretas.
            </li>
            <li>
              <strong>Transparência:</strong> Informações claras e visíveis
              aumentam a confiança e ajudam a resolver problemas rapidamente.
            </li>
            <li>
              <strong>Qualidade em tudo:</strong> A qualidade é integrada ao
              processo desde o início até a entrega.
            </li>
            <li>
              <strong>Entregar o que foi prometido:</strong> O foco é entregar
              valor ao cliente de maneira constante e previsível.
            </li>
          </ul>
        </section>

        <section>
          <h1>As Dez Ideias-Chave (Princípios) do SAFe</h1>
          <ol>
            <li>
              Pensar no dinheiro: atrasos custam caro; é preciso entregar valor
              rapidamente.
            </li>
            <li>Ver o todo: melhorar o sistema como um todo.</li>
            <li>
              Ser flexível: adiar decisões importantes para se adaptar a
              mudanças.
            </li>
            <li>
              Fazer aos poucos e aprender rápido: testar ideias em pequenas
              partes.
            </li>
            <li>
              Testar para ver se funciona: medir com base no que está
              funcionando.
            </li>
            <li>
              Não sobrecarregar: manter o fluxo de trabalho leve e organizado.
            </li>
            <li>
              Ter ritmo e sincronia: cadência constante e trabalho sincronizado.
            </li>
            <li>Motivar as pessoas: oferecer autonomia e propósito.</li>
            <li>
              Tomar decisões no lugar certo: decisão com quem está mais próximo
              do problema.
            </li>
            <li>
              Organizar para entregar valor: estruturar a empresa para facilitar
              entregas de valor.
            </li>
          </ol>
        </section>

        <section>
          <h1>Os Níveis do SAFe</h1>
          <p>
            O SAFe organiza o trabalho em quatro níveis, como andares de um
            prédio conectados:
          </p>
          <ul>
            <li>
              <strong>Nível de Equipe:</strong> onde o trabalho é executado por
              times ágeis como Scrum.
            </li>
            <li>
              <strong>Nível de Programa (ART):</strong> vários times trabalhando
              juntos em um produto maior.
            </li>
            <li>
              <strong>Nível de Solução Grande:</strong> coordena múltiplos ARTs
              para sistemas complexos.
            </li>
            <li>
              <strong>Nível de Portfólio:</strong> define as grandes
              iniciativas, estratégia e orçamento da empresa.
            </li>
          </ul>
        </section>

        <section>
          <h1>As Quatro Formas de Usar o SAFe</h1>
          <ul>
            <li>
              <strong>Essencial SAFe:</strong> versão mais simples para 50 a 125
              pessoas em um ART.
            </li>
            <li>
              <strong>Portfolio SAFe:</strong> adiciona governança de
              investimentos e alinhamento estratégico.
            </li>
            <li>
              <strong>Large Solution SAFe:</strong> coordena vários ARTs e
              fornecedores externos.
            </li>
            <li>
              <strong>Full SAFe:</strong> uso completo em organizações muito
              grandes e complexas.
            </li>
          </ul>
        </section>

        <section>
          <h1>Quem Faz o Quê no SAFe (Visão Geral)</h1>
          <ul>
            <li>
              <strong>Release Train Engineer (RTE):</strong> organiza reuniões e
              remove obstáculos do ART.
            </li>
            <li>
              <strong>Product Management:</strong> define prioridades para
              clientes e mercado.
            </li>
            <li>
              <strong>System Architect/Engineer:</strong> cuida do design e da
              arquitetura técnica.
            </li>
            <li>
              <strong>Business Owners:</strong> garantem o valor do negócio e
              participam do planejamento.
            </li>
            <li>
              <strong>Equipes Ágeis:</strong> executam, testam e entregam as
              soluções.
            </li>
          </ul>
        </section>

        <section className="last-section">
          <h1>Resumo</h1>
          <p>
            O SAFe se baseia em quatro valores fundamentais e dez princípios que
            norteiam sua aplicação. Ele é estruturado em quatro níveis que
            facilitam a organização do trabalho e oferece diferentes
            configurações para se adaptar ao porte da empresa.
          </p>
          <p>
            Além disso, conta com papéis bem definidos que trabalham de forma
            integrada para entregar valor de forma contínua e eficiente.
          </p>
        </section>
      </div>

      <div className="gotoQuestions">
        <h2 className="text-4">Vamos colocar em prática?</h2>
        <p>
          No próximo módulo, você verá como o SAFe funciona na prática, com
          reuniões, papéis e o uso de DevOps para entregas contínuas.
        </p>
        <CustomButton
          backgroundColor="#3ac7a6"
          borderColor="#1c1f2c"
          borderTickness="2px"
          textColor="#1c1f2c"
          text="Próximo Módulo"
          linkNav="/modulos/teoria/basico/3"
          height="2dvw"
          width="10dvh"
        />
      </div>
    </div>
  );
};

export default SAFeModule2;
