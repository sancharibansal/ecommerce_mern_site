import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://lh3.googleusercontent.com/p/AF1QipO0_k1vvjTqVfkAxGyk8pse9vl2uMZqVWG2oqK1=s1360-w1360-h1020") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Added box shadow for a subtle effect */
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px; /* Changed 'font-style' to 'font-size' */
  font-weight: 300;
  margin-bottom: 20px; /* Added margin-bottom for spacing */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  padding: 10px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const PasswordInput = styled(Input)`
  width: 80%; /* Adjusted width for password input */
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #555;
  ${mobile({width: "10%"})}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: gray;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (e)=> {
    e.preventDefault();
    login(dispatch,{username, password });
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" 
                 onChange={(e)=> setUsername(e.target.value)}/>
          <PasswordWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e)=> setPassword(e.target.value)}
            />
            <ShowPasswordButton type="button" onClick={handleShowPasswordToggle}>
              {showPassword ? "Hide" : "Show"}
            </ShowPasswordButton>
          </PasswordWrapper>
          <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
          {error && <Error>Wrong username or password</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
