import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { api } from '../../../../lib/axios'
import { About, InfoWrapper, ProfileContainer, TitleWrapper } from './styles'

interface ProfileType {
  login: string
  avatar_url: string
  followers: number
  bio: string
  name: string
  company: string
  html_url: string
}

export function Profile() {
  const theme = useTheme()
  const [profile, setProfile] = useState<ProfileType>()

  const fetchProfile = async () => {
    const response = await api.get('users/ericlys')
    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <div>
        <img src={profile?.avatar_url} alt="" />
      </div>
      <div>
        <TitleWrapper>
          <h2>{profile?.name}</h2>
          <a href={profile?.html_url}>
            <span>GITHUB</span>
            <ArrowSquareOut size={14} color={theme['blue-700']} weight="bold" />
          </a>
        </TitleWrapper>
        <About>{profile?.bio}</About>

        <InfoWrapper>
          <li>
            <GithubLogo
              size={18}
              weight="fill"
              color={theme['dark-blue-400']}
            />
            <span>{profile?.login}</span>
          </li>
          {!!profile?.company && (
            <li>
              <Buildings
                size={18}
                weight="fill"
                color={theme['dark-blue-400']}
              />
              <span>{profile?.company}</span>
            </li>
          )}
          <li>
            <Users size={18} weight="fill" color={theme['dark-blue-400']} />
            <span>{profile?.followers} seguidores</span>
          </li>
        </InfoWrapper>
      </div>
    </ProfileContainer>
  )
}
