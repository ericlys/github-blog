import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { relativeDate } from '../../../../utils/data'
import { InfoWrapper, PostInfoContainer } from './styles'

interface Info {
  title: string
  html_url: string
  comments: number
  updated_at: string
  user: {
    login: string
  }
}

interface PostInfoProps {
  info: Info
}

export function PostInfo({ info }: PostInfoProps) {
  const theme = useTheme()

  return (
    <PostInfoContainer>
      <header>
        <a href="/">
          <CaretLeft size={14} weight="bold" color={theme['blue-700']} />
          <span>voltar</span>
        </a>
        <a href={info.html_url}>
          <span>ver no github</span>
          <ArrowSquareOut size={14} weight="bold" color={theme['blue-700']} />
        </a>
      </header>
      <h2>{info?.title}</h2>

      {info?.user && (
        <InfoWrapper>
          <li>
            <GithubLogo
              size={20}
              weight="fill"
              color={theme['dark-blue-400']}
            />
            <span>{info?.user.login}</span>
          </li>
          <li>
            <Calendar size={20} weight="fill" color={theme['dark-blue-400']} />
            <span>{relativeDate(new Date(info?.updated_at))}</span>
          </li>
          <li>
            <ChatCircle
              size={20}
              weight="fill"
              color={theme['dark-blue-400']}
            />
            <span>
              {info.comments}{' '}
              {info.comments !== 1 ? 'comentário' : 'comentários'}
            </span>
          </li>
        </InfoWrapper>
      )}
    </PostInfoContainer>
  )
}
