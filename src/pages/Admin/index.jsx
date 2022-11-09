import { Header } from "../../components/Header";
import './styles.css';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';

export function Admin() {
  const [ nameInput, setNameInput ] = useState('');
  const [ urlInput, setUrlInput ] = useState('');
  const [ backgroundColorInput, setBackgroundColorInput ] = useState('#f1f1f1');
  const [ textColorInput, setTextColorInput ] = useState('#121212');
  
  return (
    <div className="admin-container">
      <Header />
      <Logo />
      <form className="form">
        <label className="label">Nome do link</label>
        <Input 
          placeholder='Nome do link'
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <label className="label">Url do link</label>
        <Input 
          type='url'
          placeholder='Digite a url'
          value={urlInput}
          onChange={(event) => setUrlInput(event.target.value)}
        />
        <section className="container-colors">
          <div>
            <label className="label right">Fundo do link</label>
            <input 
              type='color'
              value={backgroundColorInput}
              onChange={(event) => setBackgroundColorInput(event.target.value)}
            />
          </div>
          <div>
            <label className="label">Cor do link</label>
            <input 
              type='color'
              value={textColorInput}
              onChange={(event) => setTextColorInput(event.target.value)}
            />
          </div>
        </section>
        { nameInput !== '' && (
          <div className="preview">
            <label className="label">Veja como está ficando 👇</label>
            <artcile className="list" style={{ marginTop: 8, backgroundColor: backgroundColorInput }}>
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </artcile>
          </div>
        )}
        <button className="btn-register" type='submit'>
          Cadastrar <MdAddLink size={24} color='#fff' />
        </button>
      </form>
      <h2 className="title">Meus links</h2>
      <article 
        className="list animate-pop"
        style={{ backgroundColor: '#000', color: '#fff' }}
      >
        <p>Grupo exclusivo no telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color='#fff' />
          </button>
        </div>
      </article>
    </div>
  );
}