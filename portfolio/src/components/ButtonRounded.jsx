export function ButtonRounded({children, type = '', onClick = () => {}}, className = "") {
    return (
        <div className={`button-wrapper rounded-pill`}>
            <div className={`button-component text-bg-${type} bg-${type} rounded-pill`} onClick={onClick}>
                <div className={className}>{children}</div>
            </div>
        </div>
    )
}