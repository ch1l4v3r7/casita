import Head from 'next/head'
import Link from 'next/link'
import PageWrapper from '../resources/components/page-wrapper/'

export async function getServerSideProps(ctx) {
  const {locale, locales, defaultLocale} = ctx
  const t = await import(`../resources/locales/${locale}/common`).then(({default: common}) => common)
  return {
    props: {t, locale, locales, defaultLocale}
  }
}

export default function Home({t, locale, locales, defaultLocale}) {
  return (
    <>
      <Head>
        <title>{t['name']}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <PageWrapper locale={locale}>
        {locales.map(locale => (
          <div key={locale}>
            <Link href="/" locale={locale}>
              <a>{locale}</a>
            </Link>
          </div>
        ))}
      </PageWrapper>
    </>
  )
}