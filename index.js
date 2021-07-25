const mockLinks = [
    'www.a.site.com',
    'www.b.site.com',
    'www.c.site.com',
    'www.d.site.com',
    'www.e.site.com',
    'www.f.site.com',
  ];
  
  const getHTML = url => `
                <html lang="en-us">
                  <head>
                      <title>Best Parser Evaaa</title>
                      <meta name="description" content="${url}">
                  </head>
                  <body>
                      <div>
                          <h1>Hi!</h1>
                      </div>
                  </body>
                </html>`;
  
  const getRandomIndex = ({ min, max }) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  const getRandomElementsFromArray = ({ links, end }) => links.sort(() => Math.random() - Math.random()).slice(0, end);
  
  const parse = (url) => {
    const end = getRandomIndex({ min: 0, max: mockLinks.length });
  
    return {
      html: getHTML(url),
      links: getRandomElementsFromArray({ links: mockLinks, end }),
    };
  };
  
  module.exports = parse;
  