import '../styles/globals.css'
import { Work_Sans } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: {
    default: 'Feymind',
    template: '%s | Feymind',
  },
  description: 'Feymind es una plataforma de divulgación y educación en linea que se encuentra actualmente en desarrollo'
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='es' className={workSans.className}>
        <body>{children}</body>
      </html>
      <Analytics />
    </>
  )
}
