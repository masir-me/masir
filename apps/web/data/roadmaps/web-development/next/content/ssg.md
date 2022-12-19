## SSG (Static-Site Generation)

صفحه ای که از SSG استفاده می کند، هنگام خروجی گرفتن از پروژه HTML آن ساخته خواهد شد. این به معنی است که در محیط پروداکشن، HTML صفحه ها برای هر کاربر دوباره استفاده خواهند شد و این امر به سرعت وبسایت شما کمک شایانی خواهد کرد.

در Next، با استفاده از getStaticProps می توانید از این قابلیت مهم استفاده کنید. مثالی از SSG در Next:

```javascript
export default function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
```

> منبع: https://nextjs.org/docs/basic-features/pages
