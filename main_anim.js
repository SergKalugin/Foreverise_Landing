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
        scen1_btn               =  $('.page-1 .btn'),
        scen1_logoSmall         =  $('.header .logo-wrapp'),
        scen1_nav               =  $('.header_navi li')
        scen1_sideNav           =  $('.side-nav .nav-btn'),
        scen1_shareBtn          =  $('.share_it'),
        // scen1_shareReddit       =  $('.icon_body path'),
        // scen1_shareTwitter   =  $('#twitterIcon'),
        // scen1_shareTelegram  =  $('#telegramIcon'),
        scen1_scrollDownBtn     =  $('.scroll-btn');
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
            .staggerTo(scen1_body, 0.05, {
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
                0.05);

            TweenMax.from(scen1_logoLayer, 0.5, {
                delay:3.6,
                opacity: 0,
                ease: "expo.out"
            })

            TweenMax.from(scen1_btn, 1, {   
                delay:3.2,
                y: 50,
                opacity: 0,
                duration: 2,
                ease: 'power4'
            });
            TweenMax.from(scen1_scrollDownBtn, 1, {   
                delay:3.7,              
                y: 50,
                opacity: 0,
                duration: 2,
                ease: 'power4'
            })

            if(wi > 990) {
                TweenMax.from(scen1_logoSmall, 1, {   
                    delay:3.7,              
                    x: -150,
                    opacity: 0, 
                    duration: 2,
                    ease: 'power4'
                })
                TweenMax.staggerFrom( scen1_nav, 0.7, {
                    delay: 3.7,
                    cycle: {
                      opacity:[0],
                      x: [20],
                      ease: function(i) {
                          return Back.easeOut.config( i * 0.05 );
                      }
                    } 
                }, 0.05);
                TweenMax.staggerFrom(scen1_sideNav, 1, {
                    delay: 3.7,
                    cycle: {
                        opacity:[0],
                        y: [-50],
                        ease: function(i) {
                            return Back.easeOut.config( i * 0.09 );
                        }
                      } 
                }, 0.05);
            }
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

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // function scen1(){
        // scenShow ()
    //     TwenMax.to('.page-2',0.5, {y:'200%', opacity:0, delay:0.7})
    // }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen2_phone1   = $('.grup_it--1'),
        scen2_phone2   = $('.grup_it--2'),
        scen2_phone3   = $('.grup_it--3'),
        scen2_h2       = $('.page-2 .h2'),
        scen2_text     = $('.page-2 .text'), 
        scen2_btnPlay  = $('.page-2 .google-play'), 
        scen2_btnApp   = $('.page-2 .app-store');  

        function scen2(){
            scen.reversed();
            TweenMax.from(scen2_phone1, 1, {
                delay:2.2,
                x: 80,
                opacity: 0,
               ease: "power4.out"
            });
            TweenMax.from(scen2_phone2, 1, {
                delay:2.2,
                y: -80,
                opacity: 0,
               ease: "power4.out"
            }) ;
            TweenMax.from(scen2_phone3, 1, {
                delay:2.2,
                x: -80,
                opacity: 0,
               ease: "power4.out"
            }) ;
            TweenMax.from(scen2_h2, 1, {
                delay:1.6,
                opacity: 0,
                y: 40,
                ease: "power4.out"
          })
          TweenMax.from(scen2_text, 1, {
            delay:1.8,
              opacity: 0,
              y: 20,
              ease: "power4.out"
            })
            TweenMax.from(scen2_btnPlay, 1, {
                delay:2,
                x: 40,
                opacity: 0,
                duration: 2, ease: "back.out(1.4)",
            })
            TweenMax.from(scen2_btnApp, 1, {
                delay:2,
                x: -40,
                opacity: 0,
                duration: 2, ease: "back.out(1.4)",
            });
            // scenShow ();
        }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen3_h2       = $('.page-3 .h2'),
        scen3_btn      = $('.page-3 .btn'), 
        scen3_video    = $('.page-3 .video-container');  

    function scen3(){
        // console.log('anim 3');
        // TweenMax.from(scen2_phone1, 1.5, {
        //     x: 80,
        //     opacity: 0,
        //    ease: "back.out(1.7)"
        // });
        // TweenMax.from(scen2_phone2, 1.5, {
        //     y: -150,
        //     opacity: 0,
        //    ease: "back.out(1.7)"
        // }) ;
        // TweenMax.from(scen2_phone3, 1.5, {
        //     x: -80,
        //     opacity: 0,
        //    ease: "back.out(1.7)"
        // })
        TweenMax.from( scen3_video, 1.7, {
            delay:1.4, 
            y: 180,
            opacity: 0,
            ease: "back.out(4)"
        })
        TweenMax.from(scen3_h2, 1, {
            delay:1.6,
            opacity: 0,
            y: 40,
            ease: "expo.out"
      })
        TweenMax.from(scen3_btn, 1.32, {
            delay:0.7,
            opacity: 0,
            y: 40,
            ease: "back.out(2)"
        })
        // scenShow ()
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_4 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen4_h2            = $('.page-4 .h2'),
        scen4_h4            = $('.page-4 .h4'),
        scen4_phones        = $('.step_photo'),
        scen4_desc          = $('.step_desc'),
        scen4_descIcon      = $('.step_desc .icon_arr'),
        scen4_textContainer = $('.page-4 .bottom_info'), 
        scen4_text          = $('.page-4 .text-small');  
    function scen4(){        
        TweenMax.from(scen4_h2, 1, {
            delay:1.6, 
            opacity: 0,
            y: 40,
            duration: 2, 
            ease: "expo.out"
        })
        TweenMax.from(scen4_h4, 1, {
            delay:1.8, 
            opacity: 0,
            y: 60,
            duration: 2, 
            ease: "expo.out"
        })
        TweenMax.from(scen4_textContainer, 1, {
            delay:2, 
            opacity: 0,
            y: 40,
            duration: 2, 
            ease: "expo.out"
        })        
        TweenMax.staggerFrom(scen4_phones, 0.7, {
            delay: 1.4,
            cycle: {
                opacity:[0],
                z: 2,
                y: [150],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.09 );
                }
              } 
        }, 0.09);
        TweenMax.staggerFrom(scen4_desc, 0.7, {
            delay: 2.1,
            cycle: {
                opacity:[0],
                x: [-20],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.05 );
                }
              } 
        }, 0.09);
        TweenMax.staggerFrom(scen4_descIcon, 0.7, {
            delay: 2.4,
            cycle: {
                opacity:[0],
                x: [-20],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.12 );
                }
              } 
        }, 0.1);
        TweenMax.from(scen4_text , 1, {
            delay: 2.2,
            opacity: 0,
            y: 40,
            duration: 2, 
            ease: "expo.out"
        });
        // scenShow ();
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_5 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen5_h2            = $('.page-5 .h2'),
        scen5_h4            = $('.page-5 .h4'),
        scen5_phones        = $('.page-5 .phone'),
        scen5_progressbar   = $('.progress_bar'),
        scen5_range         = $('.range_it'),
        scen5_total         = $('.page-5 .estimated_total'), 
        scen5_btn           = $('.page-5 .btn');  
    function scen5(){
        TweenMax.from(scen5_h2, 1, {
            delay:1.6, 
            opacity: 0,
            y: 40,
            duration: 2, 
            ease: "expo.out"
        })
        TweenMax.from(scen5_h4, 1, {
            delay:1.8, 
            opacity: 0,
            y: 60,
            duration: 2, 
            ease: "expo.out"
        })
        TweenMax.from(scen5_phones, 1, {
            delay:1.8,
            opacity: 0,
            y: 140,
            ease: "expo.out"
        })        
        TweenMax.staggerFrom(scen5_progressbar, 1.7, {
            delay:2.1,
            opacity: 0,
            y: 60,
            ease: "expo.out"
        });
        TweenMax.staggerFrom(scen5_range, 1.2, {
            delay: 1.8,
            cycle: {
                opacity:[0],
                y: [50],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.2 );
                }
            }
        },0.09);
        TweenMax.staggerFrom(scen5_total, 1, {
            delay:2, 
            opacity: 0,
            x: 80,
            duration: 2, 
            ease: "expo.out"
        }, 0.09);        
        TweenMax.from(scen5_btn, 1, {
            delay: 2.2,
            opacity: 0,
            x: -80,
            duration: 2, 
            ease: "expo.out"
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_6 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen6_h2              = $('.page-6 .h2'),
        scen6_h4              = $('.page-6 .h4'),
        scen6_text            = $('.page-6 .text'),
        scen6_phones          = $('.page-6 .phone'),
        scen6_estimated       = $('.estimated_butons a'),
        scen6_estimated_info  = $('.page-6 .estimated_info'),
        scen6_total           = $('.page-6 .estimated_total'), 
        scen6_btn             = $('.page-6 .btn'),
        scen6_logo            = $('.page-6 .logo');  
    function scen6(){
        TweenMax.from(scen6_h2, 1, {
            delay:2, 
            opacity: 0,
            y: 40,
            duration: 2, 
            ease: "expo.out"
        })
        TweenMax.from(scen6_h4, 1, {
            delay:2, 
            opacity: 0,
            y: 60,
            duration: 2, 
            ease: "expo.out"
        })
        TweenMax.from(scen6_text, 1, {
            delay:2.4,
            opacity: 0,
            x: 80,
            ease: "expo.out"
        },0.05);
        TweenMax.from(scen6_phones, 1, {
            delay:1.8,
            opacity: 0,
            y: 240,
            ease: "expo.out"
        })  
        TweenMax.staggerFrom(scen6_estimated, 1.2, {
            delay: 1.8,
            cycle: {
                opacity:[0],
                y: [50],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.2 );
                }
              } 
        },0.09);
        TweenMax.from(scen6_total, 1, {
            delay:3,
            opacity: 0,
            y: 80,
            ease: "expo.out"
        }, 0.09);
        TweenMax.from(scen6_estimated_info, 1, {
            delay:2.8,
            opacity: 0,
            y: 90,
            ease: "expo.out"
        }, 0.09);
        TweenMax.from(scen6_btn, 1, {
            delay: 2,
            opacity: 0,
            x: 4,
            ease: "expo.out"
        });      
        TweenMax.from(scen6_logo, 1, {
            delay: 2,
            opacity: 0,
            x: -40,
            ease: "expo.out"
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_7 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen7_h2              = $('.page-7 .h2'),
        scen7_h3              = $('.page-7 .h3'),
        scen7_text1           = $('.page-7 .text_it--1'),
        scen7_text2           = $('.page-7 .text_it--2'),
        scen7_video           = $('.page-7 .video');  
    function scen7(){
        TweenMax.from(scen7_h2, 1.5, {
            delay:1.8,
            opacity: 0,
            y: 70,
            ease: "expo.out"
        })
        TweenMax.from(scen7_h3, 1.7, {
            delay:1.7,
            opacity: 0,
            y: 80,
            duration: 2,
            ease: "expo.out"
        })
        TweenMax.from( scen7_video, 1.4, {
            delay:1.7,
            y: 180,
            opacity: 0, 
            ease: "back.out(2)",
        })
        TweenMax.from(scen7_text1, 1.5, {
            delay:1.7,
            opacity: 0,
            x: 60,
            ease: "expo.out"
        });
        TweenMax.from(scen7_text2, 1.5, {
            delay:1.7,
            opacity: 0,
            x: -60,
            ease: "expo.out"
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_8 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen8_photo    = $('.page-8 img');  
    function scen8(){
        TweenMax.from(scen8_photo, 2, {
            opacity: 0,
            y: 140,
            ease: "expo.out"
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_9 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen9_h2              = $('.page-9 .h2'),
        scen9_calendar_month  = $('.calendar_month'),
        scen9_calendar_cell  = $('.calendar_cell');  
    function scen9(){
        TweenMax.staggerFrom( scen9_calendar_month, 1, {
            delay: 2.2,
            cycle: {
              opacity:[0],
              x: [-80],
              ease: function(i) {
                  return Back.easeOut.config( i * 0.7 );
              }
            } 
        }, 0.06)
        TweenMax.staggerFrom( scen9_calendar_cell, 0.7, {
            delay: 3.2,
            cycle: {
                opacity:[0],
                y: [10],
                ease: function(i) {
                    return Back.easeOut.config( i * 0.8 );
                }
            }
        }, 0.08)
        TweenMax.from(scen9_h2, 1.5, {
            delay: 3.3,
            opacity: 0,
            y: 40,
            ease: "expo.out"
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_10 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen10_h2     = $('.page-10 .h2'),
        scen10_input  = $('.page-10 .grup-input'),
        scen10_btn    = $('.page-10 .btn'),
        scen10_marquee   = $('.page-10 .marquee'),
        scen10_bg     = $('.page-10 .bg');
    function scen10(){
        TweenMax.staggerFrom( scen10_h2, 2, {
            delay: 2.4,
            ease: Back.easeOut.config( 0.05 ),
            opacity: 0,
            y: 40
        });
        TweenMax.from(scen10_input, 1, {
            delay: 1.8,
            ease: Back.easeOut.config( 0.05 ),
            opacity: 0,
            y: 40
      });
      TweenMax.from(scen10_btn, 1, {
            delay: 2.1,
          ease: Back.easeOut.config( 0.05 ),
            opacity: 0,
            y: 40
      }); TweenMax.from(scen10_bg, 1.5, {
            delay: 1.2,
            ease: Sine.easeInOut,
            opacity: 0
        });
        TweenMax.from(scen10_marquee, 1.5, {
            delay: 1.2,
            ease: Sine.easeInOut,
            opacity: 0,
            y: 50
        });
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx scen_11 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var scen11_img   = $('.logo_be-part svg'),
        scen11_text  = $('.page-11 .text-big'),
        scen11_text  = $('.page-11 .text-big'),
        scen11_h5  = $('.page-11 .h5'),
        scen11_textnorm  = $('.page-11 .text-norm'),
        scen11_btn   = $('.page-11 .btn');  
    function scen11(){
        TweenMax.from(scen11_img , 2, {
            delay:1.8, 
            opacity: 0,
            y: 80,
            ease: Back.easeOut.config( 0.05 )
        })        
        TweenMax.from(scen11_text, 2, {
            delay: 2,
            opacity: 0,
            y: 80,
            ease: Back.easeOut.config( 0.05 )
      });
      TweenMax.from(scen11_btn, 2.2, {
            delay: 2.2,
            opacity: 0,
            y: 80,
            ease: Back.easeOut.config( 0.05 )
      });
      TweenMax.from(scen11_h5, 2.2, {
            delay: 2.4,
            opacity: 0,
            x: -80,
            ease: Back.easeOut.config( 0.05 )
      });
      TweenMax.from(scen11_textnorm, 2.2, {
            delay: 2.6,
            opacity: 0,
            x: -80,
            ease: Back.easeOut.config( 0.05 )
      });
    }

    var pages = $(".page").length,
        scrolling = false,
        curPage = 1;
        $('#currentPage').text(curPage); 
        $('#lastPage').text(pages);

    function pagination(page, movingUp) {
        scrolling = true;
        var diff = curPage - page,
            oldPage = curPage;
            curPage = page;
            $(".page").removeClass("active small previous");
            $(".page-" + page).addClass("active");
        
        $(".nav-btn").removeClass("active");
        $(".nav-page" + page).addClass("active");
        if (page > 1) {
            $(".page-" + (page + 1)).addClass("previous");
            if (movingUp) {
                $(".page-" + (page - 1)).hide();
                var hackPage = page;
                setTimeout(function () {
                    $(".page-" + (hackPage - 1)).show();
                }, 600);
            }
            while (--page) {
                $(".page-" + page).addClass("small");
            }
        }
        
        if (diff > 1) {
            for (var j = page + 1; j < oldPage; j++) {
                $(".page-" + j + " .half").css("transition", "transform .7s ease-out");
            }
        }
        setTimeout(function () {
            scrolling = false;
            // console.log('scrolling');
        }, 1000);
    }

    function navigateUp() {
        var wi = $(window).width();
        if (curPage > 1 && wi > 991) {
            curPage--;
            pagination(curPage, true);
            scrollTitle();
            // console.log(curPage + 'testUp');
            $('#currentPage').text(curPage);
            $('.scroll-btn').css('visibility','visible');

            $('.active .wrapp-content').addClass('do-transition');
            setTimeout(function () {
                $('.active .wrapp-content').removeClass('do-transition')
            }, 600);   
        }                 
        if(curPage ===  11){                            
            $('.scroll-btn').css('visibility','hidden')
        } else  {
            $('.scroll-btn').css('visibility','visible')
        }
    }

    function navigateDown() {
        var wi = $(window).width();
        if (curPage < pages && wi > 991) {
            curPage++;
            pagination(curPage);
            // console.log(curPage + '=' + pages);
            scrollTitle();
            $('#currentPage').text(curPage);  
            $('.active .wrapp-content').addClass('do-transition');
            setTimeout(function () {
                $('.active .wrapp-content').removeClass('do-transition');
            }, 600);
        }
        if (curPage ===  11) {
            $('.scroll-btn').css('visibility','hidden')
        } else  {
            $('.scroll-btn').css('visibility','visible')
        }
    }

    function scrollTitle() {
        var scrollTileText = $('.scroll-btn--title');
        var logo = $('.header .logo');
        if(curPage ===  1){
            scrollTileText.text('Product');
            logo.addClass('hide-logo');
            setTimeout(function () {
                logo.attr('src', 'materials/photo/logo-header.svg').removeClass('hide-logo rz');
            }, 1500)

            $('.page-2').addClass('previous');
        }
        if(curPage >  1 && !logo.hasClass('rz')){
            logo.addClass('hide-logo rz');
            setTimeout(function () {
                logo.attr('src', 'materials/photo/foreverise_logo.svg').removeClass('hide-logo');
            }, 1000)
        }
        if(curPage ===  2){
            scrollTileText.text('How it works');  
            setTimeout(function () {
                scen2();
            }, 100);    
        }
        if(curPage ===  3){
            scrollTileText.text('Process scheme');
            setTimeout(function () {
                scen3();
            }, 100);
        }
        if(curPage ===  4){
            scrollTileText.text('Income calculator');
            setTimeout(function () {
                scen4();
            }, 100);   
        }
        if(curPage ===  5){
            scrollTileText.text('How to start');
            setTimeout(function () {
                scen5();
            }, 100);   
        }
        if(curPage ===  6){
            scrollTileText.text('About');
            setTimeout(function () {
                scen6();
            }, 100);  
        }
        if(curPage ===  7){
            scrollTileText.text('Tokenomics');
            setTimeout(function () {
                scen7();
            }, 100);  
        }
        if(curPage ===  8){
            scrollTileText.text('Roadmap');
            setTimeout(function () {
                scen8();
            }, 100);  
        }
        if(curPage ===  9){
            scrollTileText.text('Contract address');
            setTimeout(function () {
                scen9();
            }, 100);  
        }
        if(curPage ===  10){
            scrollTileText.text('Disclaimer');
            setTimeout(function () {
                scen10();
            }, 100);  
        }
        if(curPage ===  11){
            scrollTileText.text('Disclaimer');
            setTimeout(function () {
                scen11();
            }, 100);  
        }

        if(curPage >= 2 && curPage <= 6) {
            $('.nav-btn.btn-custom').addClass('color-pink')
        } else {
            $('.nav-btn.btn-custom').removeClass('color-pink');
        }
    }

    var timerTrigger;
    $(document).on("mousewheel DOMMouseScroll touchmove", function (e) {
        clearTimeout(timerTrigger);
        var wi = $(window).width();
        Trigger = setTimeout(function() {
            if (!scrolling && wi > 991) {
                if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                        navigateUp();
                } else {
                       navigateDown();
                }
            }
        }, 500);
        if (wi < 991) {
            var prevScrollpos    = window.pageYOffset;
            var hederShow        = document.querySelector(".header");
            var logo             = document.querySelector('.header .logo');
            var bootomSide       = document.querySelector('.side-share');
            var bootomSideCustom = document.querySelector('.side-share.scroll');

            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                var intElemOffsetHeight = document.querySelector('.page-1').offsetHeight;
                var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
                // console.log(currentScrollPos);
                if (prevScrollpos > currentScrollPos  ) {
                    hederShow.style.transform = "translate3d(0, 0, 0)";
                }
                else if (prevScrollpos < currentScrollPos  && !document.querySelector('.header_navi').classList.contains("active") && scrollTop > 250) {
                    hederShow.style.transform = "translate3d(0, -200px, 0)";
                }

                if (prevScrollpos > intElemOffsetHeight){
                    bootomSide.classList.add("scroll");
                    logo.setAttribute('src', 'materials/photo/foreverise_logo.svg');
                }
                else {
                    bootomSide.removeAttribute('style');
                    document.querySelector('.side-share').classList.remove("scroll");
                    logo.setAttribute('src', 'materials/photo/logo-header.svg');
                }
                if (prevScrollpos > currentScrollPos && prevScrollpos > intElemOffsetHeight && bootomSide.classList.contains("scroll")) {
                    bootomSide.style.transform = "translate3d(0, 0, 0)";
                    bootomSide.style.visibility = "visible";
                }
                else if (prevScrollpos < currentScrollPos && prevScrollpos > intElemOffsetHeight && bootomSide.classList.contains("scroll")) {
                    bootomSide.style.transform = "translate3d(0, 120px, 0)";
                }
                prevScrollpos = currentScrollPos;
                // console.log(prevScrollpos + '=' + currentScrollPos);
            }

        }
        passive: true;
    });

    $(document).on("click", ".scroll-btn", function () {
        var wi = $(window).width();
        if (scrolling) return;
        if ($(this).hasClass("up")) {
            if(wi > 990){
                navigateUp();
            }                        
        } else {
            if(wi > 990){
                navigateDown();
            }            
        }
        if(wi < 991){
            $('html, body').animate({scrollTop: $('.page-2').offset().top}, 'slow');
        }
    });

    $(document).on("keydown", function (e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
    });

    $(document).on("click", ".nav-btn:not(.active)", function () {
        var wi = $(window).width();
        var numPage = $(this).attr("data-target");
        // console.log(numPage);
        if (scrolling) return;
        pagination(+$(this).attr("data-target"));
        $('#currentPage').text(curPage);  
        if(wi < 990){
            $('.showMenu_js').removeClass('open');
            $('.header_navi').removeClass('active');
            $('body').css('overflow-y', 'auto');
            setTimeout(function () {
                $('html, body').animate({scrollTop: $('.page-' + numPage).offset().top}, 'slow');
            }, 200)
        }
        if (curPage ===  11) {
            $('.scroll-btn').css('visibility','hidden')
        } else  {
            $('.scroll-btn').css('visibility','visible')
        }
        if(wi > 991){
            scrollTitle();
        }
    });

    $(document).on("click", ".logo_to-top_js", function () {
        var wi = $(window).width();
        var numPage = $(this).attr("data-target");
        // console.log(numPage);
        if (scrolling) return;
        pagination(+$(this).attr("data-target"));
        $('#currentPage').text(curPage);
        if(wi < 990){
            $('.showMenu_js').removeClass('open');
            $('.header_navi').removeClass('active');
            $('body').css('overflow-y', 'auto');
            setTimeout(function () {
                $('html, body').animate({scrollTop: $('.page-' + numPage).offset().top}, 'slow');
            }, 200)
        }
        if (curPage ===  11) {
            $('.scroll-btn').css('visibility','hidden')
        } else  {
            $('.scroll-btn').css('visibility','visible')
        }
        if(wi > 991){
            scrollTitle();
        }
    });

    $(document).on("click", ".btn_to-top_js", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

});
var loopVideo = $('#loopVideo');
function loadLoopVideo() {
    loopVideo[0].src = "video/UI_Full_Loop_460x996_x2.mp4";
    loopVideo[0].load();
    loopVideo[0].play();
}
$(window).load(function(){
    loadLoopVideo();
});

