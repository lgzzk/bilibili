export interface UpCard {
    card: Card
    space: Space
    following: boolean
    archive_count: number
    article_count: number
    follower: number
    like_num: number
}

export interface Card {
    mid: string
    name: string
    approve: boolean
    sex: string
    rank: string
    face: string
    face_nft: number
    face_nft_type: number
    DisplayRank: string
    regtime: number
    spacesta: number
    birthday: string
    place: string
    description: string
    article: number
    attentions: any[]
    fans: number
    friend: number
    attention: number
    sign: string
    level_info: LevelInfo
    pendant: Pendant
    nameplate: Nameplate
    Official: Official
    official_verify: OfficialVerify
    vip: Vip
    is_senior_member: number
    name_render: any
}

export interface LevelInfo {
    current_level: number
    current_min: number
    current_exp: number
    next_exp: number
}

export interface Pendant {
    pid: number
    name: string
    image: string
    expire: number
    image_enhance: string
    image_enhance_frame: string
    n_pid: number
}

export interface Nameplate {
    nid: number
    name: string
    image: string
    image_small: string
    level: string
    condition: string
}

export interface Official {
    role: number
    title: string
    desc: string
    type: number
}

export interface OfficialVerify {
    type: number
    desc: string
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
    vipType: number
    vipStatus: number
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
    icon_type: number
    icon_resource: IconResource
}

export interface IconResource {
}

export interface Space {
    s_img: string
    l_img: string
}
