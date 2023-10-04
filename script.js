document.addEventListener("DOMContentLoaded", () =>
{
    const linkDoJogo = document.getElementsByClassName("linkDosJogos") 
    let srcDoIframe

  
    Array.from(linkDoJogo).forEach((link) =>
    {
        link.addEventListener("click", () =>
        {
            localStorage.setItem("srcDOIframe", link.dataset.src)
            
        })
    })
})