import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductComponent from './ProductComponent';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 10px;
  justify-content: center;
`;

const ProductList = () => {

    const [products, setProduct] = useState([]);
    const apiUrl = "http://localhost:8080/products";

    const fetchProducts = useCallback(async (page, size) => {

        const url = new URL(apiUrl);
        url.searchParams.append('page', page);
        url.searchParams.append('size', size);

        const response = await fetch(url.toString());
        const jsonData = await response.json();
        console.log(jsonData);
        setProduct(jsonData.data.content);
    }, [apiUrl]);

    useEffect(() => {
        console.log('use effect');
        fetchProducts(0, 10);
    }, [fetchProducts]);



    return (
        <ProductListContainer>
            {products.map((product) => (
                <ProductComponent key={product.id} {...product} />
            ))}
        </ProductListContainer>
    );
};

export default ProductList;
