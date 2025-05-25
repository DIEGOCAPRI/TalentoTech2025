function ButtonColor({texto, color}){
    const estilo = {backgroundColor : color,
                   color: 'white',
                   padding: '10px',
                   border: 'none',
                   width: '100px',
                   margin: '10px',
                   borderRadius: '6px'       
    }

    return <button style={estilo} >{texto}</button>

}

export default ButtonColor;