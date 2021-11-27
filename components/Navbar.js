import Head from 'next/head';

export default function Navbar({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* NAVBAR */}

      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Loruki</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
