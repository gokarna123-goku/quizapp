
// Fetch quiz data
export const fetchQuiz = async (category, difficulty, type, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            throw new Error("Failed to fetch quiz questions");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        return [];
    }

};

// Fetch categories
export const fetchCategories = async () => {
    const url = "https://opentdb.com/api_category.php";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        return data.trivia_categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};
