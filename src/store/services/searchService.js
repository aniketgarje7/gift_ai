import { reqHelper } from "../helpers";

export const searchService = {
    searchFetch
};

function searchFetch(data) {
    const requestOptions = {
        method: "POST",
        headers: reqHelper.reqHeader(),
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.NEXT_PUBLIC_URL}`, requestOptions)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}