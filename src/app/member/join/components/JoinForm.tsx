import React from 'react'
import styled from 'styled-components'
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md'

import { Input } from '@/app/global/components/FormComponents'
import DatePicker from 'react-datepicker'

const StyledForm = styled.form``

const JoinForm = ({ form, onClick, onChange, onSelectDate }) => {
  return (
    <>
      <StyledForm autoComplete="off">
        <input type="hidden" name="gender" value={form?.gender ?? ''} />

        <Input
          type="text"
          name="email"
          placeholder="이메일"
          color="dark"
          value={form?.email ?? ''}
          onChange={onChange}
        />

        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          color="dark"
          value={form?.password ?? ''}
          onChange={onChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          color="dark"
          value={form?.confirmPassword ?? ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name="name"
          placeholder="이름"
          color="dark"
          value={form?.name ?? ''}
          onChange={onChange}
        />

        <div className="address-row">
          <Input
            type="text"
            name="zipCode"
            placeholder="우편번호"
            color="dark"
            value={form?.zipCode ?? ''}
            onChange={onChange}
          />
          <button type="button">주소찾기</button>
        </div>

        <Input
          type="text"
          name="address"
          placeholder="집주소"
          color="dark"
          value={form?.address ?? ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name="addressSub"
          placeholder="나머지 주소"
          color="dark"
          value={form?.addressSub ?? ''}
          onChange={onChange}
        />

        <div className="row">
          <div className="tit">성별</div>
          <div className="radio-buttons">
            <span onClick={() => onClick('gender', 'FEMALE')}>
              {form?.gender === 'FEMALE' ? (
                <MdRadioButtonChecked />
              ) : (
                <MdRadioButtonUnchecked />
              )}
              여성
            </span>
            <span onClick={() => onClick('gender', 'MALE')}>
              {form?.gender === 'MALE' ? (
                <MdRadioButtonChecked />
              ) : (
                <MdRadioButtonUnchecked />
              )}
              남성
            </span>
          </div>
        </div>
        <div className="row">
          <div className="tit">생년월일</div>
          <div>
            <DatePicker
              selected={form?.birthDt ?? ''}
              onChange={(date) => onSelectDate(date)}
            />
          </div>
        </div>
      </StyledForm>
    </>
  )
}

export default React.memo(JoinForm)
