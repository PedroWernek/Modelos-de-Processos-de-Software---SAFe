import FlashCardCarousel from "../../components/flashcards/GetFlashcard";
import { useParams } from "react-router-dom";
import CustomButton from "../../components/random/buttons/CustomButton";

const FlashCard = () => {
  const { id } = useParams<{ id?: string }>();
  const parsedLessonId = id ? Number(id) : undefined;
  window.scrollTo(0, 0);

  return (
    <div className="error-page" style={{ height: "110dvh" }}>
      {parsedLessonId !== undefined ? (
        <FlashCardCarousel lessonId={parsedLessonId} />
      ) : (
        <div>Invalid lesson ID</div>
      )}
      <div>
        <CustomButton
          backgroundColor="#7de2d1"
          textColor="#131515"
          text="Voltar aos Módulos"
          linkNav={
            localStorage.getItem("token") != null ? "/modulos" : "/autenticar"
          }
        />
      </div>
    </div>
  );
};

export default FlashCard;
