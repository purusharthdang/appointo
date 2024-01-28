import React, { Fragment, useState } from 'react'
import './header.css'
import Button from '../../lib-components/button/Button'
import useWindowSize from '../../../hooks/useWindowSize'
import Dropdown from '../../lib-components/dropdown/Dropdown'



const Header = () => {
  const windowSize = useWindowSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [menuButtonPosition, setMenuButtonPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 })

  const headerMenuItems = [
    { component: <Button buttonLabel='Contact us' variant='text' />, id: 'contact' },
    { component: <Button buttonLabel='Share Link' iconLeft='ExternalLinkIcon' variant='outline' styles={{ color: '#378760' }} />, id: 'share' },
  ]

  const handleMobileMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    const { clientX, clientY } = event;
    setMenuButtonPosition({ top: clientY, left: clientX });
    setIsMobileMenuOpen(true);
  }

  const menuItemsMobile = [
    {
      component:
        <Button
          buttonLabel='Menu'
          variant='text'
          iconRight='ChevronDownIcon'
          onClick={handleMobileMenu}
          iconColor='#00000' iconSize={16} />,
      id:
        'menu'
    },
  ]

  return (
    <div className='headerContainer'>
      <div><img src="/LOGO.png" alt='company logo' className='companyLogo' /></div>
      <div className='headerMenu'>
        {(windowSize === 'md' || windowSize === 'sm' ? menuItemsMobile : headerMenuItems).map(({ component, id }) => {
          return <Fragment key={id}>{component}</Fragment>
        })}
      </div>
      {isMobileMenuOpen ?
        <Dropdown
          position={menuButtonPosition}
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          dropDownItems={[
            { title: 'Contact us', id: 'contact' },
            { title: 'Share link', id: 'share' },
          ]}
        /> : null}
    </div>
  )
}

export default Header