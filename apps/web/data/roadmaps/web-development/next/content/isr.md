## ISR (Incremental Static Regeneration)

ISR به شما اجازه می دهد که صفحه هایی که با استفاده از SSG ساخته شده اند را بعد از گرفتن بیلد، دوباره تولید کنید. با استفاده از ISR، مزیت های SSG را حفظ خواهید کرد و در عین حال، وبسایت خود را برای میلیون ها کاربر آماده خواهید کرد.

در Next، برای فعالسازی ISR، کافی است مقدار revalidate را به getStaticProps اضافه کنید.
revalidate تعیین می کند که داده شما هر چند ثانیه یک بار تازه سازی شود و بدین ترتیب، مقدار آن ثانیه های مورد نظر است.
مثال:

```javascript
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
```

---

> منبع: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
