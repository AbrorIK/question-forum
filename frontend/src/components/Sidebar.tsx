import { useState } from "react";
import { Question } from "../types/Question";

interface Props {
  questions: Question[];
  setCurrentQuestion: (item: Question) => void;
}

export function Sidebar({ questions, setCurrentQuestion }: Props) {
  const [selected, setSelected] = useState(-1);
  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary"
      style={{ width: "380px", borderRight: "1px solid #e1e4e8" }}
    >
      <h1 className="h1 px-3 pt-3 border-bottom">Questions</h1>
      <button
        type="button"
        className="btn btn-primary mx-5 my-2"
        onClick={() => {
          setCurrentQuestion(null);
        }}
      >
        <img src="../../pencil-square.svg" alt="Button" />
        Ask a question
      </button>

      <div className="list-group list-group-flush border-bottom scrollarea">
        {questions.map((question: Question, index: number) => {
          return (
            question && (
              <a
                href="#"
                className={
                  selected === index
                    ? "list-group-item list-group-item-action active py-3 lh-sm"
                    : "list-group-item list-group-item-action py-3 lh-sm"
                }
                aria-current={selected === index ? "true" : "false"}
                onClick={() => {
                  setSelected(index), setCurrentQuestion(question);
                }}
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">{question.title}</strong>
                  <small>{question.date}</small>
                </div>
                <div className="col-10 mb-1 small">{question.text}</div>
              </a>
            )
          );
        })}
      </div>
    </div>
  );
}
