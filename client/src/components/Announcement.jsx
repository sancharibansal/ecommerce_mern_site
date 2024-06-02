import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #e464c7;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free shipping on orders above 2599/-
    </Container>
  )
}

export default Announcement;

