import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { RundownEvent } from '@/types/contentTypes';
import SimpleRundown from './SimpleRundown';

interface Props {
  layout: AVAILABLE_LAYOUT;
  events: RundownEvent[];
}

export default function Rundown({ layout, events }: Props) {
  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleRundown events={events} />;
    default:
      return <div>default layout</div>;
  }
}

Rundown.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
