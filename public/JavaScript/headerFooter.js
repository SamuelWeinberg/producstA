class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="">
        <nav class="container-fluid align-items-center text-center img-fluid ">
            <div class="non-mt">
                <i id="iconUesr" class="fa-solid fa-user "></i>
               <img src="../img/h22.png" width="80px">
                <a href="../index.html"> Home</a>
                <a href="../html/AbutUs.html">Abut us</a>
                <a href="../html/Contact.html">Contact </a>
                <a href="../html/Prodcuts.html">Prodcuts</a>
                <div class="cart-container">
                    <div class="count" id="idCount"></div>
                    <i id="cartIcon" class="cart fa-solid fa-cart-shopping "></i> 
                </div>
            </div>
        </nav>
    </header>
    `
    }
}

class specialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer"></div>
        <footer class="">
         <div class="container-fluid align-items-center text-center momr-n ">
                <a href="">Instagram</a>
                <a href="">Facebook</a>  
                <a href="">LinkedIn</a>
                <a href="">YouTube</a>
          </div>  
     </footer>
    `
    }
}
customElements.define('special-header', specialHeader)
customElements.define('special-footer', specialFooter)
