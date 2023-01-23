import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { RundownEvent } from '@/types/contentTypes';

import SimpleRundown from './SimpleRundown';

interface Props {
  events: RundownEvent[];
}

export default function Rundown({ events }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleRundown events={events} />;
    default:
      return <div>default layout</div>;
  }
}
