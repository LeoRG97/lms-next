import { SignUp } from '@clerk/nextjs'

// crear una página de registro con las convenciones de Clerk.js
// el directorio [[...sign-up]] es dinámico
export default function Page() {
  return <SignUp />
}