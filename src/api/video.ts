import httpApi from "@/utils/request";

export interface VideoItem {
    id: number
    cid: number
    bvid: string
    uri: string
    title: string
    pic: string
    goto: string
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

export async function getRecommendVideo(ps: number = 11): Promise<VideoItem[]> {
    return (await httpApi('/api/x/web-interface/wbi/index/top/feed/rcmd', {
        ps,
    })).data.item
}
