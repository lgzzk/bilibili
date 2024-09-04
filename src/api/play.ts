import httpApi from "@/utils/request";

export async function getRange(url: string): Promise<number> {
    let response = await httpApi('/range', {
        options: {
            headers: {url}
        }
    }, true)
    let maxRange = response.headers.get('Content-Range').split('/')[1]
    return parseInt(maxRange)
}


export async function setSourceBuffer(url: string, sourceBuffer: SourceBuffer,startRange:number,endRange:number) {
    let response = await httpApi(getFinalUrl(url), {
        options: {
            headers: {
                range: `bytes=${startRange}-${endRange}`,
            }
        }
    },true)
    sourceBuffer.appendBuffer(response.data)
    return parseInt(response.headers.get('content-length'))
}


function getFinalUrl(url: string) {
    let basePath = 'https://www.lgzzk.site/stream'
    let newUrl = new URL(url)
    if (newUrl.pathname.startsWith('/v1')) {
        return newUrl.href;
    } else {
        return `${basePath}${newUrl.pathname}${newUrl.search}`;
    }
}
