import './styles.css';
import { SocialMedia } from '../../components/SocialMedia';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export function Home() {
  return (
    <div className='home-container'>
      <h1>Rayanne Ramos</h1>
      <span>Veja meus links 👇</span>
      <main className='links'>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Github</p>
          </a>
        </section>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Twitter</p>
          </a>
        </section>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Instagram</p>
          </a>
        </section>
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