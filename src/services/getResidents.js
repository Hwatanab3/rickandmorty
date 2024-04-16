import { ajax } from "../utils/ajax";

export const getResidents = async (url) => {
    const optionsRequest = {
        method: "GET",
        url: url
    };
    return await ajax(optionsRequest);
}