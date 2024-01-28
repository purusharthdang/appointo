import React, { Dispatch, SetStateAction } from "react";
import { Icons } from "../icon/icon.types";

export interface ListProps {
    className?: string;
    itemClassName?: string;
    listItems: Item[];
    selectedItem: string;
    setSelectedItem: Dispatch<SetStateAction<string>>
}

export interface ListItemProps {
    className?: string;
    onItemClick?: Dispatch<SetStateAction<string>>
    isSelected: boolean;
    listItem: Item
}

export interface Item {
    id: string;
    title: string;
    icon?: Icons
    onClick?: (e: React.MouseEvent) => void
    labelStyle?: string
}