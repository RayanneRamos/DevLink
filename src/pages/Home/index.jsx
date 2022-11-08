import './styles.css';

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
      </main>
    </div>
  );
}