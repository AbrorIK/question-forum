import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { QuestionDetails } from "./QuestionDetails";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { Question } from "../types/Question";

export function QuestionForum() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get<Question[]>("/questions/"); // Ensure the type parameter
      setQuestions(response.data.reverse());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Indicates which question is selected in the sidebar
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  console.log(currentQuestion);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar questions={questions} setCurrentQuestion={setCurrentQuestion} />
      <QuestionDetails question={currentQuestion} fetchData={fetchData} />
    </div>
  );
}
