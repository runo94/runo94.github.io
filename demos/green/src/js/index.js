jQuery('document').ready(function ($) {
    const wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                if (box.classList.contains('second-section')) {

                    $('.stat-item h3 label').each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }

            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();
})