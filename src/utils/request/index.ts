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
    const expiresInSeconds = 24 * 60 * 60;
    if (!document.cookie) {
        // document.cookie = `buvid3=076C65D9-5A16-58C2-BC36-B8F8BDD641B476644infoc;path=/;max-age=${oneYearInSeconds};`
        document.cookie = `b_nut=1723348237;path=/;max-age=${expiresInSeconds};`
        httpApi('https://api.bilibili.com/x/frontend/finger/spi').then(({data}) => {
            document.cookie = `buvid3=${data.b_3};path=/;max-age=${expiresInSeconds};`
            document.cookie = `buvid4=${data.b_4};path=/;max-age=${expiresInSeconds};`
        })
    }
}

export default httpApi;
