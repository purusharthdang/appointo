import React from 'react'
import { ListProps } from './list.types'
import ListItem from './ListItem'


const List = ({ listItems, className, selectedItem, itemClassName, setSelectedItem }: ListProps) => {
    return (
        <div className={className}>
            {listItems.map(item => {
                return <ListItem key={item.id} listItem={item} className={itemClassName} isSelected={selectedItem === item.id} onItemClick={setSelectedItem} />
            })}
        </div>
    )
}

export default List