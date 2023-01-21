import dayjs from 'dayjs';
import Image from 'next/image';

interface Props {
  address: string;
  dateTimeEnd: Date;
  dateTimeStart: Date;
  locationName: string;
  mapLink: string;
  name: string;
  logoSrc: string;
}

export default function SimpleRundownItem({
  address,
  dateTimeEnd,
  dateTimeStart,
  locationName,
  name,
  logoSrc,
}: Props) {
  const formatTime = (date: Date) => dayjs(date).format('HH.mm');

  const formattedStartDate = dayjs(dateTimeStart).format('dddd, D MMMM YYYY');
  const formattedDuration = [
    formatTime(dateTimeStart),
    formatTime(dateTimeEnd),
  ].join(' - ');

  return (
    <div className="flex flex-col items-center justify-between gap-4 p-4 py-8 rounded-3xl bg-zinc-600 w-80 my-12">
      <Image src={logoSrc} alt={name} height={64} width={64} />
      <h3 className="text-white text-4xl font-cursive">{name}</h3>
      <div className="flex flex-col items-center justify-between gap-1">
        <p className="text-white text-sm">{formattedStartDate}</p>
        <p className="text-white text-sm">{formattedDuration} WIB</p>
      </div>
      <div className="flex flex-col items-center justify-between gap-1">
        <h4 className="text-white font-bold uppercase">{locationName}</h4>
        <p className="text-white text-center text-sm">{address}</p>
      </div>
    </div>
  );
}
