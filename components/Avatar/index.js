import { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const sizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
}

const Avatar = forwardRef((
    {
        src,    
        alt,
        size,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        className,
        rounded,
        ...props
    }, ref
) => {
        return (
            <img
                src={src} alt={alt}
                className={classNames(`${sizes[size]} ${className} rounded-full`)}
                style={{width,height}}
                />
        );
    })

Avatar.defaultProps = {
    src:"https://source.unsplash.com/WLUHO9A_xik/1600x900",
    alt: 'lightui component',
    size: 'sm',
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm','md', 'lg','xl']),
    width: PropTypes.string,
    height: PropTypes.string,
    minWidth: PropTypes.string,
    maxWidth: PropTypes.string,
    minHeight: PropTypes.string,
    maxHeight: PropTypes.string
}

export default Avatar;