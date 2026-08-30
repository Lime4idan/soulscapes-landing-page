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
    "Soulscapes é uma experiência calma e sensorialmente acessível. Jogue a demo grátis no GX.Games.";

  return {
    metadataBase: base,
    title: "Soulscapes — um jogo sobre encontrar calma",
    description,
    icons: { icon: "/og.png" },
    openGraph: {
      title: "Soulscapes",
      description,
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: new URL("/og.png", base).toString(),
          width: 1733,
          height: 907,
          alt: "Soulscapes — um jogo sobre encontrar calma",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Soulscapes",
      description,
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
