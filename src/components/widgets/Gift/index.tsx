import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { BankAccount } from '@/types/contentTypes';

import SimpleGiftShowcase from './SimpleGiftShowcase';

interface Props {
  title: string;
  label: string;
  accounts: BankAccount[];
}

export default function Gift({ title, label, accounts }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return (
        <SimpleGiftShowcase accounts={accounts} label={label} title={title} />
      );

    default:
      return <div>default</div>;
  }
}
