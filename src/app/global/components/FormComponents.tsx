'use client'
import { styled, css } from 'styled-components'
import colors from '../styles/colors'
import sizes from '../styles/sizes'
const { light, dark } = colors
const { normal } = sizes

const commonStyle = css`
  border: 1px solid ${light};
  color: ${dark};
  font-size: ${normal};
  border-radius: 2px;
  & + & {
    margin-top: 5px;
  }
  width: 100%;
`

/* 입력 항목 */
export const Input = styled.input`
  ${commonStyle}
`
export const Textarea = styled.textarea`
  ${commonStyle}
`
