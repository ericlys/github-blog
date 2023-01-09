import styled from 'styled-components'
import coverImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 294px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 64px;

  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
