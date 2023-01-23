import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { Bride } from '@/types/contentTypes';
import SimpleBrideShowcase from './SimpleBrideShowcase';

interface Props {
  layout: AVAILABLE_LAYOUT;
  husband: Bride;
  wife: Bride;
}

export default function BrideShowcase({ layout, husband, wife }: Props) {
  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleBrideShowcase husband={husband} wife={wife} />;
    default:
      return <div>default layout</div>;
  }
}

BrideShowcase.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
