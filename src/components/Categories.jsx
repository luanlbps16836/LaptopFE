import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import * as actions from "../redux/actions";
import { categoriesState$ } from "../redux/selectors";

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.directon === "left" && "10px"};
  right: ${(props) => props.directon === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 25vw;
  height: 15vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Categories = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector(categoriesState$);

  React.useEffect(() => {
    dispatch(actions.getCategories.getCategoriesRequest());
  }, [dispatch]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow directon="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {data.map((item) => (
          <Slide>
            <CategoryItem item={item} key={item.id} />
          </Slide>
        ))}
      </Wrapper>
      <Arrow directon="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Categories;
