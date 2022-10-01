import {
  ContainerHeader,
  ContentText,
  LogoFloating,
  SloganFloating,
  TextFooter,
  WrapperText
} from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <LogoFloating>coffee</LogoFloating>
      <WrapperText>
        <ContentText>the best is coming</ContentText>
        <SloganFloating>puring happiness</SloganFloating>
      </WrapperText>
      <TextFooter>freshly roasted coffee from grand indonesia</TextFooter>
    </ContainerHeader>
  )
}
