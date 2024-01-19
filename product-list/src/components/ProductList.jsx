import {useEffect, Fragment, useCallback} from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import ProductComponent from './ProductComponent';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 10px;
  justify-content: center;
`;

const ProductList = () => {
    const apiUrl = "http://localhost:8080/products";
    const size = 10;

    const fetchProducts = async (page = 0) => {
        const url = new URL(apiUrl);
        url.searchParams.append('page', page);
        url.searchParams.append('size', size);

        const response = await fetch(url.toString());
        const jsonData = await response.json();
        return { items: jsonData.data.content, nextPage: page + 1, totalPages: jsonData.data.totalPages };
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery('products', ({ pageParam = 0 }) => fetchProducts(pageParam), {
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length;
            return nextPage < lastPage.totalPages ? nextPage : undefined;
        }
    });

    const handleScroll = useCallback(async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (hasNextPage) await fetchNextPage();
        }
    }, [hasNextPage, fetchNextPage]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (status === 'loading') {
        return <span>Loading...</span>;
    }

    if (status === 'error') {
        return <span>Error loading products</span>;
    }

    return (
        <ProductListContainer>
            {data?.pages.map((group, i) => (
                <Fragment key={i}>
                    {group.items.map(product => (
                        <ProductComponent key={product.id} {...product} />
                    ))}
                </Fragment>
            ))}
            {isFetchingNextPage && <p>Loading more...</p>}
        </ProductListContainer>
    );
};

export default ProductList;
