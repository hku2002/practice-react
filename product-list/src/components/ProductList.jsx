import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductComponent from './ProductComponent';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 10px;
  justify-content: center;
`;

const ProductList = (callback, deps) => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const apiUrl = "http://localhost:8080/products";
    const size = 10;


    const fetchProducts = useCallback(async (page, size) => {
        const url = new URL(apiUrl);
        url.searchParams.append('page', page);
        url.searchParams.append('size', size);

        const response = await fetch(url.toString());
        const jsonData = await response.json();
        return jsonData.data.content;
    }, [apiUrl]);

    const loadMore = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        try {
            const newProducts = await fetchProducts(page + 1, size);
            setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            setPage(page + 1);
        } catch (error) {
            console.error("Error fetching more products:", error);
        } finally {
            setLoading(false);
        }
    }, [loading, fetchProducts, page, size]);

    const handleScroll = useCallback(async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            await loadMore();
        }
    }, [loadMore]);


    useEffect(() => {
        fetchProducts(0, size).then((initialProducts) => setProducts(initialProducts));
    }, [fetchProducts, size]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <ProductListContainer>
            {products.map((product) => (
                <ProductComponent key={product.id} {...product} />
            ))}
            {loading && <p>Loading...</p>}
        </ProductListContainer>
    );
};

export default ProductList;
