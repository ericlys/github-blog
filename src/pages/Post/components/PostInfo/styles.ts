import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  max-width: 864px;
  padding: 2rem;
  background: ${(props) => props.theme['dark-blue-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -7.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['blue-700']};

    a {
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['white-900']};
  }
`

export const InfoWrapper = styled.ul`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;

  li {
    list-style-type: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    font-size: 1rem;
    color: ${(props) => props.theme['dark-blue-300']};

    span::first-letter {
      text-transform: capitalize;
    }
  }
`
