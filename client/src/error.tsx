'use client'

export default function GlobalError() {
  return (
    <html>
      <body className="bg-black text-red-500 flex flex-col items-center justify-center h-screen">
        <h1>CRITICAL_CORE_FAILURE</h1>
        <button onClick={() => window.location.reload()}>Hard Reboot</button>
      </body>
    </html>
  )
}