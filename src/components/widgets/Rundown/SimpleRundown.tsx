import { RundownEvent } from '@/types/contentTypes';
import SimpleRundownItem from './SimpleRundownItem';

interface Props {
  events: RundownEvent[];
}

function SimpleRundown({ events }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      {events.map((event) => (
        <SimpleRundownItem
          address={event.address}
          dateTimeEnd={event.dateTimeEnd}
          dateTimeStart={event.dateTimeStart}
          locationName={event.locationName}
          logoSrc={event.logoSrc || ''}
          mapLink={event.mapLink}
          name={event.name}
          key={event.id}
        />
      ))}
    </div>
  );
}

export default SimpleRundown;
