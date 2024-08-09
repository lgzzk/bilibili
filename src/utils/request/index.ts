const httpApi = async (url: RequestInfo | URL, params: Record<string, any> = {}, options: RequestInit = {}) => {
    try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${queryString}`, {referrerPolicy: 'no-referrer', ...options});

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            const textData = await response.text();
            return JSON.parse(textData);
        }
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
};

export function setCookie() {
    document.cookie = 'buvid3=6EEA3187-0C6D-37FB-91C5-ACF59BF7FED518835infoc;'
}

export default httpApi;
