import "../../public/css/Header.css";

export function Header({ title }) {
  return (
    <header className="header">
      <h1 className='titulo'>{title}</h1>
    </header>
  );
}
