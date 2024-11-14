import httpApi from "@/utils/request";
import {SwipeItem} from "@/api/types/swiper.ts";


export async function getRecommendSwipe(): Promise<SwipeItem[]> {
    return (await httpApi('/api/x/web-show/res/locs', {
        params: {pf: 0, ids: 4694}
    })).data[4694]
}

export async function setSwipeColor(swipes: SwipeItem[]) {
    for (const i of swipes) {
        i.color = (await httpApi(
                `${i.pic}@.avg_color`.startsWith('http://')
                    ? `https://${i.pic.slice(7)}@.avg_color`
                    : `${i.pic}@.avg_color`, {
                    options: {referrerPolicy: 'no-referrer'}
                })
        )['RGB']
    }
}
