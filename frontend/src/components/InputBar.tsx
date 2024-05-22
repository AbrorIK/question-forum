import React, { useState } from "react";
import axios from "axios";

export function InputBar({ fetchData }: { fetchData: () => void }) {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/questions/",
        {
          title,
          text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchData();
      setSuccess("Question submitted successfully!");
      setTitle("");
      setText("");
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Response data:", error.response.data); // Log response data
        setError(`Error: ${error.response.data.detail}`);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows={5}
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
      </form>
    </div>
  );
}
