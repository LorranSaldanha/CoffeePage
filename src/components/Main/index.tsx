import {
  ContainerMain,
  ContentCard,
  ContentTitle,
  ImageCard,
  TitleMain,
  WrapperServices
} from './styles'
import Conversation from '..//..//assets/Conversation.svg'

export function Main() {
  return (
    <ContainerMain>
      <TitleMain>
        <ContentTitle>services</ContentTitle>
      </TitleMain>
      <WrapperServices>
        <ContentCard>
          <ImageCard src={Conversation} />
        </ContentCard>
        <ContentCard>
          <ImageCard src={Conversation} />
        </ContentCard>
        <ContentCard>
          <ImageCard src={Conversation} />
        </ContentCard>
      </WrapperServices>
    </ContainerMain>
  )
}
