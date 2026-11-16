import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        <span>RÉSIDENCE LYDIA</span>
        <small>TLEMCEN · ALGÉRIE</small>
      </a>

      <nav className="navbar-links">
  <a href="#accueil">Accueil</a>
  <a href="#appartements">Appartements</a>
  <a href="#tlemcen">Découvrir Tlemcen</a>
  <a href="#contact">Contact</a>
</nav>

      <button className="language-button">
        FR / EN
      </button>
    </header>
  )
}

export default Navbar