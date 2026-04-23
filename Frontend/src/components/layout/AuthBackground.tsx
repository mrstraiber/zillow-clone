import Image from 'next/image';
export default function AuthBackground() {
  const backgroundUrl: string =
    'https://delivery.digitalassets.zillowgroup.com/api/public/content/full_login_bg_downloadOriginal.webp?v=c820f074';
  return (
    <div className="relative order-2 sm:basis-4/5 h-screen w-full">
      <Image
        src={backgroundUrl}
        fill={true}
        loading="eager"
        className="object-cover"
        alt="Picture of a house and family"
      />
    </div>
  );
}
