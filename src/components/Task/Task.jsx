import types from 'prop-types';
import { StyledTask } from './styles.js';

/* eslint-disable react/prop-types */

export function Task(props){
    // "props" -> é um objeto tudo que foi passado na chamada do Componente.
    console.log(props);
    return(
        <StyledTask>
            <p>{props.title}</p>
            <button onClick={() => props.onRemove(props.id)}>X</button>
        </StyledTask>
    )
}

Task.propTypes = {
    title: types.string.isRequired,
    id: types.number.isRequired,
    onRemove: types.func.isRequired
}

Task.defaultProps = {
    title: 'Sem titulo'
}