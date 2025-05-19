import { Geist } from "next/font/google";
// import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Inventra Inventory Management",
  description: "Next.js + Supabase Inventory Management System",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="">
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <main className="">
          <div className="flex flex-col min-h-screen">
            <NavBar2 />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
