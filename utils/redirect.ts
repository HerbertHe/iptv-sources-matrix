// import fs from "fs"
// import path from "path"
import axios from "axios"

import { matrix_urls } from "./const.js"

// const records_p = path.resolve("records")

// interface ITargetRecord {
//     url: string
//     updated_at: number
// }

// 转发策略
const matrix_speed_test = async () => {
    try {
        const url = await Promise.any(
            matrix_urls.map(async (u) =>
                axios.get(`${u}/channels.json`).then(() => u)
            )
        )

        return url
    } catch (e) {
        // 全挂摆烂兜底
        return "https://m3u.ibert.me"
    }
}

export const get_matrix_url = async () => {
    // if (!fs.existsSync(records_p)) {
    //     fs.mkdirSync(records_p)
    // }

    // const target = path.resolve("records", "target.json")

    // if (fs.existsSync(target)) {
    //     const { url, updated_at } = JSON.parse(
    //         fs.readFileSync(target, "utf-8")
    //     ) as ITargetRecord

    //     if (new Date().getTime() - updated_at < 60 * 60 * 2) {
    //         return url
    //     }
    // }

    return matrix_speed_test().then((url) => {
        // fs.writeFileSync(
        //     target,
        //     JSON.stringify({
        //         url,
        //         updated_at: new Date().getTime(),
        //     } as ITargetRecord)
        // )

        return url
    })
}
