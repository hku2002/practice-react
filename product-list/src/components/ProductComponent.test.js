import React from 'react';
import { render } from '@testing-library/react';
import ProductComponent from './ProductComponent';

// Mock 상품 데이터
const mockProduct = {
    productName: '테스트 상품 1',
    price: 5000,
    discountPrice: 4000,
};

describe('ProductComponent', () => {
    it('상품 컴포넌트가 올바른 데이터로 렌더링되는지 확인한다.', () => {
        const { getByText } = render(<ProductComponent {...mockProduct} />);

        // 상품명이 올바르게 렌더링되는지 확인
        const productNameElement = getByText(mockProduct.productName);
        expect(productNameElement).toBeInTheDocument();

        // 가격이 올바르게 렌더링되는지 확인
        const priceElement = getByText(`${mockProduct.price.toLocaleString()}원`);
        expect(priceElement).toBeInTheDocument();

        // 할인상품이 올바르게 렌더링되는지 확인
        const discountPriceElement = getByText(
            `${mockProduct.discountPrice.toLocaleString()}원`
        );
        expect(discountPriceElement).toBeInTheDocument();

        // 할인율이 올바르게 렌더링되는지 확인
        const discountRateElement = getByText(
            `${((1 - mockProduct.discountPrice / mockProduct.price) * 100).toFixed(0)}%`
        );
        expect(discountRateElement).toBeInTheDocument();
    });

    it('할인이 없는 경우 할인 가격과 할인율은 렌더링 되면 안된다.', () => {
        const productWithoutDiscount = {
            productName: '테스트 상품 2',
            price: 8000,
        };

        const { getByText, queryByText } = render(
            <ProductComponent {...productWithoutDiscount} />
        );

        const discountPriceElement = queryByText('8000원');
        expect(discountPriceElement).toBeNull();

        const discountRateElement = queryByText('20%');
        expect(discountRateElement).toBeNull();

    });

    it('할인이 없는 경우 가격은 올바르게 렌더링 되어야 한다..', () => {
        const productWithoutDiscount = {
            productName: '테스트 상품 3',
            price: 8000,
        };

        const { getByText, queryByText } = render(
            <ProductComponent {...productWithoutDiscount} />
        );

        const priceElement = getByText(
            `${productWithoutDiscount.price.toLocaleString()}원`
        );
        expect(priceElement).toBeInTheDocument();
    });
});
