import Head from "next/head"
import Link from "next/link"
import React from "react"

type PropsBaseLayout = {
    children: React.ReactNode
}

export const BaseLayout: React.FC<PropsBaseLayout> = ({ children }) => {
    return <>
        <Head>
            <title>Profile</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main >
            {children}
        </main>
        <footer className="bg-white fixed bottom-0">
            {/* <Link href="/">imprint</Link> */}
            <Link href="/"/>
        </footer>
    </>
}