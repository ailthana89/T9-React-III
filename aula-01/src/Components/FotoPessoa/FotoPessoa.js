import React from 'react';

const FotoPessoa = (props) => {
    return (
        <img
            src={props.usuario.fotoUrl}
            alt={props.usuario.fotoNome}
        />
      )
    }

export default FotoPessoa;
