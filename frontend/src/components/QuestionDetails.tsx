import { Answer } from "../types/Answer";
import { Question } from "../types/Question";
import { InputBar } from "./InputBar";

interface Props {
  question: Question;
  fetchData: () => void;
}

export function QuestionDetails({ question, fetchData }: Props) {
  return (
    <div
      id="page-content-wrapper"
      style={{ width: "100%", padding: "0px 100px" }}
    >
      <div className="container-fluid">
        <h1 className="mt-4">{question?.title}</h1>
        <p>{question?.text}</p>
        <p>{question?.date}</p>
      </div>
      <div className="list-group">
        {question?.answers?.map((answer: Answer) => (
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <small>{answer.date}</small>
            </div>
            <p className="mb-1">{answer.text}</p>
          </a>
        ))}
      </div>
      {!question && <InputBar fetchData={fetchData} />}
    </div>
  );
}
