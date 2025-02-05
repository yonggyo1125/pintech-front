'use client'
import React from 'react'
import Link from 'next/link'
import { styled } from 'styled-components'
import { SlLogin } from 'react-icons/sl'
import { FaUserPlus, FaHome, FaSearch } from 'react-icons/fa'

const StyledHeader = styled.header``

const Header = () => {
  return (
    <StyledHeader>
      <div className="site-top">
        <div className="left">
          <Link href="/">
            <FaHome />
          </Link>
        </div>
        <div className="right">
          <Link href="/member/join">
            <FaUserPlus /> 회원가입
          </Link>
          <Link href="/member/login">
            <SlLogin /> 로그인
          </Link>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search"></div>
      <nav></nav>
    </StyledHeader>
  )
}

export default React.memo(Header)
