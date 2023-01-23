// Global Components
import LayoutProvider from '@/components/global/LayoutProvider';
import SEO from '@/components/global/SEO';

// Template
import Template from '@/components/template';

// Types
import { Content } from '@/types/contentTypes';
import { LayoutConfig } from '@/types/layoutTypes';

// Mocks | for examples
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
        <Template content={content} />
      </LayoutProvider>
    </main>
  );
}
