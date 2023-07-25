const API_URL = "https://restcountries.com/v3.1";

const all = async () => {
    const res = await fetch(`${API_URL}/all`);

    if (!res.ok) throw new Error("Requested resources not found");

    return await res.json();
};

const name = async (name) => {
    const res = await fetch(`${API_URL}/name/${name}`);

    if (!res.ok) throw new Error("Unable to find the requested country");

    return await res.json();
};

const region = async (region) => {
    const res = await fetch(`${API_URL}/region/${region}`);

    if (!res.ok) throw new Error("Requested resources not found");

    return await res.json();
};

const country = async (paramName) => {
    const res = await fetch(`${API_URL}/name/${paramName}`);

    if (!res.ok) throw new Error("Unable to find the requested country");

    return await res.json();
};

const reqs = {
    all,
    name,
    region,
    country,
};

export default reqs;
