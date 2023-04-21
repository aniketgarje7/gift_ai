import { reqHelper } from "../helpers";

export const searchService = {
    searchFetch,
    searchGoogle
};

function searchFetch(data) {
    const requestOptions = {
        method: "POST",
        headers: reqHelper.reqHeader(),
        body: JSON.stringify(data),
    };

    return fetch(`${ process.env.NEXT_PUBLIC_URL }`, requestOptions)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}

function searchGoogle(data) {
    return fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCtwSMLe1pfoj1IXoa4Xs522QY43LLtv_s&cx=f39ec62603fd043e1&q=${data}`)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}