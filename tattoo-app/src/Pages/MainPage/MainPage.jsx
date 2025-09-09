import React from 'react';
import CardItem from '@comp/Carditem/CardItem';
import CardNotFound from '@pages/CardNotFound/CardNotFound';
import LoadMoreBtn from '@comp/LoadMoreBtn/LoadMoreBtn';

import './mainPage.css';

const MainPage = ({ displayed, addToCart, loadingStates, loadMore, filtered }) => {
    return (
        <>
            <ul className="products__items">
                {displayed.length > 0 ? displayed.map((item) => (
                    <CardItem
                        key={item.id}
                        product={item}
                        addToCart={addToCart}
                        isLoading={loadingStates[item.id] || false}
                    />
                )) : <CardNotFound />}
            </ul>
            <LoadMoreBtn
                onLoad={loadMore}
                hasMore={displayed.length < filtered.length}
            />
        </>
    )
}

export default React.memo(MainPage);