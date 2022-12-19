## SSR (Server Side Rendering)

رندر سمت سرور یا SSR، صفحات شما را در سمت سرور رندر می کند و سپس به کاربر ارسال می کند و اغلب با CSR که مخالف آن است مقایسه می شود.
در Next، از ورژن 12 به پایین، سرور ساید رندرینگ از طریق فانکشن getServerSideProps انجام می شود. برای فعال کردن سرور ساید رندرینگ، کافی است این فانکشن را در هر یک از صفحات دلخواه استفاده کنید. مثالی از getServerSideProps:

```javascript
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
```

> منبع: https://nextjs.org/docs/basic-features/pages
