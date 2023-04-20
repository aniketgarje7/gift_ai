
export const reqHelper = {
    reqHeader,
    reqFormDataHeader,
    handleResponse,
    reqJson
};

function reqHeader() {
  let contentType = "application/json";
    return {
            "Content-Type": contentType,
            "Accept": "application/json"
        };
     
}

function reqFormDataHeader() {
      return {
            "Accept": "application/json",
        };
   
}
function reqJson (){
    return {
        "Content-Type": "application/json",
    };
}
function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            return Promise.reject(data);
        }
        return data;
    });
}