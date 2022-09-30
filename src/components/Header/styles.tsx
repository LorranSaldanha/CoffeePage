import styled from 'styled-components'
import Coffee from '..//..//assets/Coffee.jpg'

export const ContainerHeader = styled.header`
  background-image: url(${Coffee});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
`
export const WrapperBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoFoating = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: 600;
  font-family: 'Caveat', sans-serif;
  letter-spacing: 0.03rem;
  &::first-letter {
    text-transform: capitalize;
  }
`
export const WrapperMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconMenu = styled.div`
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`
export const MainHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const WrapperText = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 55%;
`
export const Title = styled.h1`
  color: #fff;
  font-size: 4.2rem;
  &::first-letter {
    text-transform: capitalize;
  }
`
export const DisplayText = styled.span`
  background-color: #401709;
  padding: 0.5rem;
`
export const SloganText = styled.p`
  color: #fff;
  font-size: 1.6rem;
  font-style: italic;
  text-transform: capitalize;
  font-weight: 500;
  letter-spacing: 0.05rem;
  width: 100%;
  text-align: center;
  padding: 1rem;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::before,
  &::after {
    background-color: #fff;
    content: '';
    display: block;
    margin: 1rem auto;
    height: 1px;
    position: realtive;
    width: 50%;
  }
`
