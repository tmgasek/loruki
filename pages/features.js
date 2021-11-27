import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar title="features" />

      {/* HEAD */}
      <section className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Features</h1>
            <p className="lead">Check out these features</p>
          </div>
          <div className="imageWrapper">
            <Image
              src="/images/server.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* SUBHEAD */}

      <section className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div>
            <h1 className="md">The Loruki Platform</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="imageWrapper">
            <Image
              src="/images/server2.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* FEATURES MAIN */}
      <section className="features-main my-2">
        <div className="container grid grid-3">
          <div className="card flex">
            <i>Icon</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="card flex">
            <i>Icon</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="card flex">
            <i>Icon</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="card flex">
            <i>Icon</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="card flex">
            <i>Icon</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="card flex">
            <i>Icon</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
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
