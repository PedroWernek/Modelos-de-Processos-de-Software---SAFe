import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from "react-router-dom";
import { color } from "framer-motion";

interface Flashcard {
  id?: number;
  lessonId: number;
  name: string;
  description: string
}


export function ListFlashcard() {
 
  const [flashCards, setFlashcards] = useState<Flashcard[]>([]);

 
  useEffect(() => {
    axios
      .get("http://localhost:5017/api/flash-cards")
      .then(resposta => {
        setFlashcards(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar flashcards", erro);
      });
  }, []); 

  function deletar(id: number) {
    axios
      .delete(`http://localhost:5017/api/flash-cards/${id}`)
      .then((resposta) => {
        console.log("Flash card deletado:", resposta.data);
        alert("Flash card deletado!")
        setFlashcards(flashCards.filter(flashcard => flashcard.id !== id));
      })
      .catch((erro) => {
        console.error("Erro ao deletar Flash card!", erro);
      });
  }

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px', color: 'black' }}>
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
          {flashCards.map(flashCard => (
            <tr key={flashCard.id}>
              <td>{flashCard.name}</td>
              <td>{flashCard.lessonId}</td>
              <td>{flashCard.description}</td>
              <td>
                <button onClick={() => deletar(flashCard.id!)}>
                  Deletar
                </button>
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

