import SocialTag from '@/components/global/SocialTag';
import { SocialAccount } from '@/types/contentTypes';
import Image from 'next/image';

interface Props {
  name: string;
  description: string;
  photoSrc: string;
  socials: SocialAccount[];
}

export default function SimpleBrideItem({
  name,
  description,
  photoSrc,
  socials,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center relative">
      <Image
        className="rounded-full"
        src={photoSrc}
        height={200}
        width={200}
        alt={name}
      />
      <div className="flex flex-col gap-2">
        <p className="text-center text-4xl capitalize font-cursive">{name}</p>
        <p className="capitalize">{description}</p>
      </div>
      {socials.map(({ id, account, type }) => (
        <SocialTag id={id} account={account} type={type} key={id} />
      ))}
    </div>
  );
}
