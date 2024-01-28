import * as HeroIconsSolid from '@heroicons/react/24/solid';
import * as HeroIconsOutline from '@heroicons/react/24/outline';
import * as HeroIconsMini from '@heroicons/react/20/solid';
import * as SidePandaIcons from './CustomIcons';
import IconPath from './iconPath';
import { IconProps } from './icon.types';

const Icon = ({
    id = '',
    icon = 'RocketLaunchIcon',
    color = '',
    size,
    variant = 'solid',
    className = 'cursor-pointer',
}: IconProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let IconComponent: any = IconPath[icon];

    const heroIconsSolid = { ...HeroIconsSolid, ...SidePandaIcons };
    const heroIconsOutline = { ...HeroIconsOutline, ...SidePandaIcons };
    const heroIconsMini = { ...HeroIconsMini, ...SidePandaIcons };

    switch (variant) {
        case 'solid':
            IconComponent = heroIconsSolid[icon];
            break;
        case 'outline':
            IconComponent = heroIconsOutline[icon];
            break;
        case 'mini':
            IconComponent = heroIconsMini[icon];
            break;
        default:
            IconComponent = heroIconsSolid[icon];
            break;
    }

    const getSize = () => {
        if (size) {
            return size;
        }

        switch (variant) {
            case 'mini':
                return '20';
            case 'outline':
            case 'solid':
                return '24';
            default:
                return '24';
        }
    };

    return (
        <IconComponent
            id={id}
            color={color}
            width={getSize()}
            height={getSize()}
            className={className}
        />
    );
};

export default Icon;
