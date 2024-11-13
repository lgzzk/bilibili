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


export async function setSourceBuffer(
    url: string,
    sourceBuffer: SourceBuffer,
    startRange: number,
    endRange: number,
    signal?: AbortSignal
) {

    try {
        let response = await httpApi(getFinalUrl(url), {
            options: {
                headers: {
                    range: `bytes=${startRange}-${endRange}`,
                },
                signal
            }
        }, true)

        if (!response) return 0

        sourceBuffer.appendBuffer(response.data)
        return parseInt(response.headers.get('content-length'))
    } catch (error: Error | any) {
        if (error.name === 'AbortError')
            return 0
        console.warn('SetSourceBuffer error:', error)
        return 0
    }
}

// async function manageBuffer(sourceBuffer: SourceBuffer, currentTime: number) {
//     if (sourceBuffer.buffered.length > 0) {
//         // 保留当前时间前后的一定范围，例如60秒
//         const safetyOffset = 60;
//         const start = sourceBuffer.buffered.start(0);
//         const removeEnd = Math.max(start, currentTime - safetyOffset);
//
//         if (removeEnd > start) {
//             await new Promise<void>((resolve) => {
//                 sourceBuffer.remove(start, removeEnd);
//                 sourceBuffer.addEventListener('updateend', () => resolve(), {once: true});
//             });
//         }
//     }
// }

export function getFinalUrl(url: string) {
    let basePath = 'https://www.lgzzk.site/stream'
    let newUrl = new URL(url)
    if (newUrl.pathname.startsWith('/v1')) {
        return newUrl.href;
    } else {
        return `${basePath}${newUrl.pathname}${newUrl.search}`;
    }
}
