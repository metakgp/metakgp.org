import React from "react";
import "../styles/pages/dc.css";
import TerminalDisplay from "../components/TerminalDisplay";

function DCPage() {
  return (
    <div className="content-page-container">
      <section className="topic-section">
        <h2 className="section-header-left">Introducing DC++</h2>
        <p className="description">
          DC++ is the heart of file sharing at IIT Kharagpur. It's a
          peer-to-peer (P2P) platform that allows students to connect directly
          and exchange resources such as notes, software, movies, and more.
          Designed for efficiency and community collaboration. The IITKGP DC Hub (HiT Hi FiT Hai)
          is a private hub, inaccessible from outside the IIT Kharagpur
          network, regularly seeing multiple terabytes of files shared. Users connect to hubs using DC clients and can share files at
          high speeds.
        </p>
        <figure className="dc-image-container">
          <img className="dc-image" src="https://qph.cf2.quoracdn.net/main-qimg-1113e5179c57e83b940e129278049627" />
          <figcaption>300TB+ of free data being shared on DC++</figcaption>
        </figure>
        <p className="description">
          IIT Kharagpur historically had one of the largest DC++ Hubs in India. Unfortunately it has lost much of its glory since the pandemic.
          Nevertheless you can still find large quantities of media, resources, games and anything else you request on it. We encourage everyone to hop on and help restore it to its previous glory!
          Check out more of the history of DC++ in IITKGP <a target="_blank" href="https://www.quora.com/Which-campus-has-highest-total-share-and-users-on-DC++-in-India">here</a>
        </p>
      </section>

      <section className="topic-section">
        <h2 className="section-header-left">Why Use It?</h2>
        <div className="description">
          <ul>
            <li>
              <strong>Community Driven:</strong> A platform built by and for the
              campus community.
            </li>
            <li>
              <strong>Lightning-Fast Sharing:</strong> Harness the power of the
              campus network for seamless file transfers (&gt;100MBps).
            </li>
            <li>
              <strong>Wide Range of Resources:</strong> Access notes, e-books,
              movies, software, and much more.
            </li>

            <li>
              <strong>Free and Open-Source:</strong> Fully cost-free and
              continually evolving with community contributions. Check out <a target="_blank" href="https://github.com/proffapt/Metahub">Metahub</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="topic-section">
        <h2 className="section-header-left">How To Use It?</h2>
        <p className="description">
          The best resource to get you started with DC++ is this <a href="https://proffapt.in/dc-client-setup">fantastic guide</a> by <a href="https://github.com/proffapt/">proffapt</a>
          <br />
          We will be providing a brief summary here:
        </p>
        <p className="description">
          <ol className="ordered-sections">
            <li>
              <h4 className="section-subheader-left">Install a client</h4>
              <p className="description">
                First install a DC++ client. We recommend <a href="https://sourceforge.net/projects/eiskaltdcpp/files/">Eiskalt DC++</a> but you have other options as well
                <div className="centered-div">
                  <table className="client-table">
                    <thead>
                      <tr>
                        <td>Platform</td><td>Client(s)</td></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Windows</td><td><a target="_blank" href="https://sourceforge.net/projects/eiskaltdcpp/files/Windows/EiskaltDC%2B%2B-2.4.2-x86_64-installer.exe/download">EiskaltDC++</a>, <a target="_blank" href="https://dcplusplus.sourceforge.io/">DC++</a></td></tr>
                      <tr>
                        <td>Linux</td><td><a target="_blank" href="https://sourceforge.net/projects/eiskaltdcpp/files/Linux/">EiskaltDC++</a>, <a target="_blank" href="https://linux.softpedia.com/get/Communications/Filesharing/LinuxDCplusplus-16399.shtml">LinuxDC++</a>, <a target="_blank" href="https://dev.yorhel.nl/ncdc">ncdc</a></td></tr>
                      <tr>
                        <td>MacOS</td><td><a target="_blank" href="https://sourceforge.net/projects/eiskaltdcpp/files/macOS/EiskaltDC%2B%2B-2.4.2-x86_64.dmg/download">EiskaltDC++</a>, <a target="_blank" href="https://sourceforge.net/projects/shakespeer/">Shakespeer</a>, <a target="_blank" href="https://saiankit.medium.com/how-to-use-dc-on-mac-using-ncdc-50bcc78aad01">ncdc</a></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="centered-div">
                  <TerminalDisplay command={`$ sudo apt install eiskaltdcpp # Ubuntu/Debian\n$ brew install eiskaltdcpp # MacOS\n$ # just use the AppImage on Arch, last I checked the package was broken`} />
                </div>
                If you are on linux/macOS and want to be able to use DC++ on the terminal and look cool you can try out <code>ncdc</code>
                <div className="centered-div">
                  <TerminalDisplay command={`$ yay -S ncdc # Arch Linux\n$ sudo apt install ncdc # Ubuntu/Debian`} />
                </div>
                You can check out the main download page linked in the above table for more methods
              </p>
            </li>
            <li>
              <h4 className="section-subheader-left">Configure The Client</h4>
              <p className="description">
                A DC++ client requires you to configure it before you can begin connecting to hubs. Namely you must
                <ul>
                  <li>
                    Set a nickname
                  </li>
                  <li>
                    Configure TLS settings (allow TLS)
                  </li>
                  <li>
                    Set a downloads directory for where to download files
                  </li>
                  <li>
                    (optionally) Set a shared directory. The client will share all the material inside this directory with others
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <h4 className="section-subheader-left">Connect to the hub</h4>
              <p className="description">
                Now that your client is set up you can connect to the DC++ hub of IITKGP, provided you are connected to the campus network
                <ul>
                  <li>
                    On EiskaltDC++ you can simply do <b>ctrl+n</b> and enter the URL to the hub <code>dc.metakgp.org</code>
                  </li>
                  <li>
                    On <code>ncdc</code> you will need to use the <code>/open</code> command
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <h4 className="section-subheader-left">Download and Share files :)</h4>
              <p className="description">
                You can now get started downloading and sharing content! Happy exploring!
              </p>
            </li>
          </ol>
        </p>
      </section>
      <section className="topic-section">
        <h2 className="section-header-left"> Helpful Links</h2>
        <p className="description">
          <ol>
            <li>
              <b>IITKGP DC++ Setup Guide: </b> <a href="https://proffapt.in/dc-client-setup">https://proffapt.in/dc-client-setup</a>
            </li>
            <li>
              <b>ncdc Manual</b> <a href="https://dev.yorhel.nl/ncdc/man">https://dev.yorhel.nl/ncdc/man</a>
            </li>
            <li>
              <b>dc-audio: listen to your DC network</b> <a href="https://github.com/OrkoHunter/dc-audio">https://github.com/OrkoHunter/dc-audio</a>
            </li>
            <li>
              <b>sparrow: a small, fast DC client</b> <a href="https://github.com/amrav/sparrow">https://github.com/amrav/sparrow</a>
            </li>
          </ol>
        </p>
      </section>
    </div>
  );
}

export default DCPage;
