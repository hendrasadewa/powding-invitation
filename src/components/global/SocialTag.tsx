import { SOCIAL_ACCOUNT, SOCIAL_ACCOUNT_DETAILS } from '@/constants/contents';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  type: SOCIAL_ACCOUNT;
  account: string;
}

export default function SocialTag({ type, account }: Props) {
  const { logo, name, url } = SOCIAL_ACCOUNT_DETAILS[type];
  const href = `${url}/${account}`;

  return (
    <Link href={href} className="flex items-center gap-2">
      <Image src={logo} height={18} width={18} alt={`${type} logo`} />
      <p>{account}</p>
    </Link>
  );
}

SocialTag.defaultProps = {
  type: SOCIAL_ACCOUNT.INSTAGRAM,
};
