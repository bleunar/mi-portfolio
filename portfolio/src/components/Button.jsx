export function Button({children, type = '', onClick = () => {}}, className = "") {
    return (
        <div className={`button-wrapper`}>
            <div className={`button-component text-bg-${type} bg-${type}`} onClick={onClick}>
                <div className={className}>{children}</div>
            </div>
        </div>
    )
}