import BrideShowcase from '@/components/widgets/BrideShowcase';
import Countdown from '@/components/widgets/Countdown';
import Gift from '@/components/widgets/Gift';
import Landing from '@/components/widgets/Landing';
import Quote from '@/components/widgets/Quote';
import RSVP from '@/components/widgets/RSVP';
import Rundown from '@/components/widgets/Rundown';
import { AVAILABLE_LAYOUT } from '@/constants/theme';
import { Content } from '@/types/contentTypes';
import { MOCK_CONTENT } from '@/__mocks__/content.mock';
import Head from 'next/head';

export default function Home() {
  const content: Content = MOCK_CONTENT;
  const selectedLayout: AVAILABLE_LAYOUT = AVAILABLE_LAYOUT.SIMPLE;

  return (
    <main>
      <Head>
        <title>
          Powdding Invitation : {content.event.name} |{' '}
          {content.event.eventDate.toString()}
        </title>
      </Head>
      <section id="landing">
        <Landing
          layout={selectedLayout}
          date={content.event.eventDate}
          imgSrc={content.event.coverImgSrc}
          title={content.event.name}
        />
      </section>
      <section id="quote">
        <Quote
          layout={selectedLayout}
          content={content.quote.content}
          source={content.quote.source}
        />
      </section>
      <section id="bride">
        <BrideShowcase
          layout={selectedLayout}
          husband={content.bride.husband}
          wife={content.bride.wife}
        />
      </section>
      <section id="countdown">
        <Countdown
          layout={selectedLayout}
          targetDate={content.event.eventDate}
        />
      </section>
      <section id="rundown">
        <Rundown layout={selectedLayout} events={content.rundown} />
      </section>
      <section id="reservation">
        <RSVP
          choices={content.reservations.choices}
          title={content.reservations.title}
          layout={selectedLayout}
        />
      </section>
      <section id="gift">
        <Gift
          layout={selectedLayout}
          accounts={content.gift.accounts}
          label={content.gift.label}
          title={content.gift.title}
        />
      </section>
    </main>
  );
}
