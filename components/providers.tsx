'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { usePathname } from 'next/navigation'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='dark'
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      richColors
      closeButton
      position='top-center'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  const isChat = pathName.startsWith('/chat')
  const isZe = pathName.startsWith('/ze')

  if (isChat) return children
  if (isZe) return children
  return (
    <section className='flex w-full flex-col'>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </section>
  )
}
