
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { NextAuthProvider } from '@/components/providers';
import "./globals.css";
import AppBar from '@/components/appBar';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>    
              <NextAuthProvider>
                  <ThemeProvider theme={theme}>
                  <CssBaseline />
                    <AppBar/>
                    <main>
                      {props.children}
                    </main>
                  </ThemeProvider>
              </NextAuthProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
