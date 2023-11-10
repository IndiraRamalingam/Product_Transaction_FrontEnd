import { createContext, useState } from "react";

let AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    const [month, setMonth] = useState('March')
    const [word, setWord] = useState('')
    const [msg, setMsg] = useState('')
    const [sale, setSale] = useState('');
    const [saleCount, setSaleCount] = useState('');
    const [saleNotCount, setSaleNotCount] = useState('')

    return (
        <AppContext.Provider
            value={{
                product, setProduct,
                month, setMonth,
                word, setWord,
                msg, setMsg,
                sale, setSale,
                saleCount, setSaleCount,
                saleNotCount, setSaleNotCount
            }}
        >
            {children}
        </AppContext.Provider>
    );

};
export default AppContext;