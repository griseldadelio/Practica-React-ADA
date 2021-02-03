import './alert.css'
const Alert = ({ status, mensaje }) => {
    return (
        <p className={status}>
            {mensaje}
        </p>
    )
}

export { Alert };