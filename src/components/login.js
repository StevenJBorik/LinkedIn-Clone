import styled from 'styled-components';

function Login() {
    return(
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px; 
`; 
const Nav = styled.nav`
    max-width: 1128px; 
    margin: auto: 
    padding: 12px 0 16px; 
`; 

export default Login; 