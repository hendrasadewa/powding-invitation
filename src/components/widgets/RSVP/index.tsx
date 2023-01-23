import { useContext } from 'react';

import { LayoutContext } from '@/components/global/LayoutProvider';
import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { Option } from '@/types/contentTypes';

import SimpleRSVP from './SimpleRSVP';

interface Props {
  layout: AVAILABLE_LAYOUT;
  title: string;
  choices: Option[];
}

export default function RSVP({ title, choices }: Props) {
  const selectedLayout = useContext(LayoutContext);

  const handleSubmit = (value: string) => {};

  switch (selectedLayout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return (
        <SimpleRSVP title={title} choices={choices} onSubmit={handleSubmit} />
      );
    default:
      return <div>default layout</div>;
  }
}
