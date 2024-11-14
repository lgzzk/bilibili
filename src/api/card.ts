import httpApi from "@/utils/request";
import {UpCard} from "@/api/types/card.ts";

export async function getUpCard(mid: number): Promise<UpCard> {
    return (await httpApi('/api/x/web-interface/card', {
        params: {mid, photo: 1}
    })).data
}
