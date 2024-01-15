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
    // 예시 데이터
    // const products = [
    //     { thumbnailImage: '/thumbnail_image_sample.jpeg', productId: 1, productName: '좋은 상품명 1', price: 10000, discountPrice: 8000 },
    //     { thumbnailImage: '/thumbnail_image_sample.jpeg', productId: 2, productName: '좋은 상품명 2', price: 20000, discountPrice: null },
    //     { thumbnailImage: '/thumbnail_image_sample.jpeg', productId: 3, productName: '[최대할인] 할인 많이 하는 상품명 1', price: 30000, discountPrice: 20000 },
    //     { thumbnailImage: '/thumbnail_image_sample.jpeg', productId: 4, productName: '정말 맛있는 상품과 상품명', price: 13000, discountPrice: 12000 },
    //     { thumbnailImage: '/thumbnail_image_sample.jpeg', productId: 5, productName: '여기는 상품명 입니다.', price: 10000, discountPrice: null },
    // ];
    const [products, setProduct] = useState([]);
    const apiUrl = "http://localhost:8080/products";

    const fetchProducts = useCallback(async (page, size) => {
        const response = await fetch(apiUrl);
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
