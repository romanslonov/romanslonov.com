'use client';

import Script from 'next/script';

export default function UmamiAnalytics({ umamiId }: { umamiId: string }) {
  return (
    <Script
      strategy="lazyOnload"
      src="https://eu.umami.is/script.js"
      data-website-id={umamiId}
    ></Script>
  );
}
