import { AVAILABLE_LAYOUT } from '@/constants/theme';
import { BankAccount } from '@/types/contentTypes';
import SimpleGiftShowcase from './SimpleGiftShowcase';

interface Props {
  layout: AVAILABLE_LAYOUT;
  title: string;
  label: string;
  accounts: BankAccount[];
}

export default function Gift({ layout, title, label, accounts }: Props) {
  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return (
        <SimpleGiftShowcase accounts={accounts} label={label} title={title} />
      );

    default:
      return <div>default</div>;
  }
}

Gift.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
