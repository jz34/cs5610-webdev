window.onload = function() {
    Page.arr = Page.pushArr();
    Page.setClickPageNum();
    Page.allContent("null");
};

var Page = {
    defaultPerPageNum: 3,
    arr: null,
    getClickPageNum: function(diva) {
        return parseFloat(diva.innerHTML);
    },
    setClickPageNum: function() {
        var divx = document.getElementById('pagenum');
        var a = divx.children;
        var len = a.length;
        for (var i = 0; i < len; i++) {
            a[i].onclick = function() {
                Page.allContent(this);
            };
        }
    },
    pushArr: function() {
        var arr = new Array();
        var ul = document.getElementById('ul1');
        var len = ul.children.length;
        for (var i = 0; i < len; i++) {
            arr.push(ul.children[i]);
        }
        return arr;
    },
    allContent: function(divb) {
        var ul = document.getElementById('ul1');
        ul.innerHTML = "";
        var pp = 3;
        if ("null" == divb) {
            divb = document.getElementById('pagenum').children[0];
            divb.className = "on";
        }
        var pg = this.getClickPageNum(divb);
        var ppj = pp * (pg - 1);
        var end = ppj + pp;
        var arr = this.arr;
        // var pnums = arr.length / pp > parseInt(arr.length / pp) ? parseInt(arr.length / pp) + 1 : arr.length / pp;
        for (var i = ppj; i < end; i++) {
            var a = arr[i];
            if (null != a) {
                ul.appendChild(a);
            }
        }
    }
};