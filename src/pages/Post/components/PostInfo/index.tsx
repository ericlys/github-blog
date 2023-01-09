import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { InfoWrapper, PostInfoContainer } from './styles'

export function PostInfo() {
  const theme = useTheme()

  return (
    <PostInfoContainer>
      <header>
        <a href="/">
          <CaretLeft size={14} weight="bold" color={theme['blue-700']} />
          <span>voltar</span>
        </a>
        <a href="/">
          <span>ver no github</span>
          <ArrowSquareOut size={14} weight="bold" color={theme['blue-700']} />
        </a>
      </header>
      <h2>JavaScript data types and data structures</h2>
      <InfoWrapper>
        <li>
          <GithubLogo size={20} weight="fill" color={theme['dark-blue-400']} />
          <span>ericlys</span>
        </li>
        <li>
          <Calendar size={20} weight="fill" color={theme['dark-blue-400']} />
          <span>Há 1 dia</span>
        </li>
        <li>
          <ChatCircle size={20} weight="fill" color={theme['dark-blue-400']} />
          <span>5 comentários</span>
        </li>
      </InfoWrapper>
    </PostInfoContainer>
  )
}
