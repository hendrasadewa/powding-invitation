import ReactCountdown from 'react-countdown';

import SimpleCountdownItem from './SimpleCountdownItem';

interface Props {
  targetDate: Date;
}

export default function SimpleCountdown({ targetDate }: Props) {
  return (
    <div className="w-full flex items-center justify-center relative my-12 h-64">
      <div className="bg-zinc-800 w-1/3 h-64 absolute z-0 left-0" />
      <div className="bg-zinc-600 w-2/3 h-64 absolute z-0 right-0" />
      <div className="flex flex-col items-center justify-between z-10 h-full p-4">
        <h2 className="text-4xl text-white font-cursive text-center">
          Save the Date
        </h2>
        <ReactCountdown
          date={targetDate}
          renderer={({ days, hours, minutes, seconds }) => {
            return (
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <SimpleCountdownItem label="hari" value={days} />
                <SimpleCountdownItem label="jam" value={hours} />
                <SimpleCountdownItem label="menit" value={minutes} />
                <SimpleCountdownItem label="detik" value={seconds} />
              </div>
            );
          }}
        />
        <button className="text-white btn btn-outline btn-sm rounded-full ">
          Add to Calendar
        </button>
      </div>
    </div>
  );
}
