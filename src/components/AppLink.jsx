import React from 'react'

function AppLink({className = '', ...props}) {
    return (
        <a className={`text-[#61dafb] ${className}`.trim()}
            href={props.href}
            {...props}
        >
            {props.children}
        </a>
    )
}

export default AppLink