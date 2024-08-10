import httpApi from "@/utils/request";

export interface VideoItem {
    id: number
    uri: string
    title: string
    pic: string
    duration: number
    pubdate: number
    owner: {
        mid: number
        name: string
        face: string
    },
    stat: {
        view: number
        like: number
        danmaku: number
    },
    rcmd_reason: {
        content: string,
        reason_type: number
    }
}

export async function getRecommendVideo(): Promise<VideoItem[]> {
    return (await httpApi('/api/x/web-interface/wbi/index/top/feed/rcmd', {ps: 30})).data.item
}
