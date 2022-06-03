export default class Tooltip{
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);
    //bind do objeto da classe aos callbacks 
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  //Move a tooltip com base em seus estilos 
  //de acordo com a posição do mouse
  onMouseMove(event){
    this.tooltipBox.style.top = event.pageY + 20 +'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
      console.log('passou')
    } else{
      this.tooltipBox.style.left = `${event.pageX + 20}px`;

    }
  } 
  //Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(event){
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
   }
//Cria a tooltip box e coloca no body
  criarTooltipBox(element){
    this.tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox
  }
  //Cria a tooltip e adiciona os eventos 
  //de mousemove e mouseleave
  onMouseOver({currentTarget}){
    //Cria a tooltipBox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
  //Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent(){
    this.tooltips.forEach((item) =>{
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }
  init(){
    if(this.tooltips.length){
      this.addTooltipsEvent()
    }
    return this
  }
  
}

