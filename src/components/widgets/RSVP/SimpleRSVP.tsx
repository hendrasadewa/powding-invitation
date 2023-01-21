import { Option } from '@/types/contentTypes';
import { FormEvent, useState } from 'react';

interface Props {
  title: string;
  choices: Option[];
  onSubmit: (value: string) => void;
}

export default function SimpleRSVP({ title, choices, onSubmit }: Props) {
  const [selected, setSelected] = useState<string>('');

  const handleChoiceClick = (value: string) => () => {
    setSelected(value);
  };

  const handleSubmitChoice = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(selected);
  };

  return (
    <div className="flex items-center justify-center relative h-64">
      <div className="bg-zinc-800 w-1/3 h-64 absolute z-0 left-0" />
      <div className="bg-zinc-600 w-2/3 h-64 absolute z-0 right-0" />
      <div className="flex flex-col gap-6 items-center justify-center z-10 w-full max-w-lg">
        <div>
          <h2 className="text-white text-3xl font-bold text-center">RSVP</h2>
          <p className="font-cursive text-white text-xl">{title}</p>
        </div>
        <form
          onSubmit={handleSubmitChoice}
          className="flex flex-col gap-4 w-full px-4"
        >
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            {choices.map((choice) => (
              <button
                key={choice.id}
                className="btn btn-outline btn-block btn-sm rounded-3xl bg-white"
                onClick={handleChoiceClick(choice.value)}
              >
                {choice.label}
              </button>
            ))}
          </div>
          <button className="btn btn-outline btn-block btn-sm rounded-3xl bg-white">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
