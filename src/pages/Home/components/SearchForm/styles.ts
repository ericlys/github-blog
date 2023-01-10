import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @keyframes rotating {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        animation: rotating 2s linear infinite;
      }
    }

    h4 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme['dark-blue-200']};
    }

    span {
      font-size: 0.875rem;
      font-weight: normal;
      color: ${(props) => props.theme['dark-blue-300']};
    }
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['dark-blue-600']};
    background: ${(props) => props.theme['black-900']};
    color: ${(props) => props.theme['white-900']};
    padding: 1rem;

    margin-top: 0.75rem;

    ::placeholder {
      color: ${(props) => props.theme['dark-blue-600']};
    }
  }
`
