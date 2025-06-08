import React, { useState } from "react";
import "../../../css/ScrumPopup.css"; // CSS separado para estilo

const ScrumPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{ fontSize: "0.9em" }}
        className="open-btn"
        onClick={() => setIsOpen(true)}>
        Scrum
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <div className="popup-scroll">
              <h1>Scrum</h1>
              <p>
                O Scrum é como um manual de instruções simples para equipes que
                trabalham em projetos complicados, especialmente aqueles em que
                as coisas podem mudar ao longo do caminho.
              </p>
              <p>
                Ele ajuda a equipe a se organizar, entregar valor aos poucos e
                se adaptar às novidades.
              </p>
              <p>
                Imagine o Scrum como um jogo com algumas regras e peças
                principais:
              </p>
              <h3>Os Jogadores (A Equipe Scrum):</h3>
              <ul>
                <li>
                  <strong>Dono do Produto (Product Owner):</strong> Decide o que
                  precisa ser feito para que o produto tenha o máximo de valor
                  para o cliente. É a voz do cliente.
                </li>
                <li>
                  <strong>Scrum Master:</strong> Ajuda a equipe a entender e
                  usar o Scrum corretamente, como um técnico que garante que o
                  time jogue bem e remove obstáculos.
                </li>
                <li>
                  <strong>Desenvolvedores:</strong> São as pessoas que realmente
                  constroem o produto (engenheiros, designers, testadores,
                  etc.). Eles decidem como fazer o trabalho.
                </li>
              </ul>

              <h3>O Ritmo do Jogo (Eventos Scrum):</h3>
              <ul>
                <li>
                  <strong>Sprint:</strong> Um ciclo de trabalho curto (1 a 4
                  semanas) com foco em entregar uma parte funcional do produto.
                </li>
                <li>
                  <strong>Planejamento da Sprint:</strong> No início, a equipe
                  decide o que será feito e como.
                </li>
                <li>
                  <strong>Reunião Diária:</strong> Encontro rápido (15 min) para
                  sincronização e identificação de impedimentos.
                </li>
                <li>
                  <strong>Revisão da Sprint:</strong> Ao final, a equipe
                  apresenta o que foi feito e colhe feedback.
                </li>
                <li>
                  <strong>Retrospectiva da Sprint:</strong> Reflete sobre o que
                  deu certo e o que pode melhorar.
                </li>
              </ul>

              <h3>As Ferramentas do Jogo (Artefatos Scrum):</h3>
              <ul>
                <li>
                  <strong>Product Backlog:</strong> Lista priorizada de tudo que
                  é desejado no produto.
                </li>
                <li>
                  <strong>Sprint Backlog:</strong> Lista de tarefas para a
                  Sprint atual.
                </li>
                <li>
                  <strong>Incremento:</strong> Parte funcional entregue ao final
                  da Sprint.
                </li>
              </ul>

              <h3>Princípios Fundamentais:</h3>
              <ul>
                <li>
                  <strong>Transparência:</strong> Todos têm visibilidade do que
                  acontece.
                </li>
                <li>
                  <strong>Inspeção:</strong> Trabalho e progresso são
                  verificados com frequência.
                </li>
                <li>
                  <strong>Adaptação:</strong> Planos são ajustados com base no
                  aprendizado.
                </li>
              </ul>

              <p>
                O objetivo do Scrum é entregar valor de forma rápida e contínua,
                mantendo qualidade, adaptando-se às mudanças e melhorando
                sempre.
              </p>

              <p>
                Em resumo, o Scrum é uma maneira de organizar o trabalho em
                equipe, garantindo que todos saibam o que fazer, quando fazer e
                como fazer, enquanto se adaptam às mudanças e melhoram a cada
                passo.
              </p>
              <a
                href="https://www.scrum.org/"
                style={{ textDecoration: "underline", color: "#007bff" }}
                target="_blank">
                Site oficial do Scrum
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrumPopup;
