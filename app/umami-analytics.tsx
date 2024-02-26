'use client';

import Script from 'next/script';

export default function UmamiAnalytics({ umamiId }: { umamiId: string }) {
  return (
    <Script defer src="https://eu.umami.is/script.js" data-website-id={umamiId}></Script>
  );
}
