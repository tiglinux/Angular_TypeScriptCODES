//Em caso de erro request get e retornar pendencias de Bairro. - Tiago R.Santos
  pendenciasBairro(registro: Bairro) {
    // percorrer lista de array com for
    this.bairroService.pesquisarPendenciasBairro(registro)
      .subscribe(
        (resposta) => {
          //Mostrar código de atendimentos para o Usuário.
          //FALTA TRATAR VISUALMENTE  o ArrayCampos para caber na janela corretamente.

          let arrayMatriculaImovel: Array<Array<object>> = []; //Array do tipo objeto Array<<object>>
          let arrayDv: Array<Array<object>> = []; //Array do tipo objeto Array<<object>>
          let arrayCodAtendimento: Array<Array<object>> = []; //Array do tipo objeto Array<<object>>
          let arrayRefAtendimento: Array<Array<object>> = []; //Array do tipo objeto Array<<object>>
          let arraySequencial: Array<Array<object>> = []; //Array do tipo objeto Array<<object>>

          let arrayListImovelLog = resposta.listImovelLogradouroDTO.length; // Size do resposta.ListImovel Array
          let arrayListItemAten = resposta.listItemAtendimento.length; // Size do resposta.listItemAtendimento;

          console.log(resposta);

          //Exibindo matrícula de imóvel 
          for (let i = 0; i < arrayListImovelLog; i++) {
            arrayMatriculaImovel.push(resposta.listImovelLogradouroDTO[i].matriculaImovel);      
          }
          console.log(arrayMatriculaImovel);

          //Exibindo arrayDV
          for (let i = 0; i < arrayListImovelLog; i++) {
            arrayDv.push(resposta.listImovelLogradouroDTO[i].dv);
          }
          console.log(arrayDv);

          //Agora exibir listaItemAtendimentoDTO
          
          for(let i =0; i < arrayListItemAten;)

          //for(let i=0; i< resposta.listImovelLogradouroDTO[cont])

          //console.log(resposta);

          //Exibir primeiro lista de MátriculaImovel (listimovelLogradouroDTO)-DV
          //listItemAtendimento - refAtendimento (mesano) ex: 200807 (apenas : 0807) e numSequencial
          // 0807_qtd_ZeroscodAtendimento_0+numSequencial





          //for (let i = 0; i < resposta.listimovelLogradouroDTO; i++) {
          //console.log(resposta.listImovelLogradouroDTO[i].matriculaImovel);
          //}





          /* Object.keys(resposta.listimovelLogradouroDTO).map(index => { // chave is indice //Object.keys retorna um array percorre o objeto tipo for.
             arrayMatriculaImovel.push(resposta.listimovelLogradouroDTO[index].matriculaImovel); // arraysCampos tem codAtendimento.
           });
           console.log(arrayMatriculaImovel);
 
           //Apresenta códigos dos Elementos e converte para  array de Strings.
           for (const index in arraysCampos) {
             if (arraysCampos.hasOwnProperty(index)) {
               let element = arraysCampos[index];//number
               this.str.push(element.toString()); //cria uma nova string str       
             }
           }
           //console.log(this.str);
 
           //Insere novo elemento newline no array de string.str.join('<BR>');
           //return  arrayMatriculaImovel;
           */

        });

  }
