import { Facebook, Instagram, MailOutline, Phone, Place, WhatsApp } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    background-color: #eee;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({backgroundColor: "#f4f1f1"})}
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    //cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#dddcdc"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Touch N Glow</Logo>
        <Desc>Elevate your style with Touch N Glow, where fashion meets sophistication. Discover curated collections of chic apparel and accessories that redefine elegance. Shop with confidence, embracing the essence of timeless glamour. Your journey to unparalleled fashion begins here.</Desc>
        <SocialContainer>

        <a href="https://www.facebook.com/touchnglow4u" target="_blank" rel="noopener noreferrer">   
            <SocialIcon color= "4267B2">
                <Facebook/>
            </SocialIcon>
        </a>

        <a href="https://www.instagram.com/touchnglow4u/" target="_blank" rel="noopener noreferrer">
            <SocialIcon color= "E4405F">
                <Instagram/>
            </SocialIcon>
        </a>
        
        <a href="wa.me/+919956087551" target="_blank" rel="noopener noreferrer">
            <SocialIcon color= "25D366">
                <WhatsApp/>
            </SocialIcon>
        </a>

        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Salon Services</ListItem>
            <ListItem>Kids Clothing</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>Contact Us</ListItem>
            
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> 
            <Place style = {{marginRight: "10px"}}/>UGF-2, Aliganj Shopping Center, Chaudhary Tola, Kursi Rd, Aliganj, Lucknow-226022
        </ContactItem>
        <ContactItem>
            <a href="tel:+919956087551" style={{textDecoration: "none", color: "inherit"}}>
                <Phone style={{marginRight: "10px"}} />+919956087551
            </a>, 
            <a href="tel:+919935375793" style={{textDecoration: "none", color: "inherit"}}>
                +919935375793
            </a>
        </ContactItem>
        <ContactItem>
            <a href="mailto:sanchari.bansal@gmail.com" style={{textDecoration: "none", color: "inherit"}}>
                <MailOutline style={{marginRight: "10px"}} /> sanchari.bansal@gmail.com
            </a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
