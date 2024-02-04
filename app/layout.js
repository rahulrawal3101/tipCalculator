// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tip_Calculator",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{padding:'0px',margin:'0px'}}>{children}</body>
    </html>
  );
}
