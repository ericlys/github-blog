import styled from 'styled-components'

export const ListOfPostsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 48.4%);
  gap: 2rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`
