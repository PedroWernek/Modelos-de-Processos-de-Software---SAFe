import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

export function EditFlashcard() {
  interface Flashcard {
    id?: number;
    lessonId: number;
    name: string;
    description: string;
  }

  function EditFlashcard() {
    const { id } = useParams();
    const [flashcard, setFlashcard] = useState<Flashcard | null>(null);
    const [name, setNome] = useState("");
    const [lessonId, setlessonId] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
      if (id) {
        api
          .get<Flashcard>(`/api/flash-cards/${id}`)
          .then((resposta) => {
            const flashcardData = resposta.data;
            setFlashcard(flashcardData);
            setNome(flashcardData.name);
            setlessonId(flashcardData.lessonId);
            setDescription(flashcardData.description);
          })
          .catch((erro) => {
            console.error("Erro ao buscar flashcard!", erro);
          });
      }
    }, [id]);

    function sendFlashcard(e: any) {
      e.preventDefault();

      const flashcardData: Flashcard = {
        id: Number(id),
        lessonId: Number(lessonId),
        name,
        description,
      };

      axios
        .put(`/api/flash-cards/${id}`, flashcardData)
        .then((resposta) => {
          console.log("Flashcard atualizado", resposta.data);
          alert("Flashcard atualizado!!!");
        })
        .catch((erro) => {
          console.error("Erro ao atualizar flashcard", erro);
        });
    }

    if (!flashcard) return <div>Carregando...</div>;

    return (
      <div className="form-container">
        <div className="form-header">
          <h2>Editar flashcard</h2>
        </div>
        <form onSubmit={sendFlashcard}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={name}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lessonId">Lesson Id</label>
            <input
              type="text"
              id="lessonId"
              value={lessonId}
              onChange={(e) => setlessonId(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    );
  }
}
