export interface HeaderBarItem {
    id: number
    name: string
    pic: string
    url: string
}

export interface Header {
    name: string
    pic: string
    litpic: string
    url: string
    is_split_layer: number
    split_layer: LayerItem[]
    request_id: string
}

export interface LayerItem {
    id: number
    blur: {}
    name: string
    opacity: { wrap: string }
    resources: [{ src: string }]
    rotate: {}
    scale: { initial: number }
    translate: {
        initial: number[],
        offset: number[]
    }
}
