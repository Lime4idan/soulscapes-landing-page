import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("host") ?? "localhost:3000";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const description =
    "Soulscapes is a calm, sensory-friendly desktop experience. Play the free demo on GX.Games.";

  return {
    metadataBase: base,
    title: "Soulscapes — a game about finding calm",
    description,
    icons: { icon: "/soulscapes-menu.png" },
    openGraph: {
      title: "Soulscapes",
      description,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: new URL("/soulscapes-menu.png", base).toString(),
          width: 1216,
          height: 774,
          alt: "Soulscapes — a game about finding calm",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Soulscapes",
      description,
      images: [new URL("/soulscapes-menu.png", base).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
