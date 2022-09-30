import styled from 'styled-components'

export const ContainerMain = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 1rem 0 3rem 0;
`
export const Typography = styled.h1`
  font-size: 5rem;
  text-align: center;
  text-transform: capitalize;
  color: #401709;
  font-family: 'Caveat', sans-serif;
  margin: 8rem 0;
  font-style: italic;
`
export const WrapperMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 6rem;
`
export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const WrapperImage = styled.img`
  width: 50%;
  height: 50%;
  filter: drop-shadow(0 0 0.75rem #00000018);
`
export const ContentText = styled.div`
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: nomral;
  letter-spacing: 0.03rem;
`
export const FormField = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const InputField = styled.input`
  padding: 2rem 0.9rem;
  width: 100%;
  max-width: 90%;
  outline: none;
  background-color: transparent;
  text-align: left;
  font-size: 1.6rem;
  color: #401709;
  font-weight: 600;
  border-bottom: solid 0.06rem #401709;
  &::placeholder {
    font-size: 1.6rem;
    text-transform: capitalize;
    color: #401709;
    opacity: 0.8;
  }
`
export const ButtonEmail = styled.label`
  background-color: #401709;
  padding: 1.8rem;
  width: 50%;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  margin: 3rem 0;
  border-radius: 1rem;
  font-size: 1.6rem;
  &:hover {
    opacity: 0.9;
    transition: all ease 0.2s;
  }
`
