import styled from 'styled-components'
import CoffeeBeans from '..//..//assets/Coffee.jpg'

export const ContainerHeader = styled.header`
  background-image: url(${CoffeeBeans});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
`
export const ContentHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FloatingLogo = styled.h1`
  color: #fff;
  font-size: 5.5rem;
  font-family: 'Caveat', sans-serif;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: capitalize;
`
export const ContentText = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`
export const Typography = styled.h1`
  max-width: 60%;
  text-transform: capitalize;
  font-size: 5rem;
  text-align: right;
  color: #fff;
  @media screen and (max-width: 320px) {
    font-size: 4rem;
  }
`
export const SloganTypography = styled.p`
  left: 50%;
  text-align: center;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 600;
  text-transform: capitalize;
  padding: 1rem;
  color: #fff;
  position: absolute;
  top: 85%;
  width: 100%;
  transform: translate(-50%, -50%);
  &::before,
  &::after {
    background-color: #fff;
    content: '';
    display: block;
    margin: 1rem auto;
    height: 1px;
    position: realtive;
    width: 40%;
  }
`
