// Widgets
import BrideShowcase from '@/components/widgets/BrideShowcase';
import Countdown from '@/components/widgets/Countdown';
import Gift from '@/components/widgets/Gift';
import Landing from '@/components/widgets/Landing';
import Quote from '@/components/widgets/Quote';
import RSVP from '@/components/widgets/RSVP';
import Rundown from '@/components/widgets/Rundown';

// Types
import { Content } from '@/types/contentTypes';

// Mocks | For examples
import { MOCK_CONTENT, MOCK_LAYOUT_CONFIG } from '@/__mocks__/content.mock';

interface Props {
  content: Content;
}

export default function SimpleTemplate({ content }: Props) {
  return (
    <>
      <section id="landing">
        <Landing
          date={content.landing.eventDate}
          imgSrc={content.landing.coverImgSrc}
          title={content.landing.name}
        />
      </section>
      <section id="quote">
        <Quote content={content.quote.content} source={content.quote.source} />
      </section>
      <section id="bride">
        <BrideShowcase
          husband={content.bride.husband}
          wife={content.bride.wife}
        />
      </section>
      <section id="countdown">
        <Countdown targetDate={content.countdown.targetDate} />
      </section>
      <section id="rundown">
        <Rundown events={content.rundown.events} />
      </section>
      <section id="reservation">
        <RSVP
          choices={content.reservations.choices}
          title={content.reservations.title}
        />
      </section>
      <section id="gift">
        <Gift
          accounts={content.gift.accounts}
          label={content.gift.label}
          title={content.gift.title}
        />
      </section>
    </>
  );
}

SimpleTemplate.defaultProps = {
  content: MOCK_CONTENT,
  layoutConfig: MOCK_LAYOUT_CONFIG,
};
