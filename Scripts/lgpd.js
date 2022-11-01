let lgpdHtml = `
    <div class="lgpd">
    <div class="lgdp--left">
    <p> Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência. Ao continuar navegando, você concorda com este monitoramento. Leia mais na nossa <a id="pp" href="/Pages/privacity.html">Política de Privacidade</a>.</p>
       

    </div>
    <div class="lgpd--right">
        <button>OK</button>
    </div>
    </div>
    <link rel="stylesheet" href="lgpd.css">
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent){
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = document.querySelector('button');

    lgpdButton.addEventListener('click', ()=>{
        lgpdArea.remove();
        localStorage.setItem('lgpd', '123');
    });

}