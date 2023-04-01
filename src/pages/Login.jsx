import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { authState$ } from "../redux/selectors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.ibb.co/ZTPW5fM/pexels-codioful-formerly-gradienta-7130469.jpg")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Option = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: rgb(93 37 144);
`;

const Login = () => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isLogin = useSelector(authState$);
  const navigate = useNavigate();

  const onLogin = React.useCallback(() => {
    dispatch(actions.postLogin.postLoginRequest(data));

    // if (isLogin) {
    //   navigate("/");
    // } else {
    //   console.log("Login Failed");
    // }
  }, [data, dispatch]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            placeholder="Username"
            defaultValue={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            defaultValue={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          ></Input>
          <Button onClick={onLogin}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              LOGIN
            </Link>
          </Button>
          <Option>DO NOT YOU REMEMBER THE PASSWORD?</Option>
          <Option>
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
          </Option>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
