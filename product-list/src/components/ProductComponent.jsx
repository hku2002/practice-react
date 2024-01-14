import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 200px;
  height: 280px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const DiscountPrice = styled.p`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin: 5px 0;
`;

const DiscountRate = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #e44d26;
  margin-right: 5px;
`;

const ProductComponent = ({ productName, price, discountPrice }) => {
    return (
        <CardContainer>
            <Thumbnail src="/thumbnail_image_sample.jpeg" alt={productName} />
            <ProductInfo>
                <ProductName>{productName}</ProductName>
                {discountPrice ? (
                    <>
                        <DiscountPrice>{parseInt(price).toLocaleString()}원</DiscountPrice>
                        <Price>
                            <DiscountRate>{((1 - discountPrice / price) * 100).toFixed(0)}%</DiscountRate>
                            {parseInt(discountPrice).toLocaleString()}원
                        </Price>
                    </>
                ) : (
                    <Price>{parseInt(price).toLocaleString()}원</Price>
                )}
            </ProductInfo>
        </CardContainer>
    );
};

export default ProductComponent;
