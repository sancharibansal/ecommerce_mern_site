import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.unsplash.com/photo-1572611932849-7f0f116fb2f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  min-height: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px; 
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${props => (props.disabled ? 'grey' : 'teal')};
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            <Checkbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            By creating an account, I agree to abide by the <b>PRIVACY POLICY</b>
          </Agreement>
            <Button disabled={!isChecked}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
