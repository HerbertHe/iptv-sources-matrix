const m3u_valid_files: string[] = [
    "fmml_dv6",
    "fmml_iptv6",
    "fmml_v6",
    "ycl_iptv",
    "y_g",
    "o_all",
    "o_cn",
    "o_s_cn",
    "o_s_cn_112114",
    "o_s_cn_cctv",
    "o_s_cn_cgtn",
    "cn",
    "cn_n",
    "cn_c",
    "cn_p",
    "all",
    "q_bj_iptv_unicom",
    "q_bj_iptv_unicom_m",
    "q_bj_iptv_mobile",
    "q_bj_iptv_mobile_m",
]

const epg_valid_files: string[] = [
    "112114_xyz",
    "fmml",
    "51zmt",
    "51zmt_cc",
    "51zmt_df",
]

export const is_valid_file = (
    f: string,
    type: "m3u" | "txt" | "epg" = "m3u"
) => {
    if (["m3u", "txt"].includes(type)) {
        return m3u_valid_files.includes(f.replace(`.${type}`, ""))
    }

    return epg_valid_files.includes(f.replace(`.xml`, ""))
}
