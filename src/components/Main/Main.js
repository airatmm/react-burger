import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

const Main = ({ children }) => {
    return (
        <main className="main">
            <h1>Main Page</h1>
            <BurgerIngredients />
            { children }
        </main>

    )
}

export default Main;
