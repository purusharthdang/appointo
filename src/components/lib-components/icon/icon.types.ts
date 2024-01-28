import IconPath from "./iconPath";

export type Icons = keyof typeof IconPath;

export interface IconProps extends React.SVGAttributes<SVGAElement> {
    color?: string;
    icon?: Icons;
    id?: string;
    size?: number;
    variant?: 'solid' | 'outline' | 'mini';
    className?: string;
}

