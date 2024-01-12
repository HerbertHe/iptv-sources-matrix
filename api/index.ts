import type { VercelRequest, VercelResponse } from "@vercel/node"

import { get_matrix_url } from "../utils/redirect.js"
import { is_valid_file } from "../utils/precatch.js"

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!!req.url) {
        const path = req.url.split("/").filter((r) => !!r)
        const matrix_url = await get_matrix_url()

        // /xxx.m3u
        if (path.length === 1 && /\.m3u$/.test(path[0])) {
            if (!is_valid_file(path[0], "m3u")) {
                return res.status(404).send("not found")
            }

            return res.redirect(`${matrix_url}/${path[0]}`)
        }

        // /txt/xxx.txt
        if (path.length === 2 && path[0] === "txt" && /\.txt$/.test(path[1])) {
            if (!is_valid_file(path[1], "txt")) {
                return res.status(404).send("not found")
            }

            return res.redirect(`${matrix_url}/txt/${path[1]}`)
        }

        // /epg/xxx.xml
        if (path.length === 2 && path[0] === "epg" && /\.xml$/.test(path[1])) {
            if (!is_valid_file(path[1], "epg")) {
                return res.status(404).send("not found")
            }
            return res.redirect(`${matrix_url}/epg/${path[1]}`)
        }

        return res.status(404).send("not found")
    } else {
        return res.status(404).send("not found")
    }
}
