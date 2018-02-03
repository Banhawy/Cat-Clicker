$(function () {
    var model = {
        init: function () {
            this.cats = [];
            for (let i = 1; i < 8; i++) {
                var cat = {
                    name: `Cat${i}`,
                    counter: 0,
                    catNumber: i,
                    currentCat: false
                }
                this.cats.push(cat);
            }
        },
        getCat: function (num) {
            return this.cats[num-1];
        },
        getAllCats: function () {
            return this.cats;
        },
        getCurrentCat: function () {
            for (var i = 0; i < this.cats.length; i++) {
                let cat = this.cats[i];
                if (cat.currentCat) return cat;

            }
        },
        setCurrenCat: function (num) {
            let current = this.getCurrentCat(num - 1);
            if (current) current.currentCat = false;
            this.cats[num - 1]['currentCat'] = true;
        },
        increment: function (num) {
            let cat = this.getCat(num);
            cat.counter++;
        }
    };

    var octopus = {
        getCat : function (num) {
            return model.getCat(num);
        },
        getAllCats: function () {
            return model.getAllCats();
        },
        getCurrentCat: function () {
            return model.getCurrentCat();
        },
        incrementCounter: function (num) {
            return model.increment(num);
        },
        setCatView: function () {
            catView.init();
            catView.hide();
            catView.render();
        },
        setCurrentCat: function (num) {
            return model.setCurrenCat(num);
        },
        updateCounterView: function () {
            catView.render();
        },
        init: function () {
            model.init();
            listView.init();
        }
    };

    var listView = {
        init: function () {
            this.catList = $('.cat-list');
            this.cats = octopus.getAllCats();
            listView.render();
        },
        render: function () {
            var htmlStr = '';
            this.cats.forEach(function (cat) {
                htmlStr += `<li id="${cat.name}">${cat.name}</li>`;
            });
            this.catList.html(htmlStr);
            this.cats.forEach(function (cat) {
                $(`#${cat.name}`).on('click', (function (num) {
                    return function () {
                        octopus.setCurrentCat(num);
                        octopus.setCatView();
                    }
                })(cat.catNumber));
            })
        }
    };

    var catView = {
        init: function () {
            this.catShow = $('.cat-show');
            this.currentCat = octopus.getCurrentCat();
            catView.render();
        },
        hide: function () {
            this.catShow.empty();
        },
        render: function () {
            let catDiv = `<div class="counter"><h2>${this.currentCat.name}</h2><span>${this.currentCat.counter}</span></div>
            <img id="cat-counter-${this.currentCat.catNumber}" src="img/cat${this.currentCat.catNumber}.jpg" alt="cute cat pic">`;
            this.catShow.html(catDiv);
            $(`#cat-counter-${this.currentCat.catNumber}`).on('click', (function (num) {
                return function () {
                octopus.incrementCounter(num);
                octopus.updateCounterView();
                }
            })(this.currentCat.catNumber))
        }
    }

    octopus.init();
})