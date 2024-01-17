import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  width: 70%;
  margin: auto;
  padding: 20px;
`;

const DetailCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailThumbnail = styled.img`
  width: 45%;
  max-height: 400px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const DetailInfoContainer = styled.div`
  width: 50%;
  padding: 20px;
`;

const DetailProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DetailPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const DetailDiscountPrice = styled.p`
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
  margin-bottom: 10px;
`;

const DetailDiscountRate = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #e44d26;
  margin-right: 5px;
`;

const DetailDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ProductDetailComponent = ({ productName, price, discountPrice, discountRate, description }) => {
    return (
        <DetailContainer>
            <DetailCardContainer>
                <DetailThumbnail src="/thumbnail_image_sample.jpeg" alt={productName} />
                <DetailInfoContainer>
                    <DetailProductName>{productName}</DetailProductName>
                    {discountPrice ? (
                        <>
                            <DetailDiscountPrice>{parseInt(price).toLocaleString()}원</DetailDiscountPrice>
                            <DetailPrice>
                                <DetailDiscountRate>{discountRate}%</DetailDiscountRate>
                                {parseInt(discountPrice).toLocaleString()}원
                            </DetailPrice>
                        </>
                    ) : (
                        <DetailPrice>{parseInt(price).toLocaleString()}원</DetailPrice>
                    )}
                    <DetailDescription>{description}</DetailDescription>
                </DetailInfoContainer>
            </DetailCardContainer>
        </DetailContainer>
    );
};

export default ProductDetailComponent;
