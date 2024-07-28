const httpApi = async (url:RequestInfo | URL, options:RequestInit = {}) => {
    try {
        const response = await fetch(url, {  ...options });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
};

export  default httpApi;
