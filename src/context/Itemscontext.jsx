import { createContext } from "react";
import useDataFetching from "../hooks/useDataFetching";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
    const [loading, error, data] = useDataFetching('http://localhost:3000/items');

    return (
        <ItemsContext.Provider value={{ items: data, loading, error }}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ItemsContext;