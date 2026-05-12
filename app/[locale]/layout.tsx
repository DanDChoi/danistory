import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { getAllPosts } from '@/lib/blog';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  return (
    <NextIntlClientProvider messages={messages}>
      <Header categories={categories} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
