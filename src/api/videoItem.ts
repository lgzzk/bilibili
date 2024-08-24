import httpApi from "@/utils/request";

export interface RecommendVideo {
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

export interface VideoView {
    bvid: string
    aid: number
    cid: number
    pic: string
    title: string
}

export interface VideoPlayer {

}

export async function getRecommendVideos(ps: number = 11): Promise<VideoItem[]> {
    return (await httpApi('/api/x/web-interface/wbi/index/top/feed/rcmd', {
        ps,
    })).data.item
}

export async function getVideoView(bvid: string): Promise<VideoView> {
    return (await httpApi('/api/x/web-interface/wbi/view', {
        bvid,
    })).data
}

export async function getVideoPlayer(video: VideoView): Promise<VideoPlayer> {
    const { bvid, cid } = video
    return (await httpApi('/api/x/player/wbi/playurl', {
        bvid,
        cid,
        qn: 80,
        fnval: 4048,
        try_look: 1,
        gaia_source: 'pre-load'
    })).data
}
