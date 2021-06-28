
/* Alterar Cor de Fundo */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFundo() {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)
}

/* Alterar Cor fonte */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

/* 2º Adicionar os eventos para chamar a função: */
for (obj_rb_fonte of array_rb_fonte) {
    obj_rb_fonte.addEventListener('click', FunMudaCorFundo)
}

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFundo() {
    for (obj_rb_fonte of array_rb_fonte) {
        if (obj_rb_fonte.checked) {
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else {
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}

/* Decorar com Linha no Meio e Borda */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_cb_linha_meio = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')

/* 2º Adicionar os eventos para chamar as funções: */
obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)

/* 3º Declarar as funções para executar as ações: */
function FunLinhaMeio() {
    if (obj_cb_linha_meio.checked) {
        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)
    }
}

function FunBorda() {
    if (obj_cb_borda.checked) {
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}


/* Trocar o Texto */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

/* 2º Adicionar o evento para chamar a função: */
obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

/* 3º Declarar a função para executar as ações: */
function FunTrocaTexto() {
    if (obj_txt_texto_novo.value != '' ) {
        obj_div_area_teste.innerText = obj_txt_texto_novo.value
    }
    else {
        alert('Digite algo no campo')
    }
}

/* Alterar Cor de Fundo do Cabeçalho */

/* 1º Criar os objetos para os elementos que serão manipulados */
const obj_sel_fundocabecalho = document.querySelector('#sel_fundocabecalho')
const obj_cabecalho = document.querySelector('#cabecalho')

obj_sel_fundocabecalho.addEventListener('change', FunMudaCorCabecalho)

function FunMudaCorCabecalho() {
    obj_cabecalho.setAttribute('class', obj_sel_fundocabecalho.value)
}

const obj_imagemdefundo = document.querySelector('#imagemdefundo')
const obj_AreaTesteFundo = document.querySelector('#AreaTesteFundo')

obj_imagemdefundo.addEventListener('click', FunImagemFundo)

function FunImagemFundo() {
    if (obj_imagemdefundo.checked){
        obj_AreaTesteFundo.classList.add(obj_imagemdefundo.value)
    }else {
        obj_AreaTesteFundo.classList.remove(obj_imagemdefundo.value)
    }
}

const obj_opacidadetransparencia = document.querySelector('#opacidadetransparencia')
const obj_imagemjava = document.querySelector('#imagemjava')

obj_opacidadetransparencia.addEventListener('click', FunOpacidadeTransp)

function FunOpacidadeTransp() {
    if (obj_opacidadetransparencia.checked){
        obj_imagemjava.classList.add(obj_opacidadetransparencia.value)
    }else {
        obj_imagemjava.classList.remove(obj_opacidadetransparencia.value)
    }
}

const obj_Audiowide = document.querySelector('#Audiowide')
const obj_Monoton = document.querySelector('#Monoton')
const obj_AreaTesteParagrafo = document.querySelector('#AreaTesteParagrafo')

obj_Audiowide.addEventListener('click', FunAudiowide)
obj_Monoton.addEventListener('click', FunMonoton)

function FunAudiowide() {
    obj_AreaTesteParagrafo.innerText = 'Fonte: AudioWide'
    obj_AreaTesteParagrafo.setAttribute('class', obj_Audiowide.value)
}
function FunMonoton() {
    obj_AreaTesteParagrafo.innerText = 'Fonte: Monoton'
    obj_AreaTesteParagrafo.setAttribute('class', obj_Monoton.value)
}
