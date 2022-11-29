import { URL_API } from "./constants";

const getAllIngredients = async () => {
    try {
        const response = await fetch(URL_API, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
        return await response.json();
    } catch(err) {
        console.log(`Ошибка ${err.status}`);
    }
}

export default getAllIngredients;
