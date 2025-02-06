'use server'
import { redirect } from 'next/navigation'

/**
 * 회원가입 처리
 * @param params : 쿼리스트링값
 * @param formData
 */
export const processJoin = async (params, formData: FormData) => {
  const redirectUrl = params?.get('redirectUrl') ?? '/member/login'
  const form = {},
    errors = {}
  let hasErrors = false

  for (const [key, value] of formData.entries()) {
    form[key] = value
  }

  console.log('form', form)

  // 회원 가입 완료 후 이동
  redirect(redirectUrl)
}

/**
 * 로그인 처리
 *
 * @param params
 * @param formData
 */
export const processLogin = async (params, formData: FormData) => {}
