export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-[#1a1b18] w-full py-20 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div>
          <span className="font-['Lexend'] font-medium text-xl text-primary">Valmo Fitness</span>
          <p className="font-['Lexend'] font-light text-sm leading-relaxed text-[#8c8d75] mt-2 max-w-xs">
            Strength, Balance, and Longevity through expert guidance and a modern sanctuary approach.
          </p>
        </div>
        <div className="flex gap-8 font-['Lexend'] font-light text-sm text-[#8c8d75]">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Studio Policy</a>
        </div>
        <p className="font-['Lexend'] font-light text-sm text-[#8c8d75]">
          © {new Date().getFullYear()} Valmo Fitness. Strength, Balance, and Longevity.
        </p>
      </div>
    </footer>
  );
}
