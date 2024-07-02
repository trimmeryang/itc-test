import Head from "next/head";
import { useRouter } from "next/router";

import { absoluteUrl } from "lib/utils";

export interface MetaProps {
  title?: string;
  description?: string;
  path?: string;
}

export function Meta({ title, description }: MetaProps) {
  const router = useRouter();

  return (
    <Head>
      <link
        key="canonical_link"
        rel="canonical"
        href={absoluteUrl(router.asPath !== "/" ? router.asPath : "")}
      />
      <title>{`${title}`}</title>
      <meta key="description" name="description" content={description} />
      <meta
        key="og_image"
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/meta.jpg`}
      />
      <meta key="og_image_width" property="og:image:width" content="800" />
      <meta key="og_image_height" property="og:image:height" content="600" />
    </Head>
  );
}
