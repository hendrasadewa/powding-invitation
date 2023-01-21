import { AVAILABLE_LAYOUT } from '@/constants/theme';
import SimpleLanding from './SimpleLanding';

interface Props {
  title: string;
  date: Date;
  imgSrc: string;
  layout: AVAILABLE_LAYOUT;
}

export default function Landing({ title, date, imgSrc, layout }: Props) {
  switch (layout) {
    case AVAILABLE_LAYOUT.SIMPLE:
      return <SimpleLanding title={title} date={date} imgSrc={imgSrc} />;

    default:
      return <div>default</div>;
  }
}

Landing.defaultProps = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
