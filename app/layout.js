
import { MainLayout } from "@/components/mainlayout";
import "@/styles/globals.css";


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html>


      <body>
        <MainLayout>

          {children}

        </MainLayout>
      </body>

    </html>
  )
}
