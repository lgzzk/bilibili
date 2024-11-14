import httpApi from "@/utils/request";
import {HeaderBarItem, LayerItem} from "@/api/types/header.ts";


export async function getHeaderBar(): Promise<HeaderBarItem[]> {
    let respData: Record<string, any[]> = (await httpApi('/api/x/web-show/wbi/res/locs?pf=0&ids=2837,2836,2870,2953,2954,2955,2956,5672'))
        .data
    return Object.entries(respData)
        .filter(item => item[1] !== null)
        .map(item => item[1][0])
}

export async function getBannerLayer(): Promise<{ litpic: string, layers: LayerItem[], pic: string }> {
    let layer = await httpApi('/api/x/web-show/page/header?resource_id=142')
    let layers = JSON.parse(layer.data.split_layer).layers
    return {litpic: layer.data.litpic, layers, pic: layer.data.pic}
}

