 
import './globals.css'
import type { Metadata } from 'next' 
import Providers from './providers'
import { ClerkProvider } from '@clerk/nextjs' 

 
export const metadata: Metadata = {
  title: 'La Store',
  description: 'Buy anything with La Store Commerce',
  icons: ['/commerce.svg']
}

export default function RootLayout({
  children 
}: {
  children: React.ReactNode 
}) {
 

  
  return (
      <html lang="en">
        <head>
          <link rel='icon' href='/commerce.svg' type='svg' sizes='32x32' />
        </head>
        <body className=''>   
          <ClerkProvider> 
            <Providers>
              {children}
            </Providers>
          </ClerkProvider>
        </body>
      </html>
  )
}
