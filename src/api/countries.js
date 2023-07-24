const API_URL = "https://restcountries.com/v3.1";

const all = async () => {
    const res = await fetch(`${API_URL}/all`);

    if (!res.ok) throw new Error("Requested resources not found");

    return await res.json();
};

const reqs = {
    all,
};

export default reqs;
