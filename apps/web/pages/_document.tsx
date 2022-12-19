import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body
          className="bg-[rgb(12,12,13)] text-white font-vazirmatn"
          dir="rtl"
          lang="fa"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
