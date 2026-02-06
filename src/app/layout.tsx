import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";
import LockScreen from "@/components/LockScreen";
import FooterSection from "@/components/footer/FooterSection";
import Navbar from "@/components/ui/Navbar";
import ContactSection from "@/components/contact/ContactSection";
const gopher = localFont({
  src: [
    {
      path: "../../public/fonts/Gopher-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gopher",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gopher.className} min-h-screen flex flex-col`}>
        <LockScreen />
        <Navbar />

        {/* Page content */}
        <main className="flex-grow">{children}</main>
        <ContactSection />
        <FooterSection />
      </body>
    </html>
  );
}
