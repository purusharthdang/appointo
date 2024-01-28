import { Dispatch, SetStateAction } from "react";
import { Item } from "../list/list.types";
import { Icons } from "../icon/icon.types";

export interface SelectProps {
    dropdownOptions: Item[];
    setSelectedOption: Dispatch<SetStateAction<string>>;
    selectedOption: string;
    iconRight?: Icons;
    width?: string;
}