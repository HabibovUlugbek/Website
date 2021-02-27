// Bubble
function createBubble() {
    const works = document.querySelector('.content')
    const createElement = document.createElement('span')
    var size = Math.random() * 60 ;
    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth - 80 + 'px';
    works.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
    
}
    setInterval(createBubble,300);


// jobs  fade effect 
    function blinkText() {
        $("#blink").fadeOut(2500).fadeIn(2500);
        setTimeout(blinkText,500);
    }
    $(document).ready(function(){
        blinkText();
    });

