import { styled } from 'styled-components'
import colors from '../styles/colors'
const { dark } = colors

export const MainContentBox = styled.section`
  max-width: 750px;
  min-width: 600px;
  margin: 100px auto;
  border-radius: 40px;
  padding: 100px;
  box-shadow: 2px 2px 10px ${dark};
`
