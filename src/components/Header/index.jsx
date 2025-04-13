import './index.css'
import { useNavigate } from 'react-router';
/**
 * Компонент для отображения заголовка (header) страницы.
 * 
 * @component
 * @returns {JSX.Element} JSX-разметка компонента Header.
 */
function Header() {
    const navigate = useNavigate();
    return (
      <header>
        <h1>Читалка</h1>
        <div className="navbar">
          <nav>
            <ul>
              <li><div onClick={() => { navigate('/')}}>Главная</div></li>
              <li><div onClick={() => { navigate('/books/add')}}>Добавить книгу</div></li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;