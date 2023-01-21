import dayjs from 'dayjs';
import Image from 'next/image';

interface Props {
  title: string;
  date: Date;
  imgSrc: string;
}

export default function SimpleLanding({ title, date, imgSrc }: Props) {
  const formattedDate = dayjs(date).format('DD | MM | YYYY');
  return (
    <div className="relative my-24">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="arc-mask-image">
          <Image alt="brides" src={imgSrc} width={320} height={380} />
        </div>
        <h1 className="text-center font-cursive text-4xl">{title}</h1>
        <p className="text-center font-cursive text-lg">{formattedDate}</p>
      </div>
    </div>
  );
}
