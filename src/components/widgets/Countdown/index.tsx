import { AVAILABLE_LAYOUT } from '@/constants/layout';
import SimpleCountdown from './SimpleCountdown';

interface Props {
  targetDate: Date;
  layout: AVAILABLE_LAYOUT;
}

export default function Countdown({ targetDate, layout }: Props) {
  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleCountdown targetDate={targetDate} />;

    default:
      return <div>default</div>;
  }
}

Countdown.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
