import { useState } from "react";
import { useForm } from "react-hook-form";

interface Flashcard {
  id?: number;
  lessonId: number;
  name: string;
  description: string
}

export function AddFlashcard() {
 
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [name, setNome] = useState("");
  const [lessonId, setlessonId] = useState(0);
  const [description, setDescription] = useState("");

  function sendFlashcard(e: React.FormEvent) {
  e.preventDefault();

  const flashcard: Flashcard = {
    lessonId: Number(lessonId),
    name,
    description
  };

  fetch("http://localhost:5017/api/flash-cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(flashcard),
  })
  .then(async (response) => {
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erros de validação:", errorData.errors);
      alert(`Erro ao cadastrar: ${JSON.stringify(errorData.errors)}`);
      return;
    }
    return response.json();
  })
  .then((data) => {
    if (data) {
      console.log("Flashcard cadastrado:", data);
      alert("Flashcard Cadastrado");
      setNome(""); 
      setlessonId(0); 
      setDescription(""); 
    }
  })
  .catch((error) => {
    console.error("Erro ao cadastrar flashcard!", error);
    alert("Erro ao conectar com o servidor");
  });
}

  return (
    <div className="form-container" style={{color: "white"}}>
      <div className="form-header">
        <h2>Cadastro de Flashcard</h2>
      </div>
      <form onSubmit={sendFlashcard}>
        <div className="form-group">
          <label htmlFor="nome">Name</label>
          <input
            placeholder="Ex: Módulo 1 Safe"
            style={{color: "white"}}
            type="text"
            id="nome"
            value={name}
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Lesson ID</label>
          <input
            placeholder="Ex: 14"
            style={{color: "white"}}
            type="number"
            id="lessonId"
            value={lessonId}
            required
            onChange={(e) => setlessonId(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Description</label>
          <input
            placeholder="Ex: Nesta aula, vimos os quatro valores essenciais (Alinhamento, Transparência, Qualidade em tudo e Entregar o que foi prometido) e as dez ideias-chave que sustentam o SAFe"
            style={{color: "white"}}
            type="text"
            id="nome"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


