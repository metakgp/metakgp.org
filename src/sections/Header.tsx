import MetaKGPLogoOneLine from '../assets/metakgp_logo_one_line-cropped.svg';

export const HeaderSection = () => {
  return (
    <div className="header">
      <img className="metakgp-logo=metakgp-logo-one-line" src={MetaKGPLogoOneLine} width="150rem" />
      <nav className="nav-bar">
        <a href="#" className="nav-element">About</a>
        <a href="#" className="nav-element">Projects</a>
        <a href="#" className="nav-element">Contribute</a>
        <a href="#" className="nav-element">DC++</a>
      </nav>
    </div>
  )
}
