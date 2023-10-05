import { reqHelper } from "../helpers";

export const searchService = {
    searchFetch,
};

async function searchFetch(data) {
    const requestOptions = {
        method: "POST",
        headers: reqHelper.reqHeader(),
        body: JSON.stringify(data),
    };
console.log('in search fetch')
    return fetch(`${process.env.NEXT_PUBLIC_API}`, requestOptions)
        .then((res)=>res.json())
        .then((response) => {
            return response;
        });
}

