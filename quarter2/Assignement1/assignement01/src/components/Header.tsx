// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Canon Website</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>
    </header>
  );
}


