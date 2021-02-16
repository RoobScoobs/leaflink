export const getUsers = async (endpoint, options) => {
    try {
        const response = options == null
            ? await fetch(endpoint)
            : await fetch(endpoint, options);
    
        const data = await response.json();

        return data;
    } catch(error) {
        throw new Error(error);
    }
};