import { useEffect, useRef } from 'react';
import { DropdownProps } from './dropdown.types';
import './dropdown.css'
import Icon from '../icon/Icon';

const Dropdown = ({ position, isOpen, setIsOpen, dropDownItems }: DropdownProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const getMenuStyle = () => {
        const { top, left } = position;
        const screenWidth = window.innerWidth;

        const menuWidth = dropdownRef.current?.clientWidth ?? 0;
        const leftPosition = left + menuWidth > screenWidth ? left - menuWidth : left;

        return {
            top: `${top}px`,
            left: `${leftPosition}px`,
        };
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={dropdownRef}
            style={getMenuStyle()}
            className='dropdownModal'
            onClick={(e) => { e.stopPropagation() }}
            role='definition'
        >
            {dropDownItems.map((item) => (
                <div key={item.id} className='dropdownItem'>
                    {item.title}
                    {item.icon ? <Icon variant='mini' size={14} icon={item.icon} /> : null}
                </div>
            ))}
        </div>
    )
}

export default Dropdown;