(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const q="/Tic-Tak-Toe/assets/blank-476053f1.svg",g=(e,l,t)=>{const i=(r,n,p)=>r.length===0?!0:r[0][n]==p&&i(r.slice(1),n,p);return e[0].length<t?!1:(console.log(t),i(e,t,l.getPiece().type)||g(e,l,t+1))},b=(e,l)=>{const t=(i,r)=>(console.log(i),i.length==0?!0:i[0]==r&&t(i.slice(1),r));return e.length==0?!1:(console.log(e.length),t(e[0],l.getPiece().type)||b(e.slice(1),l))},k=(e,l)=>{const t=l.getPiece().type;if(e.length==0||e[0].length==0)return!1;const i=e[0][0]==t&&e[1][1]==t&&e[2][2]==t,r=e[0][2]==t&&e[1][1]==t&&e[2][0]==t;return i||r};function x(e,l){return{name:e,getPiece:()=>l,setPiece:n=>{l=n},isTurn:!1}}const T="/Tic-Tak-Toe/assets/close-301080ff.svg",h="/Tic-Tak-Toe/assets/circle-66d55b04.svg",M=[{type:"x",element:`<img src=${T} alt="close" />`},{type:"o",element:`<img src=${h} alt="circle" />`},,];function H(){const e=[["","",""],["","",""],["","",""]];let l,t,i=null,r=null,n=!1;const p=(o,a)=>{l=o,t=a,l.isTurn=!0,d(),L()},m=(o,a,s)=>{e[a-1][o-1]||n||i&&(l.isTurn?(e[a-1][o-1]=l.getPiece().type,s.innerHTML=l.getPiece().element,l.isTurn=!1,t.isTurn=!0):t.isTurn&&(e[a-1][o-1]=t.getPiece().type,s.innerHTML=t.getPiece().element,l.isTurn=!0,t.isTurn=!1))},y=()=>e,f=o=>{console.log(o),i=o},L=()=>{i&&Array.from(i).forEach(a=>{a.addEventListener("click",s=>{console.log(s);let v=s.target.id.split("");console.log(v),m(Number(v[1]),Number(v[0]),s.target),setTimeout(()=>{u()},100)})})},c=o=>{r=o},d=()=>{let o,a;o=r.querySelector("#player1-name"),a=r.querySelector("#player2-name"),o.querySelector(".name").innerHTML=l.name,o.querySelector(".select").innerHTML=l.getPiece().element,a.querySelector(".name").innerHTML=t.name,a.querySelector(".select").innerHTML=t.getPiece().element},u=()=>{if(g(e,l,0)||b(e,l)||k(e,l))alert(`Winner ${l.name}`);else if(g(e,t,0)||b(e,t)||k(e,t))alert(`Winner ${t.name}`);else{l.isTurn?alert(`${l.name}'s turn`):alert(`${t.name}'s turn`);return}n=!0};return{makeAMove:m,getBoard:y,checkForWinner:u,getBoardDOM:f,setPlayers:p,setBoardSetAnnouncementDisplay:c}}function O(){return{createRootElement:i=>{i.innerHTML=`
      <div id="set-player-card"></div>
      <h1>Tic Tac Toe</h1>
          <div id="player-selection">
              <div id="player1-name">
              <h2 class="name">player 1</h2>
              <div class="select"><img src=${q} alt="" /></div>
              </div>
              <div id="player2-name">
              <h2 class="name">player 2</h2>
              <div class="select"><img src=${q} alt="" /></div>
              </div> 
                </div>
                <div class="content">
                </div>
      `},playerSelectionCard:i=>{i.innerHTML=`
        <form action="">
          <div class="player-selection" id="player1">
            <div class="player-name">
              <label for="player-1">Player 1:</label>
              <input class="player-name" type="text" name="player-1" id="player-1" required />
            </div>
            <div class="piece-selection">
              <legend for="piece">Select Your Piece:</legend>
              <div>
              <!--
                // <input type="radio" name="piece-1" id="player1-piece-x" value="x" checked>
                // <label for="piece-x">x</label>
                // <input type="radio" name="piece-1" id="player1-piece-o" value="o">
                
                // <label for="piece-o">o</label> -->
                <input
                type="radio"
                name="piece-1"
                id="player1-piece-x"
                value="x"
                checked
              />
          
              <input
                type="radio"
                name="piece-1"
                id="player1-piece-o"
                value="o"
              />
          
              <div id="selector">
                  <label for="player1-piece-x"><img src=${T} alt="close" /></label>
                  <label for="player1-piece-o"><img src=${h} alt="circle" /></label>
              </div>
    
              </div>
              </div>
            </div>
            <div class="player-selection" id="player2">
              <div class="player-name">
                <label for="player-1">Player 2:</label>
                <input class="player-name" type="text" name="player-2" id="player-2" required />
              </div>
              <div class="piece-selection">
                <legend for="piece">Select Your Piece:</legend>
                <div>
                <!--
                  <input type="radio" name="piece-2" id="piece-x" value="x">
                  <label for="piece-x">x</label>
                  <input type="radio" name="piece-2" id="piece-o" value="o" checked>
                  <label for="piece-o">o</label> -->

                  <input
                  type="radio"
                  name="piece-2"
                  id="player2-piece-x"
                  value="x"
                />
            
                <input
                  type="radio"
                  name="piece-2"
                  id="player2-piece-o"
                  value="o"
                  checked
                />
            
                <div id="selector">
                    <label for="player2-piece-x"><img src=${T} alt="close" /></label>
                    <label for="player2-piece-o"><img src=${h} alt="circle" /></label>
                </div>


                </div>
                </div>
              </div>
          </div>
          <button type="submit">Start</button>
        </form>`},createTicTakToeBoard:i=>{i.innerHTML=`
          <div id="board">
            <div class="cell-item" id="11"></div>
            <div class="cell-item" id="12"></div>
            <div class="cell-item" id="13"></div>
            <div class="cell-item" id="21"></div>
            <div class="cell-item" id="22"></div>
            <div class="cell-item" id="23"></div>
            <div class="cell-item" id="31"></div>
            <div class="cell-item" id="32"></div>
            <div class="cell-item" id="33"></div>
          </div>
          `}}}function A(){let e=null,l;const t={name:"",piece:"x"},i={name:"",piece:"o"},r=c=>{e||(e=c),n(),p(),m()},n=()=>{let c=e.querySelector('input[id="player-1"]'),d=e.querySelector('input[id="player-2"]');c.addEventListener("input",u=>{t.name=u.target.value}),d.addEventListener("input",u=>{i.name=u.target.value})},p=()=>{let c=e.querySelectorAll('input[name="piece-1"]');c=Array.from(c);let d=e.querySelectorAll('input[name="piece-2"]');d=Array.from(d),c.forEach((u,o)=>{u.addEventListener("input",a=>{t.piece=a.target.value,a.target.value=="x"?i.piece="o":i.piece="x",d.filter(s=>s.value!=a.target.value).forEach(s=>{s.checked=!0})})}),d.forEach((u,o)=>{u.addEventListener("input",a=>{i.piece=a.target.value,a.target.value=="x"?t.piece="o":t.piece="x",c.filter(s=>s.value!=a.target.value).forEach(s=>{s.checked=!0})})})},m=()=>{e.querySelector("button").addEventListener("click",d=>{d.preventDefault(),f()?alert("Names Are Empty"):(l(x(t.name,y(t.piece)),x(i.name,y(i.piece))),e.classList.add("hidden"))})},y=c=>{if(c==="x")return M[0];if(c==="o")return M[1]},f=()=>{let c=e.querySelectorAll(".player-name");c=Array.from(c);let d=!1;return c.forEach(u=>{u.value==""&&(d=!0)}),d};return{setPlayerSelectionCard:r,setPlayerSetting:c=>{l=c}}}const S=O(),P=H(),E=A();S.createRootElement(document.querySelector("#app"));S.playerSelectionCard(document.querySelector("#set-player-card"));S.createTicTakToeBoard(document.querySelector(".content"));P.getBoardDOM(document.querySelectorAll(".cell-item"));P.setBoardSetAnnouncementDisplay(document.querySelector("#player-selection"));E.setPlayerSelectionCard(document.querySelector("#set-player-card"));E.setPlayerSetting(P.setPlayers);
