import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Patrick Odey",
  description: "Patrick Odey is a dedicated and accomplished software engineer with over 4 years of experience in the industry. Throughout his career, he has consistently demonstrated his expertise in various frontend and backend technologies, contributing to numerous successful projects. His journey has been marked by a continuous drive for learning and improvement, enabling him to become proficient in modern frameworks and tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
