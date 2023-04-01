import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FavoriteOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
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

const ProductFuntionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

const Favorite = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR FAVORITE</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <Link to="/cart">
              <TopText>Shopping Bag (2)</TopText>
            </Link>
            <Link to="/favorite">
              <TopText>Your Wishlist (0)</TopText>
            </Link>
          </TopTexts>
          <TopButton type="filled">CHECKOUT ZONE</TopButton>
        </Top>
        <Bottom>
          <Info>
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
                <ProductFuntionContainer>
                  <FavoriteOutlined style={{ color: "red", padding: "10px" }} />
                  <ShoppingCartOutlined style={{ padding: "10px" }} />
                </ProductFuntionContainer>
                <ProductPrice>19.490.000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/MhFzBtS/laptop-asus-vivobook-flip-14-tp470ea-ec346w-3.webp" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Asus Vivobook Flip 14
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>PD00002
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductOption>
                    <b>Option: </b>16GB & 516GB
                  </ProductOption>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductFuntionContainer>
                  <FavoriteOutlined style={{ color: "red", padding: "10px" }} />
                  <ShoppingCartOutlined style={{ padding: "10px" }} />
                </ProductFuntionContainer>
                <ProductPrice>11.490.000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/ZmbKxYV/0004-64002-laptop-msi-modern-14-19.webp" />
                <Details>
                  <ProductName>
                    <b>Product:</b>MSI Modern 14
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>PD00003
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductOption>
                    <b>Option: </b>16GB & 516GB
                  </ProductOption>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductFuntionContainer>
                  <FavoriteOutlined style={{ color: "red", padding: "10px" }} />
                  <ShoppingCartOutlined style={{ padding: "10px" }} />
                </ProductFuntionContainer>
                <ProductPrice>14.790.000 </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Favorite;
