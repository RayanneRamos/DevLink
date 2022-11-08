import './styles.css';

export function SocialMedia({ children, url }) {
  return (
    <a className='social' href={url} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}