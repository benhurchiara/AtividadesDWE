/* Mudar a Figura (Redes Sociais) */

/* 1º Criar os objetos para os elementos que serão manipulados: */

const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_rede_social.addEventListener('change', FunMudaFigura)

/* 3º Declarar a função para executar as ações: */
function FunMudaFigura () {
    /* src="Imagens/Facebook.png" */
    /* src="Imagens/Instagram.png" */
    /* src="Imagens/Linkedin.png" */
    /* src="Imagens/Twitter.png" */

    obj_img_rede_social.setAttribute('src', 'Imagens/' + obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)
    obj_p_rede_social.innerText = 'logo ' + obj_sel_rede_social.value
}

/* Adicionar Figuras */ 

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

/* 2º Criar novos objetos para serem manipulados */
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

/* 3º Declarar a função para executar as ações: */
/* 
   obj_img_facebook.addEventListener('click', FunAdicionaFigura(this.src, this.alt))
   obj_img_facebook.addEventListener('click', FunAdicionaFigura('Imagens/Facebook.png', 'Logo Facebook')
   obj_img_facebook.addEventListener('click', FunAdicionaFigura('Imagens/Instagram.png', 'Logo Instagram')
   obj_img_facebook.addEventListener('click', FunAdicionaFigura('Imagens/Linkedin.png', 'Logo Linkedin')
   obj_img_facebook.addEventListener('click', FunAdicionaFigura('Imagens/Twitter.png', 'Logo Twitter')
*/
for (obj_img of array_img_figuras) {
    obj_img.addEventListener('click', function () { FunAdicionaFigura(this.src, this.alt) } )
}

/* 4º Declarar a função para executar as ações: */
function FunAdicionaFigura(par_src, par_alt) {
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', true)
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)
}


/* Preencher Tabela */

/*  1º Criar os objetos/arrays para os elementos que serão manipulados: */
const array_td = document.querySelectorAll('#tab_principal td')
const obj_tab_vazia = document.querySelector('#tab_vazia')
const obj_caption_vazia = document.querySelector('#tab_vazia caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

/* 2º Declarar variável para controlar a quantidade de linhas na tabela nova. Iniciar com ZERO */
let contador_linhas_tabela_nova = 0

/* 3º Adicionar os eventos para chamar as funções: */
for (obj_td of array_td) {
    obj_td.addEventListener('click', function() {FunPreencheTabela(this.innerText) } )
}

/* 4º Declarar a função para executar as ações: */
function FunPreencheTabela(par_text) {
    if (contador_linhas_tabela_nova < 5){
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerText = par_text
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_vazia.appendChild(obj_tr_novo)
        contador_linhas_tabela_nova++
        obj_caption_vazia.innerText = 'Tabela com ' + contador_linhas_tabela_nova + ' linha(s)'
        obj_prog_tab_vazia.value = contador_linhas_tabela_nova
    }
    else {
        alert('Tabela cheia!')
    }
}


/* PARTE INFERIOR */
/* Mudar a Figura (Linguagens de Programação Web) */
/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const obj_rb_array = document.querySelectorAll('[name="redessociais"]')
const obj_img_code = document.querySelector('#img_code')
const obj_pre = document.querySelector('#predefinido')

/* 2º Adicionar os eventos para chamar a função:*/ 
for (obj_rb of obj_rb_array) {
    obj_rb.addEventListener('click', FunMudaImgLingProg)
}

/* 3º Declarar a função para executar as ações: */
function FunMudaImgLingProg() {
    for (obj_rb of obj_rb_array) {
        if (obj_rb.checked) {
            obj_img_code.setAttribute('src', 'Imagens/' + obj_rb.value + '.png')
            obj_img_code.setAttribute('alt', 'Logo ' + obj_rb.value)
            obj_img_code.setAttribute('title', 'Logo ' + obj_rb.value)
            obj_pre.innerText = 'Logo ' + obj_rb.value
        }
    }
}

/*  Preencher Lista */
/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const obj_li_array = document.querySelectorAll('#lista_principal li')
const obj_lista_vazia = document.querySelector('#lista_vazia')
const obj_paragrafo = document.querySelector('#p_lista_vazia')
const obj_progress_lista_vazia = document.querySelector('#prog_lista_vazia')

/* 2º Declarar variável para controlar a quantidade de itens na lista nova. Iniciar com ZERO.*/
let contador_lista = 0

/* 3º Adicionar os eventos para chamar as funções: */
for (obj_li of obj_li_array){
    obj_li.addEventListener('click', function () { FunPreencheLista(this.innerText) })
}
/* 4º Declarar a função para executar as ações: */
function FunPreencheLista(par_TextLista) {
    if(contador_lista <6) {
        const obj_li_novo = document.createElement('li') 
        obj_li_novo.innerText = par_TextLista
        obj_lista_vazia.appendChild(obj_li_novo) 
        contador_lista++
        obj_paragrafo.innerHTML = `Lista com ${contador_lista} Linha(s).`
        obj_progress_lista_vazia.value = contador_lista 
    }else {
        window.alert('Lista Cheia!')
    }
}
