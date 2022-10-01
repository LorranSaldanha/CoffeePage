import styled from 'styled-components'
import Coffee from '..//..//assets/Coffee.jpg'

export const ContainerHeader = styled.header`
  background-image: url(${Coffee});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
`
export const LogoFloating = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 6rem;
  font-family: 'Caveat', sans-serif;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    content: '';
    background-color: #fff;
    width: 100%;
    height: 1px;
    display: flex;
    vertical-align: middle;
    margin: 1rem;
  }
`
export const WrapperText = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ContentText = styled.h1`
  max-width: 60%;
  font-size: 5rem;
  text-transform: capitalize;
  color: #fff;
  text-align: left;
`
export const SloganFloating = styled.p`
  color: #fff;
  text-transform: capitalize;
  font-size: 1.8rem;
  text-align: left;
`
export const TextFooter = styled.p`
  width: 100%;
  color: #fff;
  text-transform: capitalize;
  font-size: 1.8rem;
  text-align: left;
  padding: 1rem 0.5rem;
  text-align: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`
