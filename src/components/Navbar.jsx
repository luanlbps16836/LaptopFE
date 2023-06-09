import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
// `;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Hoang Long
            </Link>
          </Logo>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{
              fontSize: 14,
              cursor: "pointer",
              marginLeft: 25,
              textDecoration: "none",
            }}
          >
            REGISTER
          </Link>
          <Link
            to="/login"
            style={{
              fontSize: 14,
              cursor: "pointer",
              marginLeft: 25,
              textDecoration: "none",
            }}
          >
            SIGN IN
          </Link>
          <Link
            to="/cart"
            style={{
              fontSize: 14,
              cursor: "pointer",
              marginLeft: 25,
              textDecoration: "none",
            }}
          >
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
