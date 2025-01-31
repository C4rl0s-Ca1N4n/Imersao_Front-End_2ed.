import './SideBar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome} /></span>                   
                        </a>
                            <span>Início</span>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                        </a>
                            <span>Buscar</span>
                    </li>
                </ul>
            </nav>
            <div className="biblioteca">
                <div className="lib__conteudo">
                    <button className="botao__lib">
                    <span className="fa-icon"> <FontAwesomeIcon icon={faBook} /></span>
                    <span>Sua biblioteca</span>
                    </button>
                    <span className="fa fa-plus"><FontAwesomeIcon icon={faPlus} /></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist_content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist_button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages_button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;