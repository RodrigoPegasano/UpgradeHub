function Botones({onSumar, onRestar}) {

    return (
        <>
            <button onClick={onSumar}>
                +
            </button>
            <button onClick={onRestar}>
                -
            </button>
        </>
    )

}

export default Botones