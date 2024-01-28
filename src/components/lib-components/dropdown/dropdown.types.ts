import { Dispatch, SetStateAction } from "react";
import { Item } from "../list/list.types";
export interface Position {
    left: number;
    top: number;
}
export interface DropdownProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    position: Position;
    dropDownItems: Item[];
    menuSize?: string;
}