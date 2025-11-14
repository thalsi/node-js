# url — Parse and Format URLs (Node.js)

url module in Node.js is used to:
✔ Parse (break) a URL into parts
✔ Format (join) parts to create a URL
✔ Work with query strings
✔ Work with URL class (modern method)

Node.js has two ways to use URLs:

- Legacy URL API (require('url'))
- WHATWG URL API (new, recommended)


## 1. WHATWG URL API (Recommended)

✔ Create / Parse a URL
```
const { URL } = require('url');

const myUrl = new URL('https://example.com:8080/path/page?name=thasleeh&age=24#section2');

console.log(myUrl);

```

```
URL {
  href: 'https://example.com:8080/path/page?name=thasleeh&age=24#section2',
  origin: 'https://example.com:8080',
  protocol: 'https:',
  host: 'example.com:8080',
  hostname: 'example.com',
  port: '8080',
  pathname: '/path/page',
  search: '?name=thasleeh&age=24',
  searchParams: URLSearchParams { 'name' => 'thasleeh', 'age' => '24' },
  hash: '#section2'
}

```

## URL Parts (Explained)

| Property       | Meaning           | Example                 |
| -------------- | ----------------- | ----------------------- |
| `protocol`     | Scheme            | `https:`                |
| `hostname`     | Domain only       | `example.com`           |
| `host`         | Domain + port     | `example.com:8080`      |
| `port`         | Port number       | `8080`                  |
| `pathname`     | Path              | `/path/page`            |
| `search`       | Full query        | `?name=thasleeh&age=24` |
| `searchParams` | Key-value queries | name=thasleeh           |
| `hash`         | Anchor            | `#section2`             |

## Using searchParams

### ✔ Get param
```
console.log(myUrl.searchParams.get('name'));

```
### ✔ Add param
```
myUrl.searchParams.append('city', 'Malappuram');
console.log(myUrl.href);

```

### ✔ Delete param

```
myUrl.searchParams.delete('age');

```

### ✔ Loop all

```
myUrl.searchParams.forEach((value, key) => {
    console.log(key, value);
});

```

## 2. Formatting (Convert object → URL string)

```
console.log(myUrl.toString());

```

## Legacy API (Older, rarely used now)

```
const url = require('url');

const parsed = url.parse('https://example.com/products?id=10&cat=mobile');

console.log(parsed.hostname);  // example.com
console.log(parsed.query);     // id=10&cat=mobile

```