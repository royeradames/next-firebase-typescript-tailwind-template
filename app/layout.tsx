import React from 'react';
import type { Metadata } from 'next'
import { AuthProvider } from "../firebase/auth/auth";
import StoryblokProvider from "@/components/providers/StoryblokProvider";
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'RoyerAdames.com TechStack',
  description: 'Welcome to RoyerAdames.com TechStack',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <AuthProvider>
                <StoryblokProvider>
                    {children}
                </StoryblokProvider>
            </AuthProvider>
        </body>
      </html>
    )
  }