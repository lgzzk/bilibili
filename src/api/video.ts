import httpApi from "@/utils/request";
import {RecommendVideo, VideoPlayer, VideoRelated, VideoView} from "@/api/types/video.ts";


export async function getRecommendVideos(ps: number = 11): Promise<RecommendVideo[]> {
    return (await httpApi('/api/x/web-interface/wbi/index/top/feed/rcmd', {
        params: {ps}
    })).data.item
}

export async function getVideoView(bvid: string): Promise<VideoView> {
    return (await httpApi('/api/x/web-interface/wbi/view', {
        params: {bvid},
    })).data
}

export async function getVideoPlayer(video: VideoView): Promise<VideoPlayer> {
    const {bvid, cid} = video
    return (await httpApi('/api/x/player/wbi/playurl', {
        params: {
            bvid,
            cid,
            qn: 80,
            fnval: 4048,
            try_look: 1,
            gaia_source: 'pre-load'
        }
    })).data
}

export async function getVideoRelated(bvid: string): Promise<VideoRelated[]> {
    return (await httpApi('/api/x/web-interface/archive/related', {
        params: {bvid}
    })).data
}
