import NextLink from 'next/link';
import Head from 'next/head';

export default function Navbar({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>

      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Loruki</h1>
          <nav>
            <ul>
              <li>
                <NextLink href="/">
                  <a>Home</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/features">
                  <a href="#">Features</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/docs">
                  <a href="#">Docs</a>
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
