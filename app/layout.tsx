import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/reused/navigation";
import { Footer } from "@/components/reused/footer";
import { cn } from "@/lib/utils";
import { ImageKitProvider } from "@imagekit/next";
import IKProvider from "@/providers/IKProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valmo Fitness | Strength. Balance. Longevity.",
  description:
    "Redefining movement through the synthesis of athletic rigor and therapeutic grace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        lexend.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <IKProvider>
        <body className="min-h-full flex flex-col ">
          <Navigation />
          {children}
          <Footer />
        </body>
      </IKProvider>
    </html>
  );
}
