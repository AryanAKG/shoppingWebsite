const bar = document.querySelector('#bar');
// const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.querySelector('#navbar');

    nav.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
    var x = document.getElementById("bar");
    if (x.className === "bar") {
      nav.className += " active";
    }


// if(close)
// {
//     close.addEventListener('click', () => {
//         nav.classList.remove('active');
//     })
// }
let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
})


