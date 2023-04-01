import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Input placeholder="Name" />
          <Input placeholder="Birthday" />
          <Input placeholder="Address" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Agreement>
            By creating an account, I consent to the prosessing of my pesonal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              REGISTER
            </Link>
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
