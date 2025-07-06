import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" />
        <title>DermaOffers | عروض العناية بالبشرة</title>
      </head>
      <body>{children}</body>
    </html>
  )
}