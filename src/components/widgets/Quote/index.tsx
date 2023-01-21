import { AVAILABLE_LAYOUT } from '@/constants/theme';
import SimpleQuote from './SimpleQuote';

interface Props {
  layout: AVAILABLE_LAYOUT;
  content: string;
  source: string;
}

export default function Quote({ layout, content, source }: Props) {
  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleQuote content={content} source={source} />;
    default:
      return <div>default layout</div>;
  }
}

Quote.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
