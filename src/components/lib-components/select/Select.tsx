import React, { useEffect, useState } from 'react'
import './select.css'
import { SelectProps } from './select.types'
import Icon from '../icon/Icon';

const Select = ({ width, dropdownOptions, setSelectedOption, selectedOption }: SelectProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const isOptionSelected = (itemId: string) => selectedOption === itemId;

    useEffect(() => {
        if (dropdownOptions.length) {
            setSelectedOption(dropdownOptions[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(dropdownOptions)])
    return (
        <>
            <div
                role='button'
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className="selectContainer"
                style={{ width }}>
                {dropdownOptions?.find(option => isOptionSelected(option.id))?.title}
                <Icon
                    icon={isDropdownOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                />
            </div>
            {isDropdownOpen && dropdownOptions.map((option) => {
                return <div
                    key={option.id}
                    role='button'
                    className='selectContainer'
                    onClick={() => {
                        setSelectedOption(option.id)
                        setIsDropdownOpen(false);
                    }}
                >
                    {option.title}
                    {isOptionSelected(option.id) ? <Icon icon='CheckCircleIcon' variant='outline' /> : null}
                </div>
            })}
        </>
    )
}

export default Select