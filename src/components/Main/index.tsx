import {
  ContainerMain,
  ContentText,
  Typography,
  WrapperImage,
  WrapperMain
} from './styles'
import CupCoffee from '..//..//assets/CoffeeCup.png'

export function Main() {
  return (
    <ContainerMain>
      <Typography>simple coffee</Typography>
      <WrapperMain>
        <WrapperImage src={CupCoffee} />
        <ContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          fugiat error, ut fuga repudiandae at dolore laboriosam nesciunt
          voluptate iure unde eveniet odit modi nobis laborum, molestias quam
          quia aperiam.
        </ContentText>
      </WrapperMain>
    </ContainerMain>
  )
}
