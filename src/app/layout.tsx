import { Providers }     from "./providers";
import localFont         from "next/font/local";
import { Metadata }      from "next";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@widgets/navbar";
import NextTopLoader from 'nextjs-toploader';
import { Toaster as ShadcnToaster } from "@shared/shadcn/components/toaster"


export const metadata: Metadata = {
  title: "Primi.box",
  description: "Лучший сервис доставки в мире!",
};

const myFont = localFont({
    src: "./fonts/BebasNeue Bold.ttf",
    variable: '--myfont'
})

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <title>PrimiBOX</title>
        <meta name="description" content={'PostaDriver'}/>
        <meta name="generator" content={'PostaDriver'}/>
        <link rel="manifest" href={"/manifest.json"}/>
        <meta name="keywords" content={["nextjs", "nextjs14", "next14", "pwa", "next-pwa"].join(", ")}/>
        <meta name="theme-color" media={"(prefers-color-scheme: dark)"} content={"#000000"}/>
        <meta name="author" content={"Primibox"}/>
        <meta
            name="viewport"
            content={"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"}
        />
        <link rel={"apple-touch-icon"} href={"/icons/icon-128x128.png"}/>
        <link rel={"icon"} href={"/icons/icon-128x128.png"}/>
      </head>
      <body
          className={`${myFont.className} antialiased dark`}
      >
      <Providers>
        <NextTopLoader showSpinner={false} color={'#1464e6'}/>
        <Navbar/>
        {children}
        <Toaster toastOptions={{
          style: {borderRadius: '100px', backgroundColor: '#222', color: 'white'}
        }}/>
        <ShadcnToaster/>
      </Providers>
      </body>
      </html>
  );
}
