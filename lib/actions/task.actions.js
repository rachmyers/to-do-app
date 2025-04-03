"use server";

export const getAllTasks = async () => {
    try {
        const response = await fetch('http://localhost:7293/api/todoitems', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error; // Re-throw the error to handle it where the function is called
    }
};