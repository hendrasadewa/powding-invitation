import Head from 'next/head';

import { DEFAULT_SEO_CONTENT } from '../../constants/seo';

interface Props {
  title: string;
  descriptions: string;
  imageSrc: string;
  url: string;
}

export default function SEO({ title, descriptions, imageSrc, url }: Props) {
  return (
    <Head>
      <title>{`${title} | ${DEFAULT_SEO_CONTENT.title}`}</title>
      <meta content={descriptions} name="description" />
      <meta content={title} name="title" />

      {/* Facebook / Open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descriptions} />
      <meta property="og:image" content={imageSrc} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={descriptions} />
      <meta property="twitter:image" content={imageSrc} />

      {/* Favicons */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}

SEO.defaultProps = {
  title: 'Undangan Digital',
  descriptions: DEFAULT_SEO_CONTENT.description,
  imageSrc: '/img/undingin-filled.png',
  url: DEFAULT_SEO_CONTENT.url,
};
