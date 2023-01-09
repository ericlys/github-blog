import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { About, InfoWrapper, ProfileContainer, TitleWrapper } from './styles'

export function Profile() {
  const theme = useTheme()

  return (
    <ProfileContainer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/30418565?u=b785619b0627f125784593fe8c71ceb79ccbc59a&v=4"
          alt=""
        />
      </div>
      <div>
        <TitleWrapper>
          <h2>Ericlys Moreira</h2>
          <a href="">
            <span>GITHUB</span>
            <ArrowSquareOut size={14} color={theme['blue-700']} weight="bold" />
          </a>
        </TitleWrapper>
        <About>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </About>

        <InfoWrapper>
          <li>
            <GithubLogo
              size={18}
              weight="fill"
              color={theme['dark-blue-400']}
            />
            <span>ericlys</span>
          </li>
          <li>
            <Buildings size={18} weight="fill" color={theme['dark-blue-400']} />
            <span>Rocketseat</span>
          </li>
          <li>
            <Users size={18} weight="fill" color={theme['dark-blue-400']} />
            <span>32 seguidores</span>
          </li>
        </InfoWrapper>
      </div>
    </ProfileContainer>
  )
}
