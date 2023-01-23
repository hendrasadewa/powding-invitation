import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';

import SimpleQuote from './SimpleQuote';

interface Props {
  content: string;
  source: string;
}

export default function Quote({ content, source }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleQuote content={content} source={source} />;
    default:
      return <div>default layout</div>;
  }
}
