import httpApi from "@/utils/request";
import {LiveRoomInfo} from "@/api/types/live.ts";


export async function getLiveRoomInfo(mid: number): Promise<LiveRoomInfo> {
    return (await httpApi('/live/xlive/web-room/v1/index/getRoomBaseInfo',
        {
            params: {
                uids: mid,
                req_biz: 'video'
            }
        })).data
}
