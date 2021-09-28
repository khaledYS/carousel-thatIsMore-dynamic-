const doc = document
const cas = doc.querySelector('.carousel')
const casTriggers = cas.querySelectorAll('.triggers > .trigger')
const casItems = cas.querySelectorAll('.item')


document.addEventListener("DOMContentLoaded",()=>{
    
    casItems.forEach((item, index)=>{
        item.setAttribute('data-cas-number', index+1)
    })


    // after button
    casTriggers[1].onclick = ()=>{
        const currentCas = cas.querySelector('.item.active')
        const nextCasNumber = Number(currentCas.getAttribute('data-cas-number')) + 1
        const nextCas = cas.querySelector(`.item[data-cas-number="${nextCasNumber}"]`)
    
        nextCas &&
            setCasItem(casItems, nextCas)
    }
    
    
    // before trigger
    casTriggers[0].onclick = ()=>{
        const currentCas = cas.querySelector('.item.active')
        const prevCasNumber = Number(currentCas.getAttribute('data-cas-number')) - 1
        const prevCas = cas.querySelector(`.item[data-cas-number="${prevCasNumber}"]`)
    
        prevCas &&
            setCasItem(casItems, prevCas)
    }
    
    
    const setCasItem = (casItems, nextCas) =>{
        casItems.forEach(item =>item.classList.remove('active'))
        nextCas.classList.add('active')
    }
})

