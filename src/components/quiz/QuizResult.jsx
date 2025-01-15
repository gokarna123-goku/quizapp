import React from "react";

const QuizResult = ({
    questions,
    selectedAnswers,
    correctAnswers,
    incorrectAnswers,
}) => {

    const notAttempted = questions
        .map((_, i) => (selectedAnswers[i] ? null : i + 1))
        .filter((q) => q !== null);


    // If the correct answers is equal to the length of the questions, then show the message "Congratulations! You got all the answers correct."
    const showMessage = correctAnswers.length === questions.length;

    if (showMessage) {
        return (
            <div className="w-full h-screen py-10 flex items-center justify-center text-neutral-100 z-20">
                <p className="text-green-600 font-bold text-2xl">Congratulations! You got all the answers correct.</p>
            </div>
        );
    }

    return (
        <div className="w-full h-screen py-10 flex items-center justify-center text-neutral-100 z-20">
            <div className="w-[80%] h-full flex justify-center flex-col space-y-3 p-4 bg-neutral-600/20 border border-neutral-100/20 backdrop-blur rounded-xl overflow-hidden">
                <h1 className="text-2xl font-bold">Quiz Results
                    {/* {showMessage && "Congratulations! You got all the answers correct."} */}
                </h1>
                <div className="w-full flex items-center gap-6 border-b pb-4 border-neutral-100/20">
                    <h2 className="text-lg font-bold tracking-wider">Quiz Summary:-</h2>
                    <p className="flex items-center my-0 gap-x-2 bg-green-700 px-3 pb-0.5 rounded-lg">
                        Total Correct:  <span className="font-bold">{correctAnswers.length}</span>
                    </p>
                    <p className="flex items-center my-0 gap-x-2 bg-red-700 px-3 pb-0.5 rounded-lg">
                        Total Incorrect:  <span className="font-bold">{incorrectAnswers.length}</span>
                    </p>
                    <p>
                        {notAttempted.length > 0 && <p className="flex items-center my-0 gap-x-2 bg-red-800/60 px-3 pb-0.5 rounded-lg">
                            Not Attempted: <span className="font-bold">{notAttempted.length}</span>
                        </p>}
                    </p>
                    <p>
                        {notAttempted.length > 0 && <p className="flex items-center my-0 gap-x-2 bg-neutral-800/60 px-3 pb-0.5 rounded-lg">
                            Not Attempted: <span className="font-bold">{notAttempted.join(", ")}</span>
                        </p>}
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-4">
                    <h2 className="text-lg font-bold mb-2">Review Questions:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {questions.map((q, i) => (
                            <div key={i} className="w-full p-4 space-y-2 rounded-xl bg-neutral-700/5 border border-neutral-100/30">
                                <p>
                                    <span className="font-bold">Q{i + 1}:</span> <span dangerouslySetInnerHTML={{ __html: q.question }}>
                                    </span>
                                </p>
                                <p>
                                    <span className="font-bold">Your Answer:</span> <span dangerouslySetInnerHTML={{ __html: selectedAnswers[i] || "Not Attempted" }}>
                                    </span>
                                </p>
                                <p>
                                    <span className="font-bold">Correct Answer:</span> <span dangerouslySetInnerHTML={{ __html: q.correct_answer }}>
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizResult;
