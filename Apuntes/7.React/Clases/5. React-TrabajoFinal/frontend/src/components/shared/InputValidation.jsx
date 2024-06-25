export default function InputValidation({type, value, onChange, placeholder, rules}) {

    return (
        <>
            <input type={type} value={value} onChange={onChange} className="form-control" placeholder={placeholder}></input>

            {/* Cuando tiene la prop reglas, cuando el valor es mayor que 0 y cuando las reglas de la prop son false */}
            { rules && value.length > 0 && rules.map(rule => rule.fn(value)).includes(false) ?
            <ul className="alert alert-danger">
                {rules.map(rule => {
                    if(!rule.fn(value)) {
                        return (
                            <li>{rule.text}</li>
                        )
                    }
                })}
            </ul> : ""}
        </>
    )
}