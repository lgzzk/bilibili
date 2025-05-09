import httpApi from "@/utils/request";
import type {OnlineTotal, RecommendVideo, VideoPlayConfig, VideoPlayer, VideoRelated, VideoView} from "@/api/types/video";


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

export async function getVideoPlayConfig(video: VideoView): Promise<VideoPlayConfig> {
    const {cid, aid} = video
    return (await httpApi('/api/x/player/wbi/v2', {
        params: {aid, cid}
    })).data
}

export async function getOnlineTotal(video: VideoView): Promise<OnlineTotal> {
    return (await httpApi('/api/x/player/online/total', {
        params: {aid: video.aid, cid: video.cid}
    })).data
}
