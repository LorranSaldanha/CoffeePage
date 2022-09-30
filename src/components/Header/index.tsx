import {
  ContainerHeader,
  DisplayText,
  IconMenu,
  LogoFoating,
  MainHeader,
  SloganText,
  Title,
  WrapperBar,
  WrapperLogo,
  WrapperMenu,
  WrapperText
} from './styles'

import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
  return (
    <ContainerHeader>
      <WrapperBar>
        <WrapperLogo>
          <LogoFoating>coffee</LogoFoating>
        </WrapperLogo>
        <WrapperMenu>
          <IconMenu>
            <AiOutlineMenu />
          </IconMenu>
        </WrapperMenu>
      </WrapperBar>
      <MainHeader>
        <WrapperText>
          <Title>
            the <DisplayText>best </DisplayText>is coming
          </Title>
        </WrapperText>
      </MainHeader>
      {/* <SloganText>puring happiness...</SloganText> */}
      <SloganText>freshly roasted coffee from grand indonesia</SloganText>
    </ContainerHeader>
  )
}
