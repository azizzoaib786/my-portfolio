import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Aziz Zoaib | DevOps Engineering Leader',
  description: 'Aziz Zoaib is a DevOps Engineering Leader, Architect and Cloud Native Specialist based in Dubai, UAE.',
  keywords: ['Aziz Zoaib', 'DevOps', 'Platform Engineering', 'Kubernetes', 'AWS', 'Terraform', 'OpenShift', 'SRE', 'CI/CD', 'Dubai'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
