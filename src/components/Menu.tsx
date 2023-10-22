import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    id: 1,
    to: '/',
    title: 'Главная',
  },
  {
    id: 2,
    to: '/drift',
    title: 'Дрифт-такси',
  },
  {
    id: 3,
    to: '/timeattack',
    title: 'Time Attack',
  },
  {
    id: 4,
    to: '/forza',
    title: 'Forza Karting',
  },
];

export const Menu: FC = () => {
  const location = useLocation();

  return (
    <nav className="menu">
      {links.map((link) => {
        const className = link.to === location.pathname ? 'menu__item menu__item-active' : 'menu__item';
        return <Link className={className} key={link.id} to={link.to}>{link.title}</Link>;
      })}
    </nav>
  );
};