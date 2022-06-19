$(document).ready(function () {
    var cursor = $("#cursor"),
        follower = $("#aura");
    var posX = 0,
        posY = 0;
    var mouseX = 0,
        mouseY = 0;
    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });
            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });
    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    $("li, a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("li, a").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    var scen  = new TimelineMax({ paused: true, reversed: true });
    var scen2_1  = new TimelineMax();
    // var scen3 = new TimelineMax();
    // var scen4 = new TimelineMax();
    // var scen5 = new TimelineMax();
    // var scen6 = new TimelineMax();
    // var scen7 = new TimelineMax();
    // var scen8 = new TimelineMax();
    // var scen9 = new TimelineMax();
    // var scen10 = new TimelineMax();
    // var scen11 = new TimelineMax();

    var wi = $(window).width();

    var scen1_body              =  $('body'),
        scen1_logo              =  $('#logo'),
        scen1_logoLayer         =  $('.logo_layer'),
        scen1_logoTextLetter    =  $('.logo__text span'),
        scen1_logoTextLetters   =  $('.logo-text .letter_layer'),
        scen1_btn               =  $('.grup-btn .btn'),
        scen1_logoSmall         =  $('#logoSmall'),
        scen1_shareBtn          =  $('.share_it'),
        scen1_h1                =  $('h1'),
        scen1_timer             =  $('.container-countdown_item li'),
        scen1_btnBack           =  $('.btn-back-to');
        // scen1_scrollDownBtn     =  $('.scroll-btn');
    // scen1_scrollDownBtn  =  document.querySelector('.page-1 .');


    // function scenShow () {
    //     var scenShow  = new TimelineMax();
    //     scenShow
    //         .to('.page.small',0.5, {y:'-200%', opacity:0, delay:0.7})
    //         .to('.page.previous',0.5, {y:'200%', opacity:0, delay:0.7})
    //         .to('.page.active',0.5, {y:'0%', opacity:1})
    // }
    if(scen.reversed()){
        scen.play();
    } else {
        scen.reverse();
    }
    scen
        .staggerTo(scen1_body, 0.5, {
                delay:0.5,
                className: '-=page_load'},
            0.05)
        .from(scen1_logo, 0.9, {
            delay:1.2,
            yPercent: -50,
            opacity: 0,
            duration: 2,
            ease: Back.easeOut.config(1.7)
        })
        .staggerFrom( scen1_logoTextLetter, 0.7, {
            delay: 0.2,
            cycle: {
                opacity:[0],
                y: [48],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.3 );
                }
            }
        }, 0.08)
        .staggerFrom( scen1_logoTextLetters, 0.5, {
            cycle: {
                opacity:[0],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.05 );
                }
            }
        }, 0.02)
        .staggerTo(scen1_logoTextLetter, 0.05, {
                className: '+=neon_anim'},
            0.05)
        .staggerTo(scen1_logoLayer, 0.5, {
                className: '+=anim'},
            0.05)
        .from(scen1_h1, 0.9, {
            yPercent: 50,
            opacity: 0,
            duration: 2,
            ease: Back.easeOut.config(1.7)
        })
    TweenMax.staggerFrom(scen1_timer, 1.5, {
        delay:5,
            cycle: {
                opacity:[0],
                x: [50],
                ease: function(i) {
                    return Back.easeOut.config( i * 1.5 );
                }
            }
        },0.09)
    TweenMax.staggerFrom(scen1_btn, 1.5, {
        delay:5,
            cycle: {
                opacity:[0],
                x: [-50],
                ease: function(i) {
                    return Back.easeOut.config( i * 1.5 );
                }
            }
        },0.09);

    TweenMax.from(scen1_logoLayer, 0.5, {
        delay:3.6,
        opacity: 0,
        ease: "expo.out"
    })
    TweenMax.from(scen1_btnBack, 1.2, {
        delay:6.2,
        yPercent: 50,
        opacity: 0,
        ease: "expo.out"
    })

    scen2_1.to(scen1_shareBtn, 0.5, {
        css:{className:'+=reanim'}
    })
        .staggerFrom(scen1_shareBtn, 1, {
            delay: 3.7,
            cycle: {
                opacity:[0],
                scale: [1.2],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.9 );
                }
            }
        }, 0.09)
        .to(scen1_shareBtn, 0.25, {
            css:{className:'-=reanim'}
        });

});