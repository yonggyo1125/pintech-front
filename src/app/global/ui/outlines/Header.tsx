'use client'
import React from 'react'
import { styled } from 'styled-components'

const StyledHeader = styled.header``

const Header = () => {
  return <StyledHeader>상단영역</StyledHeader>
}

export default React.memo(Header)
