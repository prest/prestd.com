(function ($) {
    "use strict";
    $(window).on("load", function () {
        var preLoder = $(".preloader");
        preLoder.delay(700).fadeOut(500)
    });
    $("a.page-scroll").on("click", function (event) {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash),
                speed = $(this).data("speed") || 800;
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top - 60
                }, speed)
            }
        }
    });
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            $("header").addClass("nav-fixed")
        } else {
            $("header").removeClass("nav-fixed")
        }
    });
    var navBar = $(".header_wrap");
    var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");
    $.each(navbarLinks, function (i, val) {
        var navbarLink = $(this);
        navbarLink.on("click", function () {
            navBar.find(".navbar-collapse").collapse("hide")
        })
    });
    $(".navbar-toggler").on("click", function () {
        $("header").toggleClass("active")
    });
    $(document).ready(function () {
        $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
            var $el = $(this);
            var $parent = $(this).offsetParent(".dropdown-menu");
            if (!$(this).next().hasClass("show")) {
                $(this).parents(".dropdown-menu").first().find(".show").removeClass("show")
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass("show");
            $(this).parent("li").toggleClass("show");
            $(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function (e) {
                $(".dropdown-menu .show").removeClass("show")
            });
            if (!$parent.parent().hasClass("navbar-nav")) {
                $el.next().css({
                    top: $el[0].offsetTop,
                    left: $parent.outerWidth() - 4
                })
            }
            return false
        })
    });
    var $particles_js = $("#banner_bg_effect");
    if ($particles_js.length > 0) {
        particlesJS("banner_bg_effect", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#9580FF"
                },
                shape: {
                    type: "polygon",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .4,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: .1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: .1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#9580FF",
                    opacity: .1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        })
    }
    $(".roadmap").owlCarousel({
        rtl: true,
        loop: false,
        margin: 30,
        nav: true,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        responsive: {
            0: {
                items: 1
            },
            380: {
                items: 2,
                margin: 15
            },
            600: {
                items: 3
            },
            1e3: {
                items: 5
            },
            1199: {
                items: 5
            }
        }
    });
    $(".tk_countdown_time").each(function () {
        var endTime = $(this).data("time");
        $(this).countdown(endTime, function (tm) {
            $(this).html(tm.strftime('<span class="counter_box"><span class="tk_counter days">%D </span><span class="tk_text">Days</span></span><span class="counter_box"><span class="tk_counter hours">%H</span><span class="tk_text">Hours</span></span><span class="counter_box"><span class="tk_counter minutes">%M</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span class="tk_counter seconds">%S</span><span class="tk_text">Seconds</span></span>'))
        })
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $(".scrollup").fadeIn()
        } else {
            $(".scrollup").fadeOut()
        }
    });
    $(".scrollup").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });
    $(function () {
        function ckScrollInit(items, trigger) {
            items.each(function () {
                var ckElement = $(this),
                    AnimationClass = ckElement.attr("data-animation"),
                    AnimationDelay = ckElement.attr("data-animation-delay");
                ckElement.css({
                    "-webkit-animation-delay": AnimationDelay,
                    "-moz-animation-delay": AnimationDelay,
                    "animation-delay": AnimationDelay
                });
                var ckTrigger = trigger ? trigger : ckElement;
                ckTrigger.waypoint(function () {
                    ckElement.addClass("animated").css("visibility", "visible");
                    ckElement.addClass("animated").addClass(AnimationClass)
                }, {
                    triggerOnce: true,
                    offset: "90%"
                })
            })
        }
        ckScrollInit($(".animation"));
        ckScrollInit($(".staggered-animation"), $(".staggered-animation-wrap"))
    });
})(jQuery);
