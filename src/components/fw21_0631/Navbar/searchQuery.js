import axios from "axios";

export const searchQuery = (query) => {
    axios
        .get(`https://puce-busy-zebra.cyclic.app/MensData?category=${query}`)
        .then(({ data }) => {
            console.log(data);
        });
};