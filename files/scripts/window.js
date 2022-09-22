// for 'try for free' btn
const to_form = document.getElementById('cta').addEventListener('click', () => {
    window.scrollTo({top:1300, behavior: "smooth"});
})

const show_video = document.getElementById('clicktutorial').addEventListener('click', ()=>{
    let vid = document.getElementById('harrybhai');
    if (vid.style.display == 'none') {
        vid.style.display = 'block';
    } else {
        vid.style.display = 'none';
    }
})