import styled from 'styled-components'

export const HamburgerContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background-color: #472418;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: ease-in 0.5s;
  &.open {
    transform: translate(0);
  }
`
export const ContentHamburger = styled.div`
  width: 100%;
`
export const ContentNav = styled.nav`
  padding: 1rem;
  width: 100%;
  display: block;
  text-align: center;
`
export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Item = styled.li`
  list-style: none;
  text-transform: capitalize;
  font-weight: 600;
  font-family: 'Caveat', sans-serif;
  color: #fff;
  font-size: 2.5rem;
`
export const ContentButton = styled.div`
  font-size: 4rem;
  color: #fff;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`
