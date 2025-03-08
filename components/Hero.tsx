import Image from 'next/image';

export default function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <Image
        src="/taltos-banner.png"
        alt="Taltos Banner"
        width={1584}
        height={396}
        priority
        className="object-cover w-full h-auto"
      />
      {/* Overlay Content */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
