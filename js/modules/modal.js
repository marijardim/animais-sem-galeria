export default class initModal{
  constructor(btnOpen, btnClose, mdlContainer){
  this.btnOpen = document.querySelector(btnOpen) //queryselector retorna undefined se n existir
  this.btnClose= document.querySelector(btnClose) //por isso n precisa do .length no if
  this.mdlContainer = document.querySelector(mdlContainer)//o querySAll retorna 0 se não existir.
  //bind this ao callback para
  //fazer referência ao objeto da classe
  this.eventToggleModal = this.eventToggleModal.bind(this)
  this.clickOut = this.clickOut.bind(this)
}
  //Abre ou fecha o modal
  toggleModal(event){
    this.mdlContainer.classList.toggle('ativo');
  }
  //Adiciona o evento de toggle ao modal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal(event)
  }
  //Fecha o modal ao clicar do lado de fora
  clickOut(event){
    if(event.target === this.mdlContainer){
      this.toggleModal(event);
    }
  }
  //Adiciona os eventos aos elementos do modal
  addModalEvents(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal)
    this.botaoFechar.addEventListener('click', this.eventToggleModal)
    this.this.mdlContainer.addEventListener('click', this.clickOut)
  }


  init(){
    if(this.botaoAbrir && this.botaoFechar && this.mdlContainer){
    this.addModalEvents()
    }
return this;
  }

}