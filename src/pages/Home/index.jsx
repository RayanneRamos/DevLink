import './styles.css';
import { SocialMedia } from '../../components/SocialMedia';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

export function Home() {
  const [ links, setLinks ] = useState([]);

  useEffect(() => {
    async function loadLinks() {
      const linksRef = collection(db, 'links');
      const queryRef = query(linksRef, orderBy('created', 'asc'));

      await getDocs(queryRef).then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });

        setLinks(lista);
      });
    }

    loadLinks();
  },[]);


  return (
    <div className='home-container'>
      <h1>Rayanne Ramos</h1>
      <span>Veja meus links 👇</span>
      <main className='links'>
        { links.map((item) => {
          return (
            <section 
              className='link-area' 
              key={item.id} 
              style={{ backgroundColor: item.bg }}
            >
              <a href={item.url} target='blank'>
                <p 
                  className='link-text'
                  style={{ color: item.color }}
                >
                  {item.name}
                </p>
              </a>
            </section>
          )
        }) }
        <footer>
          <SocialMedia url='https://github.com/RayanneRamos'>
            <FaGithub size={35} color='#fff' />
          </SocialMedia>
          <SocialMedia url='https://www.instagram.com/rayanne_ramos/'>
            <FaInstagram size={35} color='#fff' />
          </SocialMedia>
          <SocialMedia url='https://twitter.com/RaayanneRamos'>
            <FaTwitter size={35} color='#fff' />
          </SocialMedia>
        </footer>
      </main>
    </div>
  );
}