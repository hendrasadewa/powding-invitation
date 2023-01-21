import { CSSProperties } from 'react';

interface Props {
  label: string;
  value: number;
  disabled?: boolean;
}

export default function SimpleCountdownItem({ label, value }: Props) {
  const style = { '--value': value } as CSSProperties;

  return (
    <div className="flex flex-col">
      <span className="countdown text-5xl text-white">
        <span style={style}></span>
      </span>
      <span className="text-white">{label}</span>
    </div>
  );
}
