import React from 'react'
import { ListItemProps } from './list.types'
import Icon from '../icon/Icon'

const ListItem = ({ className, listItem, isSelected, onItemClick }: ListItemProps) => {
    const itemStateStyle = isSelected ? {
        justifyContent: 'space-between',
        cursor: 'pointer',
        alignItems: 'center',
        borderRadius: '10px',
        background: '#378760',
        color: 'white',
    } : { cursor: 'pointer' }

    return (
        <div style={itemStateStyle}
            role='button'
            onClick={() => { onItemClick && onItemClick(listItem.id) }}
            className={className}>
            {listItem.title}
            {isSelected ? <Icon icon='CheckCircleIcon' variant='outline' size={30} color='white' /> : null}
        </div>
    )
}

export default ListItem