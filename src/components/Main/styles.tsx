import styled from 'styled-components'
export const ContainerMain = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
`
export const TitleMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`
export const ContentTitle = styled.h1`
  font-size: 3.5rem;
  font-family: 'caveat', sans-serif;
  font-weight: 600;
  text-transform: capitalize;
`
export const WrapperServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  gap: 10rem;
  padding: 1rem;
`
export const ContentCard = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #ccc;
  border-radius: 1.6rem;
  position: relative;
`
export const ImageCard = styled.img`
  width: 30%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid #fff 0.6rem;
  border-radius: 100%;
  padding: 0.02rem;
`
