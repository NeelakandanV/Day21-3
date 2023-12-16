let formCont = document.querySelector('.formCon')

formCont.addEventListener('submit',(e)=>{
    e.preventDefault()

    let intCon = document.querySelector('.int')
    let inter = intCon.value;
    let priCon = document.querySelector('.pri')
    let pricy = priCon.value;

    async function anime(){
        let AniUrl = fetch(`http://www.boredapi.com/api/activity?type=${inter}&price=${pricy}`)
        let aniPro = await AniUrl
        let aniRes = aniPro.json()
        let AniOut = await aniRes

        let ideaSel = document.querySelector('.ideaCon')
        ideaSel.innerHTML=''
        let ideaTop = document.createElement('h4');
        ideaTop.innerText = "Here you go....."
        ideaSel.append(ideaTop)
        let ideaAct = document.createElement('h2')
        ideaAct.innerText = `${AniOut.activity}`
        ideaSel.append(ideaAct)
    }
    anime()
    
})

