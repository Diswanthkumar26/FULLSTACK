window.addEventListener('resize',()=>{
    const dimensions = `Window dimensions : ${window.innerWidth}px x ${window.innerHeight}px`;
    document.getElementById('dimensions').textContent = dimensions;


});

window.addEventListener('load',()=>{
    console.log('window loaded');
});

window.addEventListener('scroll',()=>{
    console.log('window scroll');
})