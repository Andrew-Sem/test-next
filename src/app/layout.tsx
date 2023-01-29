import './globals.css'
import {Header} from "@/app/components/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head/>
        <body>
        <Header/>
        <main className={"bg-zinc-900 text-zinc-100 min-h-main"}>
            <div className={"container mx-auto"}>
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}
