import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { NextAuthProvider } from "@/components/general/providers";
import "./globals.css";
import AppBar from "@/components/general/appBar";
import dynamic from "next/dynamic";
const ClientStyledContainer = dynamic(
  () => import("@/components/general/styledContainer"),
  { ssr: false },
);

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextAuthProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppBar />
              <ClientStyledContainer>{props.children}</ClientStyledContainer>
            </ThemeProvider>
          </NextAuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
