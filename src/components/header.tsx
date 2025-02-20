import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] bg-white">
      <div className="relative flex h-[71px] justify-center border-b border-[#ececec]">
        <Image
          className="object-cover"
          src="/images/recipe-ai.png"
          alt="Recipe AI Logo"
          fill
        />
      </div>
    </header>
  );
}
