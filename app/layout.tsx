import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from '@/components/ui/navigation';
import { ContentWrapper } from '@/components/ui/content-wrapper';
import { theme } from '@/lib/styles/theme';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snordale",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
            * {
              box-sizing: border-box;
              max-width: 100%;
              text-decoration: none;
            }
            
            html, body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
              width: 100%;
              height: 100%;
            }

            #root-container {
              display: flex;
              width: 100%;
              height: 100vh;
              overflow-x: hidden;
              overflow-y: scroll;
              align-items: flex-start; /* Ensure flex items align from the top */
              background-color: #ffffff; /* Ensure the root container has the main background color */
            }

            /* Customize scrollbar for Webkit browsers */
            #root-container::-webkit-scrollbar {
              width: 8px;
            }

            #root-container::-webkit-scrollbar-track {
              background: transparent;
            }

            #root-container::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.2);
              border-radius: 20px;
            }

            /* Firefox */
            #root-container {
              scrollbar-width: thin;
              scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
            }

            @media (max-width: 640px) {
              #root-container {
                flex-direction: column;
              }
            }
          `}
        </style>
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: inter.style.fontFamily,
        overflow: 'hidden', /* Prevent body from scrolling */
      }}>
        <div id="root-container">
          <Navigation />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </div>
      </body>
    </html>
  )
}
