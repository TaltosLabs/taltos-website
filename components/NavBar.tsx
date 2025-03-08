import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Company Logo (centered) */}
        <div className="flex-1 flex justify-center absolute left-1/2 -translate-x-1/2 pt-24">
          <Link href="https://taltos.ch">
            <Image
              src="/taltos-logo.png"
              alt="Taltos Logo"
              width={120}
              height={40}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* LinkedIn Link */}
        <div className='flex-1 flex justify-end'>
            <Link href="https://www.linkedin.com/in/szimhar/" target="_blank">
                <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={48}
                    height={48}
                    className="hover:opacity-75 transition-opacity"
                />
            </Link>

        </div>
        
      </div>
    </nav>
  );
}
