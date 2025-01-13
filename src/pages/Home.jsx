import React, { useState } from "react";
import Quiz from "./Quiz";
import QuizOptions from "../components/quiz/QuizOptions";

import { fetchQuiz } from "../api/quizApi";

const Home = () => {
    const [quizData, setQuizData] = useState(null);

    const startQuiz = async (options) => {
        const data = await fetchQuiz(
            options.category,
            options.difficulty,
            options.type,
            options.amount
        );
        const formattedData = data.map((q) => ({
            ...q,
            answers: [...q.incorrect_answers, q.correct_answer].sort(),
        }));
        setQuizData(formattedData);
    };

    return (
        <div className="w-full flex-1 flex items-center justify-center">
            {!quizData ? (
                <QuizOptions startQuiz={startQuiz} />
            ) : (
                <Quiz questions={quizData} />
            )}
        </div>
    );
};

export default Home;
