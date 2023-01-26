import './globals.css'
import {Header} from "@/components/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body>
        <Header/>
        <main className={"bg-black text-gray-100 h-main"}>
            <div className={"container mx-auto"}>
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}
