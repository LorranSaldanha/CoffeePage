import { useState } from 'react'
import {
  HamburgerContainer,
  ContentHamburger,
  ListItem,
  Item,
  ContentNav,
  ContentButton
} from './styles'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <ContentButton onClick={handleOpen}>
        {openMenu !== true ? <AiOutlineMenu /> : <AiOutlineClose />}
      </ContentButton>
      <HamburgerContainer className={openMenu !== true ? '' : 'open'}>
        <ContentHamburger>
          <ContentNav>
            <ListItem>
              <Item>scheduling</Item>
              <Item>Support</Item>
              <Item>About</Item>
            </ListItem>
          </ContentNav>
        </ContentHamburger>
      </HamburgerContainer>
    </>
  )
}
