import "../app/style/dc.css";
import dcImage from '../assets/dc-image.png';

function DCPage() {
  return (
    <div>
      <div className="header">
        <div className="quote">
          “Happiness doesn’t result from what we get,
          <br /> but from what we give."   ~ Ben Carson
          <br />
           
        </div>
        <div className="dc-image">
          <img
            src={dcImage}
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div className="title">Introducing DC++</div>
        <div className="description">
          DC++ is the heart of file sharing at IIT Kharagpur. It's a
          peer-to-peer (P2P) platform that allows students to connect directly
          and exchange resources such as notes, software, movies, and more.
          Designed for efficiency and community collaboration.The IITKGP DC Hub
          is a private hub , inaccessible from outside the IIT Kharagpur
          network. Users connect to hubs using DC clients and can share files at
          high speeds.
        </div>
      </div>

      <div className="container">
        <div className="title">Why use it?</div>
        <div className="description">
          <ul>
            <li>
              <strong>Community Driven:</strong> A platform built by and for the
              campus community.
            </li>
            <li>
              <strong>Lightning-Fast Sharing:</strong> Harness the power of the
              campus Network for seamless file transfers.
            </li>
            <li>
              <strong>Wide Range of Resources:</strong> Access notes, e-books,
              movies, software, and much more.
            </li>

            <li>
              <strong>Free and Open-Source:</strong> Fully cost-free and
              continually evolving with community contributions.
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="title">How to use it?</div>
        <div className="description">
          Getting started with DC++ at IIT KGP is easy :-) <br />
          Just follow these steps
        </div>
        <div className="button-container">
          <a href="https://proffapt.hashnode.dev/dc-client-setup">
            <button className="button">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DCPage;
