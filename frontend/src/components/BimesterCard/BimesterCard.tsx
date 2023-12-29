import { useEffect, useState } from 'react';
import { ContainerMain, ContainerSecondary } from './index';
import ButtonAddDesktop from '../Buttons/ButtonAddDesktop/ButtonAddDesktop';
import ButtonAddMobile from '../Buttons/ButtonAddMobile/ButtonAddMobile';

function BimesterCard() {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleResize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContainerMain>
        <ContainerSecondary>
            <span className='title'>{ "Bimestre 1" }</span>
              {screenSize.width > 768 ? <ButtonAddDesktop /> : <ButtonAddMobile />}
        </ContainerSecondary>
    </ContainerMain>
  );
}
  
export default BimesterCard;
  