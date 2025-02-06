export async function getData(page) {
    const url = `https://v2.api.noroff.dev/auction/listings?_active=true&page=${page}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return { data: [] };
    }
}

export async function search(query) {
    const url = `https://v2.api.noroff.dev/auction/listings/search?q=${query}&_active=true`;
    console.log(url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
