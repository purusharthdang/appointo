import React from 'react'
import './button.css'
import { ButtonProps } from './button.types'
import Icon from '../icon/Icon'

const Button = ({ buttonLabel, variant, styles, iconRight, iconSize, iconLeft, iconColor, onClick }: ButtonProps) => {
    return (
        <div role='button' onClick={(e) => onClick && onClick(e)} style={styles} className={`buttonLayout ${variant}Button`}>
            {iconLeft && <Icon icon={iconLeft} size={iconSize} color={iconColor ?? '#378760'} />}
            {buttonLabel}
            {iconRight && <Icon icon={iconRight} size={iconSize} color={iconColor ?? '#378760'} />}</div>
    )
}

export default Button