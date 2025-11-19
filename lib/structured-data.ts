export const getProductStructuredData = (model: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: model.name,
    description: model.best_for,
    offers: {
      '@type': 'Offer',
      price: model.price_chf,
      priceCurrency: 'CHF',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Dietrich Kaffee'
      }
    }
  };
};

export const getBlogPostStructuredData = (post: {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    author: {
      '@type': 'Person',
      name: 'Mirko Dietrich'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dietrich Kaffee',
      url: 'https://dietrichkaffee.de'
    }
  };
};
