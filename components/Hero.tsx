import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full">
      <Image
        src="/taltos-banner.png"
        alt="Taltos Banner"
        width={1584}
        height={396}
        priority
        className="object-cover w-full h-auto"
      />
    </div>
  );
}
