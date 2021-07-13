import React from 'react';
import { Flex, Link } from '@chakra-ui/react';

const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';

export default function AlurakutMenu() {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <Flex isMenuOpen={isMenuOpen}>
      <div className="container">
        <Flex src="" />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/' }, { name: 'Amigos', slug: '/amigos' }, { name: 'Comunidades', slug: '/comunidades' }].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href="/logout">
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />}
        </button>
      </div>
      <Flex> githubUser</Flex>
    </Flex>
  );
}
