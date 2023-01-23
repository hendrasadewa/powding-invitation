import LayoutProvider from '@/components/global/LayoutProvider';
import SEO from '@/components/global/SEO';
import BrideShowcase from '@/components/widgets/BrideShowcase';
import Countdown from '@/components/widgets/Countdown';
import Gift from '@/components/widgets/Gift';
import Landing from '@/components/widgets/Landing';
import Quote from '@/components/widgets/Quote';
import RSVP from '@/components/widgets/RSVP';
import Rundown from '@/components/widgets/Rundown';

import { Content } from '@/types/contentTypes';
import { LayoutConfig } from '@/types/layoutTypes';

import { MOCK_CONTENT, MOCK_LAYOUT_CONFIG } from '@/__mocks__/content.mock';

export default function Home() {
  const content: Content = MOCK_CONTENT;
  const layoutConfig: LayoutConfig = MOCK_LAYOUT_CONFIG;

  return (
    <main>
      <SEO
        title={content.landing.name}
        imageSrc={content.landing.coverImgSrc}
      />
      <LayoutProvider selectedLayout={layoutConfig.layout}>
        <section id="landing">
          <Landing
            date={content.landing.eventDate}
            imgSrc={content.landing.coverImgSrc}
            title={content.landing.name}
          />
        </section>
        <section id="quote">
          <Quote
            content={content.quote.content}
            source={content.quote.source}
          />
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
          <Rundown events={content.rundown} />
        </section>
        <section id="reservation">
          <RSVP
            layout={layoutConfig.layout}
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
      </LayoutProvider>
    </main>
  );
}
