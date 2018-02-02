for (let i = 1; i < 8; i++) {
    $(".sidebar").append(`<li id="cat${i}">Cat ${i}</li>`);
    let elem = document.getElementById(`cat${i}`)
    elem.addEventListener('click', (function(num) {
        return function() {
            let catShow = `<div class="counter${num}"><h2>Cat ${num}</h2><span id='counter${num}'>0</span></div>
            <img id="cat-counter-${num}" src="img/cat${num}.jpg" alt="cute cat pic">`;
            $('.cat-show').empty().append(catShow);
            $(`#cat-counter-${num}`).on('click', (function(numCopy) {
                return function() {
                    var currentVal = $(`#counter${numCopy}`).text();
                    var newVal = parseInt($(`#counter${numCopy}`).text()) + 1;
                    $(`#counter${num}`).text(newVal);
                }
            })(num))
        };
    })(i))
}