
  function typeWriter(elemento) {
    const textoArray = '<Olá 👋, eu sou Gustavo Sampaio/>';
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
      setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
    }
  }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

  const descricao = document.querySelector('#apresentacaoNome');
  typeWriter(descricao);

