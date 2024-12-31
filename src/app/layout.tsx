import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import AllProviders from "@/all-providers";
import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Drink Water - Stay Hydrated",
  description:
    "Drink Water helps you stay hydrated by sending reminders to drink water and tracking your daily water intake goals. Start building a healthy hydration habit today!",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AllProviders>
          <CssBaseline />
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Container
              maxWidth="xl"
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
              role="main"
              component="main">
              {children}
            </Container>
            <Footer />
          </div>
        </AllProviders>
      </body>
    </html>
  );
}
