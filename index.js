// @ts-check

(async function () {

    /** @type {GlobalFetch["fetch"]} */
    const fetch = require("node-fetch")
    const { URLSearchParams } = require("url");
    const { user_name, password } = require("./passwd");

    const params = new URLSearchParams();
    params.append("return_url", "");
    params.append("user_name", user_name);
    params.append("password", password);
    params.append("_post_type", "ajax");

    const r = await fetch("https://pincong.rocks/account/ajax/login_process/", {
        method: "POST",
        body: params,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json, text/javascript, */*; q=0.01"
        }
    });

    console.log(r.status);
    console.log(await r.json());

})();
