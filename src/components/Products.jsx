import styled from "styled-components";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getProductsRequest } from "../redux/Products/ProductsSlice";
import { productsState$ } from "../redux/selectors";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsState$);

  React.useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
