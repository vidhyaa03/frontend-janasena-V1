import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value

  if (!token) {
    redirect('/login')
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}