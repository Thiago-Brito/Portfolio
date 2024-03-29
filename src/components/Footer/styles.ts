import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
margin-top: 5rem;
a{
    text-decoration: none;
}
p{
    color: #B3B3B3;

    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor:pointer;
    transition: transform 0.2s ease;
  }
  p:hover{
    
    color: ${(props) => props.theme['hover-text']};
    transform: scale(1.05);
  }
  @media (min-width: 1024px) {
   margin:0;
  }
`






