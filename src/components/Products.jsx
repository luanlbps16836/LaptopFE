import styled from "styled-components";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import * as actions from "../redux/actions";
import { productsState$ } from "../redux/selectors";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector(productsState$);

  React.useEffect(() => {
    dispatch(actions.getProducts.getProductsRequest());
  }, [dispatch]);

  return (
    <Container>
      {data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
