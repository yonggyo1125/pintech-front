'use client'
import useUser from '../hooks/useUser'
import LoginContainer from '@/app/member/containers/LoginContainer'

export default function WithUserContainer(UserContainer) {
  const { isLogin } = useUser()

  return isLogin ? <UserContainer /> : <LoginContainer />
}
