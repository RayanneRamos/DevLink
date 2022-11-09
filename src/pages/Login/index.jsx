import './styles.css';
import { Logo } from '../../components/Logo';
import { useState } from 'react';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    if(email === '' || password === '') {
      toast.error('Preencha todos os campos!');
      return;
    }

    await signInWithEmailAndPassword(auth, email, password).then(() => {
      toast.success('Bem vindo de volta!');
      navigate('/admin', { replace: true });
    }).catch(() => {
      toast.error('Erro ao tentar fazer o login!')
    });
  }

  return (
    <div className='login-container'>
      <Logo />
      <form className='form' onSubmit={handleLogin}>
        <input 
          type='email'
          placeholder='Digite seu email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          type='password'
          placeholder='*************'
          autoComplete='on'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Acessar</button>
      </form>
    </div>
  );
}