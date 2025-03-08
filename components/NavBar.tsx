import Image from 'next/image';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Affiliates Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-blue-600">
            Affiliates <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="https://affiliate1.com" target="_blank">
                Affiliate 1
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://affiliate2.com" target="_blank">
                Affiliate 2
              </Link>
            </DropdownMenuItem>
            {/* Add more affiliates here */}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Company Logo (centered) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* LinkedIn Link */}
        <Link href="https://linkedin.com/in/yourprofile" target="_blank">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={28}
            height={28}
            className="hover:opacity-75 transition-opacity"
          />
        </Link>
      </div>
    </nav>
  );
}
