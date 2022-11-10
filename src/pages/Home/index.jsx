import './styles.css';
import { SocialMedia } from '../../components/SocialMedia';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getDocs, collection, orderBy, query, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

export function Home() {
  const [ links, setLinks ] = useState([]);
  const [ socialLinks, setSocialLinks ] = useState({});

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

  useEffect(() => {
    async function loadSocialLinks() {
      const docRef = doc(db, 'social', 'link');
      
      await getDoc(docRef).then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setSocialLinks({
            github: snapshot.data().github,
            instagram: snapshot.data().instagram,
            twitter: snapshot.data().twitter,
          });
        }
      });
    }

    loadSocialLinks();
  }, []);

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
        { links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <SocialMedia url={socialLinks?.github}>
              <FaGithub size={35} color='#fff' />
            </SocialMedia>
            <SocialMedia url={socialLinks?.instagram}>
              <FaInstagram size={35} color='#fff' />
            </SocialMedia>
            <SocialMedia url={socialLinks?.twitter}>
              <FaTwitter size={35} color='#fff' />
            </SocialMedia>
          </footer>
        )}
      </main>
    </div>
  );
}