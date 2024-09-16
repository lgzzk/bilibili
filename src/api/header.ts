import httpApi from "@/utils/request";

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

export async function getHeaderBar(): Promise<HeaderBarItem[]> {
    let respData: Record<string, any[]> = (await httpApi('/api/x/web-show/wbi/res/locs?pf=0&ids=2837,2836,2870,2953,2954,2955,2956,5672'))
        .data
    return Object.entries(respData)
        .filter(item => item[1] !== null)
        .map(item => item[1][0])
}

export async function getBannerLayer(): Promise<{ litpic: string, layers: LayerItem[] }> {
    let layer = await httpApi('/api/x/web-show/page/header?resource_id=142')
    let layers = JSON.parse(layer.data.split_layer).layers
    return {litpic: layer.data.litpic, layers}
}

