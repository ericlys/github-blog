import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 928px;
  padding: 2rem;
  margin: 0 auto;
`

export const Content = styled.main`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['dark-blue-250']};

  p {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme['blue-700']};
  }

  @media (max-width: 900px) {
    img {
      max-width: 600px;
    }
  }

  @media (max-width: 700px) {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 550px) {
    img {
      max-width: 300px;
    }
  }
`
