export async function fetchInteractiveStories() {
  const res = await fetch("/api/quizzes/i-stories");
  return res.json();
}

export async function fetchQuizById(id: any) {
  const res = await fetch(`/api/quizzes/${id}`);
  return res.json();
}

export async function submitQuizAnswers(id: any, answers: any, userId: any) {
  const res = await fetch(`/api/quizzes/${id}/submit?userId=${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answers),
  });
  return res.json();
}
