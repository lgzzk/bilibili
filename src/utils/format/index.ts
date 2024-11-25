import {useDateFormat} from '@vueuse/core'

export const formatMillion = (data: number) => {
    if (data < 10000) return data
    else return (data / 10000).toFixed(1) + '万'
}

export const getPubdate = (pubdate: number) => {
    let date = new Date(pubdate * 1000)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}

export function getDuration(duration: number) {
    let hours = Math.floor(duration / 3600)
    let minutes = Math.floor((duration % 3600) / 60)
    let seconds = duration % 60
    let hoursStr = hours >= 0 && hours < 9 ? '0' + hours : hours
    let minutesStr = minutes >= 0 && minutes < 10 ? '0' + minutes : minutes
    let secondsStr = seconds >= 0 && seconds < 10 ? '0' + seconds : seconds
    if (hours > 0) return `${hoursStr}:${minutesStr}:${secondsStr}`
    else return `${minutesStr}:${secondsStr}`
}

export function formatVideoTime(ms: number): string {
    const seconds = Math.floor(ms / 1000)  // 转换毫秒为秒
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export function formatSendTime(timestamp: number): string {
    return useDateFormat(timestamp * 1000, 'MM-DD HH:mm').value
}
