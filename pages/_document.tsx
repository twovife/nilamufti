import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Undangan Pernikahan Nila ❤️ Mufti</title>
          <meta
            name="description"
            content="Selamat datang di undangan pernikahan kami! Bergabunglah dengan kami dalam momen istimewa ini saat kami merayakan cinta dan kebahagiaan. Tanggal, waktu, dan tempat telah kami persiapkan dengan penuh kasih untuk Anda."
          />
          <meta property="og:type" content="website" />{" "}
          <meta
            property="og:description"
            content="Selamat datang di undangan pernikahan kami! Bergabunglah dengan kami dalam momen istimewa ini saat kami merayakan cinta dan kebahagiaan. Tanggal, waktu, dan tempat telah kami persiapkan dengan penuh kasih untuk Anda."
          />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:site_name" content="Undangan Pernikahan" />
          <meta property="og:image" content="/main2.jpg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
