import { Answer } from "../types/Answer";
import { Question } from "../types/Question";

interface Props {
  question: Question;
}

export function QuestionDetails({ question }: Props) {
  console.log(question.answers);
  return (
    <div id="page-content-wrapper">
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
    </div>
  );
}
