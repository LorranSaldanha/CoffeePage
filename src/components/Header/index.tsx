import {
  ContainerHeader,
  ContentHeader,
  ContentText,
  FloatingLogo,
  SloganTypography,
  Typography
} from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <FloatingLogo>coffee</FloatingLogo>
      </ContentHeader>
      <ContentText>
        <Typography>the best is coming</Typography>
      </ContentText>
      <SloganTypography>
        freshly roasted coffee from grand indonesia
      </SloganTypography>
    </ContainerHeader>
  )
}
