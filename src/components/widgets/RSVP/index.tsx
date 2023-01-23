import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { Option } from '@/types/contentTypes';
import SimpleRSVP from './SimpleRSVP';

interface Props {
  layout: AVAILABLE_LAYOUT;
  title: string;
  choices: Option[];
}

export default function RSVP({ layout, title, choices }: Props) {
  const handleSubmit = (value: string) => {};

  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return (
        <SimpleRSVP title={title} choices={choices} onSubmit={handleSubmit} />
      );
    default:
      return <div>default layout</div>;
  }
}

RSVP.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
