import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

interface Flashcard {
  id?: number;
  lessonId: number;
  name: string;
  description: string;
}

export function ListFlashcard() {
  const [flashCards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    api
      .get("/api/flash-cards")
      .then((resposta) => {
        setFlashcards(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar flashcards", erro);
      });
  }, []);

  function deletar(id: number) {
    api
      .delete(`/api/flash-cards/${id}`)
      .then((resposta) => {
        console.log("Flash card deletado:", resposta.data);
        alert("Flash card deletado!");
        setFlashcards(flashCards.filter((flashcard) => flashcard.id !== id));
      })
      .catch((erro) => {
        console.error("Erro ao deletar Flash card!", erro);
      });
  }

  return (
    <div
      style={{ backgroundColor: "lightblue", padding: "20px", color: "black" }}>
      <h1>Listar Flash Card</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Lesson ID</th>
            <th>Descrição</th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {flashCards.map((flashCard) => (
            <tr key={flashCard.id}>
              <td>{flashCard.name}</td>
              <td>{flashCard.lessonId}</td>
              <td>{flashCard.description}</td>
              <td>
                <button onClick={() => deletar(flashCard.id!)}>Deletar</button>
              </td>
              <td>
                <Link to={`/flash-cards/${flashCard.id}`} className="btn-link">
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
