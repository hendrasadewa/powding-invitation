import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { Content } from '@/types/contentTypes';

import SimpleTemplate from './SimpleTemplate';

interface Props {
  content?: Content;
}

export default function Template({ content }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleTemplate content={content} />;
    default:
      return <div>default layout</div>;
  }
}
