import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 75%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterOptionList = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/gSHJywf/macbook-air-gold-select-201810-4.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>Apple MacBook Air M1 256GB 2020</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            iste labore, perferendis ad dignissimos veritatis animi in
            cupiditate atque beatae non quasi similique praesentium itaque
            architecto maiores eos quod ipsa?
          </Desc>
          <Price>19.990.000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="gray"></FilterColor>
              <FilterColor color="gold"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>RAM & ROM</FilterTitle>
              <FilterOptionList>
                <FilterOption>16GB & 256GB</FilterOption>
                <FilterOption>16GB & 256GB</FilterOption>
                <FilterOption>16GB & 256GB</FilterOption>
                <FilterOption>16GB & 256GB</FilterOption>
              </FilterOptionList>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
