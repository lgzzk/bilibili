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
    owner: Owner
    stat: Stat
    rcmd_reason: {
        content: string,
        reason_type: number
    }
}

export interface Stat {
    view: number
    like: number
    danmaku: number
}

export interface Owner {
    mid: number
    name: string
    face: string
}

export interface VideoView {
    bvid: string
    aid: number
    cid: number
    pic: string
    title: string
    desc: string
    pubdate: number
    stat: Stat
    owner: Owner
    argue_info: {
        argue_link: string
        argue_msg: string
        argue_type: number
    }
}

export interface VideoPlayer {
    from: string
    result: string
    message: string
    quality: number
    format: string
    timelength: number
    accept_format: string
    accept_description: string[]
    accept_quality: number[]
    video_codecid: number
    seek_param: string
    seek_type: string
    dash: Dash
}

export interface Dash {
    duration: number
    minBufferTime: number
    min_buffer_time: number
    video: Video[]
    audio: Audio[]
    flac: any
}

export interface SegmentBase {
    Initialization: string
    indexRange: string
}

export interface Video {
    id: number
    baseUrl: string
    base_url: string
    backupUrl: string[]
    backup_url: string[]
    bandwidth: number
    mimeType: string
    mime_type: string
    codecs: string
    width: number
    height: number
    frameRate: string
    frame_rate: string
    sar: string
    startWithSap: number
    start_with_sap: number
    codecid: number
    SegmentBase: SegmentBase
}

export interface Audio {
    id: number
    baseUrl: string
    base_url: string
    backupUrl: string[]
    backup_url: string[]
    bandwidth: number
    mimeType: string
    mime_type: string
    codecs: string
    width: number
    height: number
    frameRate: string
    frame_rate: string
    sar: string
    startWithSap: number
    start_with_sap: number
    codecid: number
}

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
