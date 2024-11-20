import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container md:w-[500px] px-4 border h-max-screen h-screen bg-white mx-auto flex flex-col items-center justify-center space-y-10">
        <h1 className="text-6xl italianno">The Wedding</h1>

        <Image width={500} height={500} src="/assets/home.png" className="w-[40vh]" alt="" />

        <Link href="/invitation" className="bg-[var(--primary-color)] text-white rounded-full pt-2.5 pb-3 w-full shadow-lg capitalize font-bold text-center">
          Buka Undangan
        </Link>
      </div>
    </main>
  );
}