import React from "react";

const QuizQuestion = ({ question, index, handleAnswer, selectedAnswer }) => {
    return (
        <div className="p-4 text-neutral-100">
            <h2 className="text-lg font-bold mb-4">
                Q{index + 1}: {question.question}
            </h2>
            {question.answers.map((answer, i) => (
                <label
                    key={i}
                    className={`block h-11 p-3 rounded-lg ${selectedAnswer === answer ? "bg-neutral-400/20" : ""
                        } hover:bg-neutral-400/20`}
                >
                    <input
                        type="radio"
                        name={`question-${index}`}
                        value={answer}
                        className="mr-2 w-4 h-4 bg-transparent"
                        checked={selectedAnswer === answer}
                        onChange={() => handleAnswer(index, answer)}
                    />
                    <span>{answer}</span>
                </label>
            ))}
        </div>
    );
};

export default QuizQuestion;
