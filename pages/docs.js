import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar title="docs" />
      {/* HEAD */}
      <section className="docs-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Docs</h1>
            <p className="lead">Learn Luroki platform</p>
          </div>
          <div className="imageWrapper">
            <Image
              src="/images/docs.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* DOCS MAIN */}
      <section className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2">Essentials</h3>
            <nav>
              <ul>
                <li>
                  <a href="#" className="text-primary">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Installation</a>
                </li>
              </ul>
            </nav>
            <h3 className="my-2">Deployment</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">Setting up a container</a>
                </li>
                <li>
                  <a href="#">Using the CLI</a>
                </li>
                <li>
                  <a href="#">Managing resources</a>
                </li>
                <li>
                  <a href="#">Upgrade and downgrade</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="card">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="alert alert-success">
              <i>!</i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </div>
            <h3>Lorem ipsum dolor sit amet, consectetur </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <a href="#" className="btn btn-primary">
              Install CLI
            </a>
            <h3>Requirements</h3>
            <ul>
              <li>Windows 10, Linux</li>
              <li>Node.js v12+</li>
            </ul>

            <h3>Install</h3>
            <p>NPM</p>
            <pre>
              <code>$ npm install luroki-cli</code>
            </pre>
            <p>yarn</p>
            <pre>
              <code>$ yarn install luroki-cli</code>
            </pre>
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
