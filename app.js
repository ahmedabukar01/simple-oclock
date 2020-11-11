const oclock = document.querySelector('.oclock');

let tick = ()=>{
    let time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `
    oclock.innerHTML = html;
}

setInterval(tick,1000);