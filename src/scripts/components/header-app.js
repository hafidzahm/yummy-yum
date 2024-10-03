class HeaderApp extends HTMLElement {
    constructor(){
        super()

        this.innerHTML= 'Ini submission awal'
    }
}

customElements.define('header-app', HeaderApp)