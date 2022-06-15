new Crawler({
    appId: '4MDNJJW7KV',
    apiKey: '1ba1544563d6c98b94f00e28b85c1a48',
    rateLimit: 8,
    startUrls: ['https://wiki.chirophy.online/'],
    sitemaps: ['https://wiki.chirophy.online/sitemap.xml'],
    ignoreCanonicalTo: true,
    discoveryPatterns: ['https://wiki.chirophy.online/**'],
    actions: [
      {
        indexName: 'wiki',
        pathsToMatch: ['https://wiki.chirophy.online/**'],
        recordExtractor: ({ $, helpers }) => {
          // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
          const lvl0 =
            $(
              '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
            )
              .last()
              .text() || 'Documentation';
  
          return helpers.docsearch({
            recordProps: {
              lvl0: {
                selectors: '',
                defaultValue: lvl0,
              },
              lvl1: ['header h1', 'article h1'],
              lvl2: 'article h2',
              lvl3: 'article h3',
              lvl4: 'article h4',
              lvl5: 'article h5, article td:first-child',
              lvl6: 'article h6',
              content: 'article p, article li, article td:last-child',
            },
            indexHeadings: true,
            aggregateContent: true,
            recordVersion: 'v3',
          });
        },
      },
    ],
    initialIndexSettings: {
      YOUR_INDEX_NAME: {
        attributesForFaceting: [
          'type',
          'lang',
          'language',
          'version',
          'docusaurus_tag',
        ],
        attributesToRetrieve: [
          'hierarchy',
          'content',
          'anchor',
          'url',
          'url_without_anchor',
          'type',
        ],
        attributesToHighlight: ['hierarchy', 'content'],
        attributesToSnippet: ['content:10'],
        camelCaseAttributes: ['hierarchy', 'content'],
        searchableAttributes: [
          'unordered(hierarchy.lvl0)',
          'unordered(hierarchy.lvl1)',
          'unordered(hierarchy.lvl2)',
          'unordered(hierarchy.lvl3)',
          'unordered(hierarchy.lvl4)',
          'unordered(hierarchy.lvl5)',
          'unordered(hierarchy.lvl6)',
          'content',
        ],
        distinct: true,
        attributeForDistinct: 'url',
        customRanking: [
          'desc(weight.pageRank)',
          'desc(weight.level)',
          'asc(weight.position)',
        ],
        ranking: [
          'words',
          'filters',
          'typo',
          'attribute',
          'proximity',
          'exact',
          'custom',
        ],
        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        highlightPostTag: '</span>',
        minWordSizefor1Typo: 3,
        minWordSizefor2Typos: 7,
        allowTyposOnNumericTokens: false,
        minProximity: 1,
        ignorePlurals: true,
        advancedSyntax: true,
        attributeCriteriaComputedByMinProximity: true,
        removeWordsIfNoResults: 'allOptional',
        separatorsToIndex: '_',
      },
    },
  });