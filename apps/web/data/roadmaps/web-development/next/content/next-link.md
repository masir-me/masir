## Next link

Next برای هدایت کردن کاربران به صفحات مختلف داخل سایت، یک کامپوننت به نام Link تعبیه کرده است که می توانید بدین شکل از آن استفاده کنید:

```javascript
import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  );
}

export default Home;
```

منبع:

> https://nextjs.org/docs/api-reference/next/link
