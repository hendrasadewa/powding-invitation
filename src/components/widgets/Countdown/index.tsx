import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';

import SimpleCountdown from './SimpleCountdown';

interface Props {
  targetDate: Date;
}

export default function Countdown({ targetDate }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleCountdown targetDate={targetDate} />;

    default:
      return <div>default</div>;
  }
}
