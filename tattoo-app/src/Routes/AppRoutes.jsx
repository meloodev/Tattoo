import { Routes, Route } from "react-router";


import MainPage from "@pages/MainPage/MainPage";
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import CardPage from "@pages/CardPage/CardPage";

const AppRoutes = ({ displayed, addToCart, items, loadingStates, loadMore, filtered }) => {

    return (
        <Routes>
            <Route path="/" element={
                <MainPage
                    displayed={displayed}
                    addToCart={addToCart}
                    loadingStates={loadingStates}
                    loadMore={loadMore}
                    filtered={filtered} />} />

            <Route path="/card/:id" element={<CardPage
                addToCart={addToCart}
                loadingStates={loadingStates}
                items={items}
            />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;