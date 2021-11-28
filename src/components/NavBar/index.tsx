import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FC } from 'react';
import items from './items';

const NavBar: FC = () => {
  return (
    <div>
      <Menubar
        model={items}
        start={<InputText placeholder="Search" type="text" />}
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
    </div>
  );
};

export default NavBar;
