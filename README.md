# mock-parser
Best parser evaaa

## Installation:
```
npm i @lusha/mock-parser
```

## Usage
```
const parse = require('@lusha/mock-parser');

console.log(parse('www.mysite.com'));
```

Possible Output:
```
{
  html: '<html lang="en-us"> ... </html>',
  links: [
    'www.a.site.com',
    'www.c.site.com',
    'www.f.site.com',
    'www.e.site.com'
  ]
}
```