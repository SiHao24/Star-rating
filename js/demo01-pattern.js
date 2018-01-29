var rating = (function() {
    //点亮整颗
    var LightEntire = function(el, options) {
        this.$el = $(el);
        this.$item = this.$el.find('.rating-item');
        this.opts = options;
    };
    LightEntire.prototype.init = function() {
        this.lightOn(this.opts.num);
        if(this.opts.readOnly) {
            this.bindEvent();
        }
    };

    LightEntire.prototype.lightOn = function(num) {
        //对num进行取整操作  parseInt(4.9) => 4 parseInt(4.2) => 4
        num = parseInt(num);
        this.$item.each(function(index) {
            if(index < num) {
                $(this).css('background-position', '0 -40px')
            }else {
                $(this).css('background-position', '0 0');
            }
        })
    };

    LightEntire.prototype.bindEvent = function() {
        var self = this,
            itemLength = self.$item.length;
        self.$el.on('mouseover', '.rating-item', function() {
            var num = $(this).index() + 1;
            self.lightOn(num);
            (typeof self.opts.select === 'function') && self.opts.select.call(this, self.opts.num, itemLength);
            self.$el.trigger('select', [self.opts.num, itemLength])
        }).on('click', '.rating-item', function() {
            self.opts.num = $(this).index() + 1;
            (typeof self.opts.chosen === 'function') && self.opts.chosen.call(this, self.opts.num, itemLength);
            self.$el.trigger('chosen', [self.opts.num, itemLength])
        }).on('mouseout', function() {
            self.lightOn(self.opts.num);
        })
    };


    //默认参数
    var defaults = {
        num: 0,
        readOnly: false,
        select: function() {

        },
        chosen: function() {}
    };


    //初始化 
    var init = function(el, options) {
        // 用options的内容覆盖default是的内容，将生成的内容存放在空对象中，并将这个对象返回出来
        options = $.extend({}, defaults, options);
        new LightEntire(el, options).init();
    };

    return {
        init: init
    }
})();

rating.init('#rating', {
    num: 2,
    // select: function(num, total) {
    //     console.log(this);
    //     console.log(num + '/' + total);
    // }
});

$('#rating').on('select', function(e, num, total) {
    console.log(num + '/' + total);
}).on('chosen', function(e, num, total) {
    console.log(num + '/' + total);
})
