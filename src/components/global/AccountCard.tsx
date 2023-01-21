import { AVAILABLE_BANK, BANK_ACCOUNT_DETAILS } from '@/constants/contents';
import Image from 'next/image';

interface Props {
  owner: string;
  accountNumber: string;
  bank: AVAILABLE_BANK;
  onClick: (copiedText: string) => void;
}

function AccountCard({ owner, accountNumber, bank, onClick }: Props) {
  const { logo, accentColor } = BANK_ACCOUNT_DETAILS[bank];

  const handleClick = () => {
    onClick(accountNumber.split(' ').join(''));
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center rounded-lg shadow hover:shadow-lg focus:shadow-lg"
    >
      <div
        className="px-2 pt-4 w-96 flex flex-col justify-between gap-4"
        style={{ color: accentColor }}
      >
        <Image src={logo} width={120} height={200} alt={owner} />
        <div>
          <p className="text-sm">Nomor Rekening:</p>
          <p className="font-mono text-xl tracking-wide">{accountNumber}</p>
        </div>
        <p>{owner}</p>
      </div>
      <div style={{ color: accentColor }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fill-opacity="1"
            d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,186.7C672,171,768,181,864,186.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default AccountCard;
