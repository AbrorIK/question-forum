import { useState } from "react";
import { Question } from "./QuestionForum";

interface Props {
  questions: Question[];
  handleQuestion: (item: Question) => void;
}

export function Sidebar({ questions, handleQuestion }: Props) {
  const [selected, setSelected] = useState(-1);
  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary"
      style={{ width: "380px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom"
      >
        <img
          src="../../vite.svg" // Use the imported logo as the src
          alt="Vite Logo" // Provide alt text for accessibility
          className="bi me-2" // Apply any additional classes if needed
          width="30" // Set the width as needed
          height="24" // Set the height as needed
          role="img" // Set the role as needed
          aria-label="Vite" // Provide an aria-label if necessary
        />
        <span className="fs-5 fw-semibold">Questions</span>
      </a>

      <div className="list-group list-group-flush border-bottom scrollarea">
        {questions.map((question: Question, index: number) => (
          <a
            href="#"
            className={
              selected === index
                ? "list-group-item list-group-item-action active py-3 lh-sm"
                : "list-group-item list-group-item-action py-3 lh-sm"
            }
            aria-current={selected === index ? "true" : "false"}
            onClick={() => {
              setSelected(index), handleQuestion(question);
            }}
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{question.title}</strong>
              <small>{question.date}</small>
            </div>
            <div className="col-10 mb-1 small">{question.text}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
