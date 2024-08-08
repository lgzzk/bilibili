import httpApi from "@/utils/request";

export interface SwipeItem {
    id: number
    name: string
    pic: string
    url: string
    color: string
    server_type: number
}

export async function getRecommendSwipe() {
    let swipes: SwipeItem[] = (await httpApi('api/x/web-show/res/locs', {
        pf: 0,
        ids: 4694
    })).data[4694]
    for (const i of swipes) {
        i.color = (await httpApi(`${i.pic}@.avg_color`))['RGB']
    }
    return swipes
}