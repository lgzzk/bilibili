import {Root} from 'protobufjs'
import httpApi from "@/utils/request";
import {IDanmakuElem, SimpleDanmaku} from "@/api/types/danmaku.ts";
import {VideoView} from "@/api/types/video.ts";


const root = Root.fromJSON({
    nested: {
        DmSegMobileReply: {
            fields: {
                elems: {
                    rule: "repeated",
                    type: "DanmakuElem",
                    id: 1
                }
            }
        },
        DanmakuElem: {
            fields: {
                id: {type: "int64", id: 1},
                progress: {type: "int32", id: 2},
                mode: {type: "int32", id: 3},
                fontsize: {type: "int32", id: 4},
                color: {type: "uint32", id: 5},
                midHash: {type: "string", id: 6},
                content: {type: "string", id: 7},
                ctime: {type: "int64", id: 8},
                weight: {type: "int32", id: 9},
                action: {type: "string", id: 10},
                pool: {type: "int32", id: 11},
                idStr: {type: "string", id: 12},
                attr: {type: "int32", id: 13}
            }
        }
    }
})


export async function parseDanmaku(videoView: VideoView): Promise<SimpleDanmaku[]> {
    const buffer = await httpApi('/api/x/v2/dm/web/seg.so', {
        params: {
            type: 1,
            oid: videoView.cid,
            pid: videoView.aid,
            segment_index: 1,
        }
    })
    const DmSegMobileReply = root.lookupType('DmSegMobileReply')
    const message = DmSegMobileReply.decode(new Uint8Array(buffer))
    const elems: IDanmakuElem[] = message.toJSON().elems

    if (!elems) return []

    return elems.map(elem => ({
        content: elem.content,
        time: elem.progress,
        color: elem.color,
        type: elem.mode,
        ctime: elem.ctime
    }))
}
