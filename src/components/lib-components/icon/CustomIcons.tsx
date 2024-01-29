import React from "react";
import { IconProps } from "./icon.types";

const ExternalLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(({
    width,
    height,
    color,
    className,
}, ref) => (
    <svg className={className} ref={ref} width={width} height={height} viewBox='0 0 24 24' fill='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <path d="M9.16665 6.33334H4.99998C4.55795 6.33334 4.13403 6.50894 3.82147 6.8215C3.50891 7.13406 3.33331 7.55798 3.33331 8.00001V15.5C3.33331 15.942 3.50891 16.366 3.82147 16.6785C4.13403 16.9911 4.55795 17.1667 4.99998 17.1667H12.5C12.942 17.1667 13.3659 16.9911 13.6785 16.6785C13.9911 16.366 14.1666 15.942 14.1666 15.5V11.3333M8.33331 12.1667L16.6666 3.83334M16.6666 3.83334H12.5M16.6666 3.83334V8.00001" stroke="#378760" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
));

// Export custom icons
export {
    ExternalLinkIcon
}