// filepath: /C:/Projetos/register-computers/src/pages/login.tsx

import { signIn, signOut, useSession } from 'next-auth/react'
import Layout from '../app/layout'

const LoginPage = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <Layout>
        <h2>Welcome, {session.user?.name}</h2>
        <button onClick={() => signOut()}>Sign out</button>
      </Layout>
    )
  }

  return (
    <Layout>
      <h2>Login</h2>
      <button onClick={() => signIn()}>Sign in</button>
    </Layout>
  )
}

export default LoginPage
