import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loruki</title>
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

      {/* SHOWCASE */}
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Easier deployment</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn btn-outline">
              Read More
            </a>
          </div>

          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form>
              <div className="form-control">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="form-control">
                <input type="text" name="company" placeholder="Company Name" />
              </div>
              <div className="form-control">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
      {/* STATS */}

      <section className="stats">
        <div className="container">
          <h3 className="stats-heading text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <i className="fas fa-server fa-3x">:D</i>
              <h3>10,230</h3>
              <p className="text-secondary">Deployment</p>
            </div>
            <div>
              <i className="fas fa-server fa-3x">:o</i>
              <h3>364 TB</h3>
              <p className="text-secondary">Published</p>
            </div>
            <div>
              <i className="fas fa-server fa-3x">:)</i>
              <h3>232</h3>
              <p className="text-secondary">Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cli">
        <div className="container grid">
          <Image src="/images/cli.png" alt="" width={3152} height={1072} />
          <div className="card">
            <h3>Easy to use, cross patform CLI</h3>
          </div>
          <div className="card">
            <h3>Deploy in seconds</h3>
          </div>
        </div>
      </section>

      {/* CLOUD */}
      <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Extreme Cloud Hosting</h2>
            <p className="lead my-1">
              Some very cool cloud hosting. Extremely cool.
            </p>
            <a className="btn btn-dark" href="#">
              Read More
            </a>
          </div>
          <Image src="/images/cloud.png" width={768} height={527} alt="cloud" />
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="languages">
        <h2 className="md text-center my-2">Supported Languages</h2>
        <div className="container flex">
          <div className="card">
            <h4>Node.js</h4>
            <Image src="/images/logos/node.png" height={80} width={80} alt="" />
          </div>
          <div className="card">
            <h4>Clojure</h4>
            <Image
              src="/images/logos/clojure.png"
              height={80}
              width={80}
              alt=""
            />
          </div>
          <div className="card">
            <h4>C#</h4>
            <Image
              src="/images/logos/csharp.png"
              height={80}
              width={80}
              alt=""
            />
          </div>
          <div className="card">
            <h4>Go</h4>
            <Image src="/images/logos/go.png" height={80} width={80} alt="" />
          </div>
          <div className="card">
            <h4>PHP</h4>
            <Image src="/images/logos/php.png" height={80} width={80} alt="" />
          </div>
          <div className="card">
            <h4>Python</h4>
            <Image src="/images/logos/node.png" height={80} width={80} alt="" />
          </div>
          <div className="card">
            <h4>Ruby</h4>
            <Image src="/images/logos/ruby.png" height={80} width={80} alt="" />
          </div>
          <div className="card">
            <h4>Scala</h4>
            <Image
              src="/images/logos/scala.png"
              height={80}
              width={80}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer bg-dark py-5">
        <div className="container grid grid-3">
          <div>
            <h1>Loruki</h1>
            <p>Copyright &copy; 2021 </p>
          </div>
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
          <div className="social">
            <a href="#">Twitter</a>
            <a href="#">Github</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
