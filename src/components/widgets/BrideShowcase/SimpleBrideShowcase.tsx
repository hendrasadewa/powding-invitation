import { Bride } from '@/types/contentTypes';

import SimpleBrideItem from './SimpleBrideItem';

interface Props {
  husband: Bride;
  wife: Bride;
}

export default function SimpleBrideShowcase({ husband, wife }: Props) {
  return (
    <div className="my-24 flex flex-col justify-center items-center gap-12">
      <h1 className="text-center uppercase text-2xl">The wedding of</h1>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center relative max-w-screen-lg gap-8 lg:gap-2">
        <SimpleBrideItem
          description={wife.description}
          name={wife.name}
          photoSrc={wife.photoSrc}
          socials={wife.social}
        />
        <div className="text-4xl font-cursive">&amp;</div>
        <SimpleBrideItem
          description={husband.description}
          name={husband.name}
          photoSrc={husband.photoSrc}
          socials={husband.social}
        />
      </div>
    </div>
  );
}
