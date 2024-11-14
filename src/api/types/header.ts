export interface HeaderBarItem {
    id: number
    name: string
    pic: string
    url: string
}

export interface Banner {
    pic: string
    litpic: string
    is_split_layer: number
    split_layer: string
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
