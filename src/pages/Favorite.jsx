import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductFavorite from "../components/ProductFavorite";
import { useDispatch, useSelector } from "react-redux";
import { favoritesState$ } from "../redux/selectors";
import React from "react";
import { getFavoritesRequest } from "../redux/Favorites/FavoritesSlice";

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

const Favorite = () => {
  const dispatch = useDispatch();
  const data = useSelector(favoritesState$);
  const userId = useSelector(favoritesState$.userId);

  React.useEffect(() => {
    dispatch(getFavoritesRequest(userId));
  }, [dispatch, userId]);

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
            <ProductFavorite></ProductFavorite>
            <ProductFavorite></ProductFavorite>
            <ProductFavorite></ProductFavorite>
            <ProductFavorite></ProductFavorite>
            <ProductFavorite></ProductFavorite>
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Favorite;
