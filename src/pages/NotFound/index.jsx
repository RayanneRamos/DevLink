import './styles.css';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';

export function NotFound() {
  return (
    <div className='error'>
      <Logo />
      <h1>Página não encontrada!</h1>
      <p>Essa página que você está procurando não existe.</p>
      <Link to='/' className='link'>Voltar para a Home</Link>
    </div>
  );
}