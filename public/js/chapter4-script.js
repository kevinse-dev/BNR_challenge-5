const kertasPlayer = document.querySelector(".kertas");
const guntingPlayer = document.querySelector(".gunting");
const batuPlayer = document.querySelector(".batu");
const kertasComp = document.querySelector(".kertasComp");
const guntingComp = document.querySelector(".guntingComp");
const batuComp = document.querySelector(".batuComp");
const itemComp = document.querySelectorAll('#itemComp')
const vs = document.querySelector(".vs");
const refresh = document.querySelector("#refresh");
const activeClass = document.getElementsByClassName("active");
let compScore = document.querySelector('#scoreCom')
let playerScore = document.querySelector('#scorePlayer')
let scoreP = 0
let scoreC = 0
// rules
const rules = (comp, pilihanPlayer) => {
  if (comp == pilihanPlayer) return "seri";
  if (pilihanPlayer == "kertas active") return comp == "gunting active" ? "lose" : "win";
  if (pilihanPlayer == "gunting active") return comp == "batu active" ? "lose" : "win";
  if (pilihanPlayer == "batu active") return comp == "kertas active" ? "lose" : "win";
};

// get pilihan computer
const comp = () => {
  const pilihanComp = Math.random();
  if (pilihanComp < 0.5) {
    kertasComp.classList.add("active");
    guntingComp.classList.remove("active");
    batuComp.classList.remove("active");
    return "kertas active";
  }
  if (pilihanComp > 0.5 && pilihanComp < 0.8) {
    kertasComp.classList.remove("active");
    guntingComp.classList.add("active");
    batuComp.classList.remove("active");
    return "gunting active";
  } else {
    kertasComp.classList.remove("active");
    guntingComp.classList.remove("active");
    batuComp.classList.add("active");
    return "batu active";
  }
};




kertasPlayer.addEventListener("click", () => {
  if (activeClass.length < 2) {
    kertasPlayer.classList.add("active");
    const pilihanPlayer = kertasPlayer.className;
    const pilihanComp = comp();
    const result = rules(pilihanComp, pilihanPlayer);
    vs.innerHTML = result;
    if(result == 'seri'){
        return ''
    }else{
        result == 'win' ? playerScore.innerHTML = scoreP += 1 : compScore.innerHTML = scoreC += 1
    }
  }
});

guntingPlayer.addEventListener("click", () => {
  if (activeClass.length < 2) {
    guntingPlayer.classList.add("active");
    const pilihanPlayer = guntingPlayer.className;
    const pilihanComp = comp();
    const result = rules(pilihanComp, pilihanPlayer);
    vs.innerHTML = result;
    if(result == 'seri'){
        return ''
    }else{
        result == 'win' ? playerScore.innerHTML = scoreP += 1 : compScore.innerHTML = scoreC += 1
    }
  }
});

batuPlayer.addEventListener("click", () => {
  if (activeClass.length < 2) {
    batuPlayer.classList.add("active");
    const pilihanPlayer = batuPlayer.className;
    const pilihanComp = comp();
    console.log(pilihanComp);
    console.log(pilihanPlayer);
    const result = rules(pilihanComp, pilihanPlayer);
    vs.innerHTML = result;
    if(result == 'seri'){
        return ''
    }else{
        result == 'win' ? playerScore.innerHTML = scoreP += 1 : compScore.innerHTML = scoreC += 1
    }
  }
});

refresh.addEventListener("click", () => {
  kertasComp.classList.remove("active");
  guntingComp.classList.remove("active");
  batuComp.classList.remove("active");
  kertasPlayer.classList.remove("active");
  guntingPlayer.classList.remove("active");
  batuPlayer.classList.remove("active");
  vs.innerHTML = 'vs'
});
