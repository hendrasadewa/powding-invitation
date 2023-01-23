import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';

import SimpleLanding from './SimpleLanding';

interface Props {
  title: string;
  date: Date;
  imgSrc: string;
}

export default function Landing({ title, date, imgSrc }: Props) {
  const selectedLayout = useContext(LayoutContext);

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleLanding title={title} date={date} imgSrc={imgSrc} />;

    default:
      return <div>default</div>;
  }
}
