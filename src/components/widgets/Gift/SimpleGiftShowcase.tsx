import AccountCard from '@/components/global/AccountCard';
import { BankAccount } from '@/types/contentTypes';

interface Props {
  title: string;
  label: string;
  accounts: BankAccount[];
}

export default function SimpleGiftShowcase({ title, label, accounts }: Props) {
  const handleCardClick = (copiedText: string) => {
    navigator.clipboard.writeText(copiedText);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <header className="flex flex-col items-center justify-center max-w-lg gap-4">
        <h2 className="font-cursive text-4xl text-center">{title}</h2>
        <p className="text-center">{label}</p>
      </header>
      <div className="flex items-center justify-center gap-8">
        {accounts.map(({ bank, id, number, ownerName }) => (
          <AccountCard
            key={id}
            accountNumber={number}
            bank={bank}
            owner={ownerName}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}
