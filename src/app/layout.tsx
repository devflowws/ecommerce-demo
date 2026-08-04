import type { Metadata } from "next";
import { Sora, DM_Serif_Display } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { LanguageProvider } from "@/lib/i18n/language-context";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const serifDisplay = DM_Serif_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AMA — Wax fashion & craftsmanship, delivered in Lomé",
  description:
    "AMA is a Togolese fashion house: wax, fabrics, accessories and local craftsmanship, delivered in Lomé and payable with Mobile Money.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${serifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-100 text-ink-900">
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
