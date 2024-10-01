const httpApi = async (
    url: RequestInfo | URL,
    options?: HttpApiOptions,
    includeHeaders: boolean = false
) => {
    try {
        const queryString = new URLSearchParams(options?.params).toString()
        const response = await fetch(queryString ? `${url}?${queryString}` : url, {...options?.options})
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        let data = await handleContentType(response)

        if (includeHeaders) return {data, headers: response.headers} as HttpApiResult

        return data

    } catch (err) {
        console.error('Fetch error:', err)
        throw err
    }
}

export function setCookie() {
    const expiresInSeconds = 12 * 60 * 60;
    if (!document.cookie.includes('buvid3') || !document.cookie.includes('buvid4')) {
        document.cookie = `b_nut=1723348237;path=/;max-age=${expiresInSeconds};`
        httpApi('https://api.bilibili.com/x/frontend/finger/spi').then(({data}) => {
            document.cookie = `buvid3=${data.b_3};path=/;max-age=${expiresInSeconds};`
            document.cookie = `buvid4=${data.b_4};path=/;max-age=${expiresInSeconds};`
        })
    }
}

async function handleContentType(response: Response): Promise<any> {
    const contentType = response.headers.get('Content-Type')
    if (!contentType) return JSON.parse(await response.text())

    const contentHandlers: Map<string, ContentHandler> = new Map([
        ['application/json', (response) => response.json()],
        ['application/json; charset=utf-8', (response) => response.json()],
        ['application/octet-stream', (response) => response.arrayBuffer()],
        ['video/mp4', (response) => response.arrayBuffer()],
        ['video/webm', (response) => response.blob()],
        ['text/html', (response) => response.text()],
    ]);

    if (contentHandlers.has(contentType))
        return contentHandlers.get(contentType)!(response)


    return Promise.reject(new Error('Unsupported Content-Type: ' + contentType));
}


type ContentHandler = (response: Response) => Promise<any>
type HttpApiOptions = {
    params?: Record<string, any>
    options?: RequestInit
}
type HttpApiResult = {
    data: any
    headers: Headers
}
export default httpApi
