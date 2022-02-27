const FetchUtil = async (params) => {
    const { url } = params;
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Something went wrong");
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export { FetchUtil };
