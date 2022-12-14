import React from "react";
import './Button.css'

export default props =>{
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return(
        <button 
            className={classes}
            onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}
/* 
Dentro de {`...`} voce esta usanda javascript puro 
dentro de ${...} se cria um template string
{`
    button
    ${props.operation ? 'operation': ''}
    ${props.double ? 'double': ''}
    ${props.triple ? 'triple': ''}
`}
*/