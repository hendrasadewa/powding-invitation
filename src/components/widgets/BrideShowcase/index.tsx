import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { Bride } from '@/types/contentTypes';

import SimpleBrideShowcase from './SimpleBrideShowcase';

interface Props {
  husband: Bride;
  wife: Bride;
}

export default function BrideShowcase({ husband, wife }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleBrideShowcase husband={husband} wife={wife} />;
    default:
      return <div>default layout</div>;
  }
}
