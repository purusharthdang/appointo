import { MouseEvent } from "react";
import { Icons } from "../icon/icon.types";

export interface ButtonProps {
    buttonLabel: string;
    variant: 'text' | 'outline' | 'base',
    onClick?: (event: React.MouseEvent) => void;
    styles?: {
        [key: string]: string
    }
    iconLeft?: Icons
    iconRight?: Icons
    iconSize?: number
    iconColor?: string
}