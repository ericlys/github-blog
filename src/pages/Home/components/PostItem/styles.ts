import styled from 'styled-components'

export const PostItemContainer = styled.a`
  padding: 2rem;
  background: ${(props) => props.theme['dark-blue-700']};
  border-radius: 10px;
  max-height: 260px;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h5 {
      flex: 1;

      font-size: 1.25rem;
      color: ${(props) => props.theme['white-900']};

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['dark-blue-300']};

      ::first-letter {
        text-transform: capitalize;
      }
    }
  }

  p {
    margin-top: 1.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
