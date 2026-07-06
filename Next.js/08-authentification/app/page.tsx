import AuthForm, { AuthMode } from '@/components/auth-form';

interface SearchParamsType {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: SearchParamsType) {
  const { mode } = await searchParams
  const formMode: AuthMode = mode === 'signup' ? 'signup' : 'login'; 
  return <AuthForm mode={formMode}/>;
}
