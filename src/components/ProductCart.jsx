import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
`;

const ProductOption = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  padding: 0px 15px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ProductCart = () => {
  return (
    <Container>
      <Product>
        <ProductDetail>
          <Image src="https://i.ibb.co/gSHJywf/macbook-air-gold-select-201810-4.webp" />
          <Details>
            <ProductName>
              <b>Product:</b>Apple MacBook Air M1 256GB 2020
            </ProductName>
            <ProductID>
              <b>ID: </b>PD00001
            </ProductID>
            <ProductColor color="black" />
            <ProductOption>
              <b>Option: </b>16GB & 516GB
            </ProductOption>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Remove />
            <ProductAmount>1</ProductAmount>
            <Add />
          </ProductAmountContainer>
          <ProductPrice>19.490.000</ProductPrice>
        </PriceDetail>
      </Product>
      <Hr />
    </Container>
  );
};

export default ProductCart;
