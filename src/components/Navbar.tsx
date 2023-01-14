import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
                <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
                <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
            </Nav>
            
            <Button 
            onClick = {openCart}
            style={{width: "3rem", height: "3rem", position: "relative"}}
            variant="outline-primary"
            className="rounded-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 512 512"
                fill="currentColor">
                <path d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 
                0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 
                46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 
                0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 
                90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 
                0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 
                59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z"/>
            </svg>
            {cartQuantity > 0 && (
            <div className= "rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)"}}>
                {cartQuantity}</div> )}
            </Button>
            
        </Container>
    </NavbarBs>
}
