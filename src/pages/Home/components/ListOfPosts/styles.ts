import styled from 'styled-components'

export const ListOfPostsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`
