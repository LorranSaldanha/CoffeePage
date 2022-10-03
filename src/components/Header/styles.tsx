import styled from 'styled-components'
import CoffeeImage from '..//..//assets/Coffee.jpg'

export const WrapperHeader = styled.header`
  background-image: url(${CoffeeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: relative;
`
export const ContentHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoBranding = styled.h1`
  font-family: 'Caveat', sans-serif;
  font-weight: 600;
  font-size: 4.1rem;
  font-style: italic;
  color: #fff;
  text-transform: capitalize;
  text-align: center;
`
export const WrapperText = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`
export const TipTitle = styled.h1`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 50%;
  text-transform: capitalize;
  text-align: left;
  font-size: 5rem;
  animation: go-back 1s;
  @keyframes go-back {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  }
`
export const SloganText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.03rem;
  animation: go-back 1s;
  @keyframes go-back {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  }
`
