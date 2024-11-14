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
    aid: number
    view: number
    danmaku: number
    reply: number
    favorite: number
    coin: number
    share: number
    now_rank: number
    his_rank: number
    like: number
    dislike: number
    vt: number
    vv: number
}

export interface Owner {
    mid: number
    name: string
    face: string
}

export interface Dimension {
    width: number
    height: number
    rotate: number
}

export interface VideoRelated {
    aid: number
    videos: number
    tid: number
    tname: string
    copyright: number
    pic: string
    title: string
    pubdate: number
    ctime: number
    desc: string
    state: number
    duration: number
    mission_id: number
    rights: Rights
    owner: Owner
    stat: Stat
    dynamic: string
    cid: number
    dimension: Dimension
    season_id: number
    short_link_v2: string
    first_frame: string
    pub_location: string
    cover43: string
    bvid: string
    season_type: number
    is_ogv: boolean
    ogv_info: any
    rcmd_reason: string
    enable_vt: number
    ai_rcmd: any
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
    honor_reply: Honor
    rights: Rights
    is_chargeable_season: boolean
    is_story: boolean
    is_upower_exclusive: boolean
    is_upower_play: boolean
    is_upower_preview: boolean
    argue_info: {
        argue_link: string
        argue_msg: string
        argue_type: number
    }
}

export interface Honor {
    honor: [
        {
            aid: number
            type: number
            desc: string
            weekly_recommend_num: number
        }
    ]
}

export interface Rights {
    bp: number
    elec: number
    download: number
    movie: number
    pay: number
    hd5: number
    no_reprint: number
    autoplay: number
    ugc_pay: number
    is_cooperation: number
    ugc_pay_preview: number
    no_background: number
    clean_mode: number
    is_stein_gate: number
    is_360: number
    no_share: number
    arc_pay: number
    free_watch: number
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

export interface VideoPlayConfig {
    aid: number
    bvid: string
    allow_bp: boolean
    no_share: boolean
    cid: number
    max_limit: number
    page_no: number
    has_next: boolean
    ip_info: IpInfo
    login_mid: number
    login_mid_hash: string
    is_owner: boolean
    name: string
    permission: string
    level_info: LevelInfo
    vip: Vip
    answer_status: number
    block_time: number
    role: string
    last_play_time: number
    last_play_cid: number
    now_time: number
    online_count: number
    need_login_subtitle: boolean
    subtitle: Subtitle
    view_points: any[]
    preview_toast: string
    options: Options
    guide_attention: any[]
    jump_card: any[]
    operation_card: any[]
    online_switch: OnlineSwitch
    fawkes: Fawkes
    show_switch: ShowSwitch
    bgm_info: BgmInfo
    toast_block: boolean
    is_upower_exclusive: boolean
    is_upower_play: boolean
    is_ugc_pay_preview: boolean
    elec_high_level: ElecHighLevel
    disable_show_up_info: boolean
}

export interface IpInfo {
    ip: string
    zone_ip: string
    zone_id: number
    country: string
    province: string
    city: string
}

export interface LevelInfo {
    current_level: number
    current_min: number
    current_exp: number
    next_exp: number
    level_up: number
}

export interface Vip {
    type: number
    status: number
    due_date: number
    vip_pay_type: number
    theme_type: number
    label: Label
    avatar_subscript: number
    nickname_color: string
    role: number
    avatar_subscript_url: string
    tv_vip_status: number
    tv_vip_pay_type: number
    tv_due_date: number
    avatar_icon: AvatarIcon
}

export interface Label {
    path: string
    text: string
    label_theme: string
    text_color: string
    bg_style: number
    bg_color: string
    border_color: string
    use_img_label: boolean
    img_label_uri_hans: string
    img_label_uri_hant: string
    img_label_uri_hans_static: string
    img_label_uri_hant_static: string
}

export interface AvatarIcon {
    icon_resource: IconResource
}

export interface IconResource {
}

export interface Subtitle {
    allow_submit: boolean
    lan: string
    lan_doc: string
    subtitles: any[]
}

export interface Options {
    is_360: boolean
    without_vip: boolean
}

export interface OnlineSwitch {
    enable_gray_dash_playback: string
    new_broadcast: string
    realtime_dm: string
    subtitle_submit_switch: string
}

export interface Fawkes {
    config_version: number
    ff_version: number
}

export interface ShowSwitch {
    long_progress: boolean
}

export interface BgmInfo {
    music_id: string
    music_title: string
    jump_url: string
}

export interface ElecHighLevel {
    privilege_type: number
    title: string
    sub_title: string
    show_button: boolean
    button_text: string
    jump_url: string
    intro: string
    new: boolean
}
