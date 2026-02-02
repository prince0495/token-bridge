export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#050505] text-[#00f2ff] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#00f2ff 1px, transparent 1px), linear-gradient(90deg, #00f2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="z-10 text-center px-4">
        <h1 className="text-8xl font-black mb-2 tracking-tighter animate-pulse" 
            style={{ textShadow: '3px 3px #ff00c1' }}>
          404
        </h1>
        
        <h2 className="text-xl md:text-2xl font-mono mb-6 uppercase tracking-widest text-white">
          [ Signal Lost: Node Offline ]
        </h2>

        <p className="max-w-md mx-auto mb-10 text-gray-400 font-light leading-relaxed">
          The transaction you are looking for has been purged from the mempool or the block header is invalid. 
        </p>

        <a
          href="/" 
          className="inline-block px-8 py-3 border-2 border-[#00f2ff] font-bold uppercase tracking-widest 
                     hover:bg-[#00f2ff] hover:text-black hover:shadow-[0_0_25px_#00f2ff] 
                     transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
        >
          Re-establish Connection
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]"></div>
    </main>
  );
}