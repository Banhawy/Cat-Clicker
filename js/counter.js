$(function () {
    var model = {
        init: function () {
            this.cats = [];
            for (let i = 1; i < 8; i++) {
                var cat = {
                    name: `Cat${i}`,
                    counter: 0
                }
                this.cats.push(cat);
            }
        },
        getCat: function (num) {
            return this.cats[num];
        },
        getAllCats: function () {
            return this.cats;
        }
    };

    var octopus = {
        getCat : function (num) {
            return model.getCat(num);
        },
        getAllCats: function () {
            return model.getAllCats();
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
                htmlStr += `<li>${cat.name}</li>`;
            });
            this.catList.html(htmlStr);
        }
    };

    octopus.init();
})