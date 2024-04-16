import { ajax } from "../utils/ajax";

export const getLocations = async (id) => {
    const optionsRequest = {
        method: "GET",
        url: `https://rickandmortyapi.com/api/location/${id}`
    };
    return await ajax(optionsRequest);
}