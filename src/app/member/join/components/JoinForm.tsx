import React from 'react'
import styled from 'styled-components'

import { Input } from '@/app/global/components/FormComponents'

const StyledForm = styled.form``

const JoinForm = () => {
  return (
    <>
      <StyledForm autoComplete="off">
        <Input type="text" name="email" placeholder="이메일" />
      </StyledForm>
    </>
  )
}

export default React.memo(JoinForm)
