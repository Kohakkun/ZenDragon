window.addEventListener('load', () => {
    // CLICK ANIMATION
    const imgLeft1 = document.getElementById('char-sigurd')
    const cardBox = document.querySelector('.cardBox')
    const cardBoxInner = document.querySelector('.cardBoxInner')
    const cardBoxBG = document.querySelector('.cardBoxBG')
    const cardBoxCard = document.querySelector('.cardBox_card')
    const card = document.querySelector('.cardInner')
    let cardFlipped = false;
    
    card.addEventListener('click', function (e) {
        card.classList.toggle('is-flipped');
        if(cardFlipped) cardFlipped = false;
        else cardFlipped = true;
    });
    
    window.onclick = function(event){
        if(event.target === cardBoxBG){
            closeOverlay_cardInfo();
            clearInterval(martopInterval);
            martopInterval = null;
            overlay_cardInfo = false;
            setTimeout(()=>{
                if(cardFlipped){
                    card.classList.toggle('is-flipped');
                    cardFlipped = false;
                }
                activateIntervalMartop();
            }, 1000)
        }
    }
    
    function closeOverlay_cardInfo(){
        cardBox.style.visibility = 'hidden';
        cardBoxBG.style.opacity = '0';
        cardBoxCard.style.marginTop = '100vh';
    }
    
    // GET THE TEXT ELEMENTS
    const cardFront = document.getElementById('card-front-img')
    const cardBack = document.querySelector('.card_faceBack')
    const cardPP = document.getElementById('pp-img')
    const cardName = document.getElementById('card-name')
    const cardTitle = document.getElementById('card-title')
    const cardDesc = document.getElementById('card-desc')
    let overlay_cardInfo = false;
    const screen_width_type2 = window.matchMedia("(max-width: 820px)");
    const screen_width_type3 = window.matchMedia("(max-width: 420px)");
    const screen_height_type2 = window.matchMedia("(max-height: 700px)");
    
    window.onresize = function() {
        resize_card_marginTop();
    }

    let martopInterval;
    function activateIntervalMartop(){
        if(!martopInterval){
            martopInterval = setInterval(resize_card_marginTop, 50);            
        }
    }
    window.onload = activateIntervalMartop;
    
    function openOverlay_cardInfo(){
        cardBox.style.visibility = 'visible';
        cardBoxBG.style.opacity = '1';
        resize_card_marginTop();
    }
    
    function resize_card_marginTop(){
        if(screen_width_type3.matches){
            cardBoxCard.style.marginTop = '16vh';
        } else if(screen_width_type2.matches){
            cardBoxCard.style.marginTop = '13vh';
        } else if(screen_height_type2){
            cardBoxCard.style.marginTop = '20vh';
        } else {
            cardBoxCard.style.marginTop = '18vh';
        }
    }
    
    const principal = document.getElementById('char-sigurd')
    principal.addEventListener('click', ()=>{
        cardFront.src = './CharacterPage/Principal/principal card front@0.75x.png';
        cardBack.style.backgroundImage = "url('./CharacterPage/Principal/principal_card_back@0.75x.png')";
        cardPP.src = './CharacterPage/Principal/pp_principal.png';
        cardName.innerHTML = 'Sigurd Stormblade'
        cardTitle.innerHTML = 'Divine Visionary of North'
        cardDesc.innerHTML = 'A venerable figure at the academy, where he serves as the esteemed Principal. At 75 years old, his age is but a testament to the wealth of experience and wisdom he brings to his role. With piercing deep blue eyes that seem to hold the echoes of countless battles, Sigurd embodies the very essence of heroism and sagacity as he leads the Wind Trainers.'
        if(screen_width_type2.matches){
            cardBack.style.backgroundImage = "url('./CharacterPage/Principal/card\ back\ small.png')";
        }
        setTimeout(openOverlay_cardInfo, 300);
    })
    
    const blacksmith = document.getElementById('char-ragnar')
    blacksmith.addEventListener('click', ()=>{
        cardFront.src = './CharacterPage/Blacksmith/blacksmith front card@0.75x.png';
        cardBack.style.backgroundImage = "url('./CharacterPage/Blacksmith/blacksmith\ back\ card\ big@0.75x.png')";
        cardPP.src = './CharacterPage/Blacksmith/pp_blacksmith.png';
        cardName.innerHTML = 'Elvadoran Ragnar'
        cardTitle.innerHTML = 'Master of Creation'
        cardDesc.innerHTML = 'A 55 years old smith sporting a fiery orange beard that specializes in crafting the academy’s weapons and leading the Demonic Dragon teachers. His formidable presence and exceptional craftsmanship mark him as a legendary figure in the realm of smithing, commanding admiration and respect from all who behold his work.'
        if(screen_width_type2.matches){
            cardBack.style.backgroundImage = "url('./CharacterPage/Blacksmith/blacksmith\ back\ card.png')";
        }
        setTimeout(openOverlay_cardInfo, 300);
    })
    
    const frostTeacher = document.getElementById('char-raoul')
    frostTeacher.addEventListener('click', ()=>{
        cardFront.src = './CharacterPage/Teacher/frost teacher front card@0.75x.png';
        cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/frost\ teacher\ back\ card\ big@0.75x.png')";
        cardPP.src = './CharacterPage/Teacher/pp_frost.png';
        cardName.innerHTML = 'Raoul Froster'
        cardTitle.innerHTML = 'Wiseman of South'
        cardDesc.innerHTML = "At the venerable age of 60, Raoul Frosters epitomizes wisdom and patience, his countenance weathered and adorned with spectacles and a bushy beard. Celebrated for his mastery in the Frost Class, his unconventional pedagogy imprints lasting impressions upon his students' consciousness, weaving a tapestry of knowledge that transcends the ordinary."
        if(screen_width_type2.matches){
            cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/frost\ teacher\ back\ card.png')";
        }
        setTimeout(openOverlay_cardInfo, 300);
    })
    
    const blazeTeacher = document.getElementById('char-freya')
    blazeTeacher.addEventListener('click', ()=>{
        cardFront.src = './CharacterPage/Teacher/blaze teacher front card@0.75x.png';
        cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/blaze\ teacher\ back\ card\ big@0.75x.png')";
        cardPP.src = './CharacterPage/Teacher/pp_blaze.png';
        cardName.innerHTML = 'Freya Blazensky'
        cardTitle.innerHTML = 'Crimson Courage'
        cardDesc.innerHTML = "A spirited 26-year-old woman, blazes with strength and serenity, her fiery crimson locks and piercing blue eyes hinting at the mischief within. Rooted in Viking lineage, her tranquil demeanor belies a daring spirit that beckons others to follow suit. She ignites courage in the hearts of those around her, urging them to boldly carve their own paths through life's adventuresome landscapes."
        if(screen_width_type2.matches){
            cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/blaze\ teacher\ back\ card.png')";
        }
        setTimeout(openOverlay_cardInfo, 300);
    })
    
    const thunderTeacher = document.getElementById('char-erick')
    thunderTeacher.addEventListener('click', ()=>{
        cardFront.src = './CharacterPage/Teacher/thunder teacher front card@0.75x.png';
        cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/thunder\ teacher\ back\ card\ big@0.75x.png')";
        cardPP.src = './CharacterPage/Teacher/pp_thunder.png';
        cardName.innerHTML = 'Erick Solvarr'
        cardTitle.innerHTML = 'Eastern Thunderbolt'
        cardDesc.innerHTML = "A man of 35 years, exudes an aura of both wisdom and mystery, his deep brows furrowed in thought, his radiant complexion hinting at an inner vitality, and his intricate golden locks shimmering like strands of molten lightning. As a Thunder Class teacher within the realm of education, his very presence crackles with electrifying energy, drawing students into a mesmerizing world of enlightenment with every captivating lesson he imparts."
        if(screen_width_type2.matches){
            cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/thunder\ teacher\ back\ card.png')";
        }
        setTimeout(openOverlay_cardInfo, 300);
    })
    
    const holyTeacher = document.getElementById('char-astrid')
    holyTeacher.addEventListener('click', ()=>{
        cardFront.src = './CharacterPage/Teacher/holy teacher front card@0.75x.png';
        cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/holy\ teacher\ back\ card\ big@0.75x.png')";
        cardPP.src = './CharacterPage/Teacher/pp_holy.png';
        cardName.innerHTML = 'Astrid Silvolyn'
        cardTitle.innerHTML = 'Western Holybearer'
        cardDesc.innerHTML = "Bearing the mark of 46 years, personifies not just combat skill and sagacity, but also a peaceful saintliness and wisdom. Her silver hair, reminiscent of moonlight, and deep Viking roots paint her as a model of virtue. As a Holy Class instructor at the serene Zen Dragon Academy, she cultivates empathy and development, blending her guidance with a soft yet sturdy resolve that motivates students towards moral excellence."
        if(screen_width_type2.matches){
            cardBack.style.backgroundImage = "url('./CharacterPage/Teacher/holy\ teacher\ back\ card.png')";
        }
        setTimeout(openOverlay_cardInfo, 300);
    })
})
