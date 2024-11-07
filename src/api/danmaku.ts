import {Root} from 'protobufjs'
import httpApi from "@/utils/request";
import {VideoView} from "@/api/video.ts";

// 定义弹幕消息接口
interface IDanmakuElem {
    id: number
    progress: number
    mode: number
    fontsize: number
    color: number
    midHash: string
    content: string
    ctime: string
    weight: number
    action: string
    pool: number
    idStr: string
    attr: number
}

export interface SimpleDanmaku {
    content: string   // 显示内容
    time: number      // 出现时间
    ctime: string
    color: number     // 颜色
    type: number      // 类型
}

// 使用protobuf
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

    return (message.toJSON().elems as IDanmakuElem[]).map(elem => ({
        content: elem.content,
        time: elem.progress,
        color: elem.color,
        type: elem.mode,
        ctime: elem.ctime
    }))
}
