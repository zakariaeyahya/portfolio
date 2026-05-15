"use client";

import portfolioContent from "@/data/portfolio-content";

export default function Footer() {
  const { footer } = portfolioContent;

  return (
    <footer className="py-8 border-t border-gray-300/50 dark:border-gray-800/50">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
