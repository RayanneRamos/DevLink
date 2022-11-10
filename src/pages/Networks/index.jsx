import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import './styles.css';
import { MdAddLink } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export function Networks() {
  const [ github, setGithub ] = useState('');
  const [ instagram, setInstagram ] = useState('');
  const [ twitter, setTwitter ] = useState('');

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(db, 'social', 'link');
      await getDoc(docRef)
      .then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setGithub(snapshot.data().github);
          setInstagram(snapshot.data().instagram);
          setTwitter(snapshot.data().twitter);
        }
      });
    }

    loadLinks();
  }, []);

  async function handleSave(event) {
    event.preventDefault();

    await setDoc(doc(db, 'social', 'link'), {
      github: github,
      instagram: instagram,
      twitter: twitter,
    })
    .then(() => {
      toast.success('Url cadastrada com sucesso');
    })
    .catch((error) => {
      console.log(error);
      toast.error('Não foi possível cadastrar a url');
    })
  }

  return (
    <div className='admin-container'>
      <Header />
      <h1 className='title-social'>Suas redes sociais</h1>
      <form className='form' onSubmit={handleSave}>
        <label className='label'>Link do github</label>
        <Input 
          placeholder='Url do github'
          value={github}
          onChange={(event) => setGithub(event.target.value)}
        />
        <label className='label'>Link do instagram</label>
        <Input 
          placeholder='Url do instagram'
          value={instagram}
          onChange={(event) => setInstagram(event.target.value)}
        />
        <label className='label'>Link do twitter</label>
        <Input 
          placeholder='Url do twitter'
          value={twitter}
          onChange={(event) => setTwitter(event.target.value)}
        />
        <button type='submit' className='btn-register'>
          Salvar links <MdAddLink size={24} color='#fff' />
        </button>
      </form>
    </div>
  );
}