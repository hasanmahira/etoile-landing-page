import React from "react"
import cn from "classnames"

import Header from "./Header"
import Footer from "./Footer"
import Seo from "./Seo"

export default function Layout({ className, children }) {
  return (
    <div className={cn("overflow-hidden bg-midnight min-h-screen", className)}>
      <Seo />
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}