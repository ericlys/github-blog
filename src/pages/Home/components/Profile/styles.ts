import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme['dark-blue-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -7.5rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    height: 1rem;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;

    font-weight: bold;

    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['white-900']};
  }

  span {
    color: ${(props) => props.theme['blue-700']};
    font-size: 0.75rem;
  }
`

export const About = styled.p`
  font-size: 1rem;
  font-weight: normal;
  text-justify: distribute;
  margin-top: 0.5rem;
`

export const InfoWrapper = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  li {
    list-style-type: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    font-size: 1rem;
    color: ${(props) => props.theme['dark-blue-200']};
  }
`
