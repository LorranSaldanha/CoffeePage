import { Hamburger } from '../Hamburger'
import {
  ContentHeader,
  ContentLogo,
  LogoBranding,
  SloganText,
  TipTitle,
  WrapperHeader,
  WrapperText
} from './styles'

export function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <ContentLogo>
          <LogoBranding>coffee</LogoBranding>
        </ContentLogo>
        <ContentLogo>
          <Hamburger />
        </ContentLogo>
      </ContentHeader>
      <WrapperText>
        <TipTitle>puring happiness</TipTitle>
        <SloganText>frenshly roasted coffee from grand indonesia</SloganText>
      </WrapperText>
    </WrapperHeader>
  )
}
