// mob nav
// menu click event
$('.showMenu_js').click(function() {
    $(this).toggleClass('open');
        if($(this).hasClass('open')) {
            $('.header_navi').addClass('active');
            $('body').css('overflow-y', 'hidden');
        }
        else {
            $('.header_navi').removeClass('active');
            $('body').css('overflow-y', 'auto');
        }
});

// modal
var ebModal = $('#modal');
var ebBtn = $('.btn-modal');
var ebBody = $('#modalContainer');
var ebSpan = $('.m-close');

ebBtn.on('click', function(e){
    e.preventDefault();
    ebModal.addClass('active');
});
ebSpan.on('click', function(e){
    e.preventDefault();
    ebModal.removeClass('active');
});
// $(document).on('click', function (event){
//     var $target = $(event.target);
//     if (!$target.closest(ebBody).length && !ebModal.hasClass('active')) {
//         console.log('click 2');
//         ebModal.removeClass('active');
//     }
// });

// $('.js-close-btn').on('click', function(){
//     $('#overlay').fadeOut();
//     $('.js-modal').fadeOut();
// });
// $('#overlay').on('click', function(){
//     $('#overlay').fadeOut();
//     $('.js-modal').fadeOut();
// });

// ebBtn.onclick = function(e) {
//     console.log('test modal');
//     e.preventDefault();
//     ebModal.classList.add('active');
// }
// ebSpan.onclick = function() {
//     console.log('test modal1');
//     ebBody.classList.add('close');
//     setTimeout(() => {
//         ebModal.classList.remove('active');
//         ebBody.classList.remove('close');
//     }, 250);
// }
// window.onclick = function(event) {
//     console.log('test modal2');
//     if (event.target == ebModal && !ebModal.classList.contains("active")) {
//         ebBody.classList.add('close');
//         setTimeout(() => {
//             ebModal.classList.remove('active');
//             ebBody.classList.remove('close');
//         }, 250);
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
   // range
var sliderMonth = document.getElementById('month-range');
var sliderTime = document.getElementById('time-range');
// var countsTime = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

noUiSlider.create(sliderMonth, {
    // range: range_all_sliders,
    start: 3,
    step: 1,
    connect: 'lower',
    range: {
        'min': 1,
        'max': 12
    },
    pips: {
        mode: 'steps',
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        density: 1,
        stepped: 1
    },
});

noUiSlider.create(sliderTime, {
    // range: range_all_sliders,
    start: 8,
    step: 1,
    value: 0,
    connect: 'lower',
    range: {
        'min': 1,
            'max': 24
    }
    // tooltips: [
    //     {
    //       to: function ( value, unencoded ) {
    //         // return parseInt(value + "<span>hour per day</span")
    //         return (parseInt(value) + " <span class='tooltip-text'>hour per day</span>");
    //       }
    //     }
    //   ]
});

function calculate () {
    var valMonth = sliderMonth.querySelector('.noUi-handle');
    var valMonthResult = valMonth.getAttribute('aria-valuenow');

    var valTime = sliderTime.querySelector('.noUi-handle');
    var valTimehResult = valTime.getAttribute('aria-valuenow');
    var valTimehResultInfo = Math.round(valTimehResult);

    // var total = Math.round(valMonthResult * (valTimehResult * 0.4));
    // console.log(valMonthResult + valTimehResult );
    const totalPercent = Math.round(valTimehResult *  4.16666666667);
    document.getElementById("savings").innerHTML = `${totalPercent} %`;
    document.getElementById("time-range-value").innerHTML = valTimehResultInfo + ` <span class='tooltip-text'>hour per day</span>`;

    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    // console.log(valTimehResult);

    function setProgress (percent) {
        const offset = Math.round(circumference - (15.7079583333 * valTimehResult));
        circle.style.strokeDashoffset = offset;
    }
    setProgress ();
}
calculate ();
sliderTime.noUiSlider.on('update', function () {
    // console.log('time')
    calculate ();
    calculatePeriod ();
    // progressBar();
});

sliderMonth.noUiSlider.on('update', function () {
    calculatePeriod ();
});
function calculatePeriod () {

    var valMonth = sliderMonth.querySelector('#month-range .noUi-handle');
    var valMonthResult = valMonth.getAttribute('aria-valuenow');
    var valTime = sliderTime.querySelector('#time-range .noUi-handle');
    var valTimehResult = valTime.getAttribute('aria-valuenow');
    var constNumActive = $('.estimated_buton.active').attr('data-target');

    // console.log(valMonthResult);

    var total = Math.round(valMonthResult * (valTimehResult * 12.41));

    var totalActive = total * constNumActive; //Quick start
    document.querySelector(".estimated_summ").innerHTML = `${total} USDT`;
    document.getElementById("total_summ").innerHTML = `${totalActive} USDT`;
    // console.log(totalActive);


    const totalSummActive = $('#total_summ');
    var progressSumActive = constNumActive * total;
    totalSummActive.html(progressSumActive + ' USDT');

    var calcBtn = $('.estimated_buton');
    const totalSumm = $('#total_summ');
    calcBtn.on('click', function calcSumm(e){
        e.preventDefault();
        var constNum = $(this).attr('data-target');
        calcBtn.removeClass('active');
        $(this).addClass('active');
        var progressSum = constNum * total;
        totalSumm.html(progressSum + ' USDT');
    });

}

    // slick slider
    const init = {
        // autoplay: true,
        infinite: false,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev flex--center"><svg class="arr-border"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path class="f48628fe-00ef-4bb8-a406-c005c98d3a43" d="M49.5,5.103A4.5,4.5,0,0,0,45,.603H8.5326A4.50009,4.50009,0,0,0,4.7343,2.6899L1.2017,8.2502A4.50009,4.50009,0,0,0,.5,10.6633V45.103a4.5,4.5,0,0,0,4.5,4.5H41.5662A4.49985,4.49985,0,0,0,45.4934,47.3l3.4339-6.1382A4.5003,4.5003,0,0,0,49.5,38.9649Z" transform="translate(0 -0.103)"/></svg><svg class="slider-arr" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292919 8.81062C-0.0976048 8.4201 -0.0976048 7.78693 0.292919 7.39641L6.65688 1.03245C7.04741 0.641923 7.68057 0.641923 8.07109 1.03245C8.46162 1.42297 8.46162 2.05614 8.07109 2.44666L2.41424 8.10352L8.07109 13.7604C8.46162 14.1509 8.46162 14.7841 8.07109 15.1746C7.68057 15.5651 7.04741 15.5651 6.65688 15.1746L0.292919 8.81062ZM19 9.10352H1.00003V7.10352H19V9.10352Z" fill="#AEAEAE"/></svg></div>',
        nextArrow: '<div class="slick-next flex--center"><svg class="arr-border"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path class="f48628fe-00ef-4bb8-a406-c005c98d3a43" d="M49.5,5.103A4.5,4.5,0,0,0,45,.603H8.5326A4.50009,4.50009,0,0,0,4.7343,2.6899L1.2017,8.2502A4.50009,4.50009,0,0,0,.5,10.6633V45.103a4.5,4.5,0,0,0,4.5,4.5H41.5662A4.49985,4.49985,0,0,0,45.4934,47.3l3.4339-6.1382A4.5003,4.5003,0,0,0,49.5,38.9649Z" transform="translate(0 -0.103)"/></svg><svg class="slider-arr" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292919 8.81062C-0.0976048 8.4201 -0.0976048 7.78693 0.292919 7.39641L6.65688 1.03245C7.04741 0.641923 7.68057 0.641923 8.07109 1.03245C8.46162 1.42297 8.46162 2.05614 8.07109 2.44666L2.41424 8.10352L8.07109 13.7604C8.46162 14.1509 8.46162 14.7841 8.07109 15.1746C7.68057 15.5651 7.04741 15.5651 6.65688 15.1746L0.292919 8.81062ZM19 9.10352H1.00003V7.10352H19V9.10352Z" fill="#AEAEAE"/></svg></div>',
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
     };


      $(() => {
        const win = $(window);
        const slider = $(".calendar");
        const btnNext = $('.carousel-next');
        const btnPrev = $('.carousel-prev');

        win.on("load resize", () => {
          if (win.width() < 990) {
            slider.not(".slick-initialized").slick(init);
          } else if (slider.hasClass("slick-initialized")) {
            slider.slick("unslick");
          }
        });
      });


      var clipboard = new ClipboardJS('.btn_copy_js');

      $('.btn_copy_js').on('click', function() {
        let theButton = $(this);
        clipboard.on('success', function(e) {
            theButton.addClass('success');
            theButton.children('.success-result').text('Copied');
            setTimeout(function() {
                theButton.removeClass('success');
                theButton.children('.success-result').empty();
            }, 2500)
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            theButton.addClass('error');
            theButton.children('.success-result').text('Error');
            setTimeout(function() {
                theButton.removeClass('error');
                theButton.children('.success-result').empty();
            }, 2500)
        });
      });

    //   youtube video
    (function () {
        var zoomBtn  = $('.iframe-btn-js');
        zoomBtn.on('click', function (e) {
            e.preventDefault();
            $(this).addClass('hide-btn');
            var srcVid = $(this).data('src');
            var contVid = $(this).next('.y-container');
            var posterVid = $(this).next('.y-container').children('.video-poster');
            var parentContVid = $(this).closest('.page');
            // console.log(posterVid)


            function loadIframe(srcVid) {
                $('<iframe>', {
                    src: srcVid,
                    allowfullscreen:'allowfullscreen',
                    frameborder: '0',
                    allow:'autoplay',
                    scrolling: 'no'
                }).appendTo(contVid);
                return true;
            }
            loadIframe(srcVid);
            parentContVid.addClass('play-video');

            setTimeout(function(){
                posterVid.css('zIndex', '0');
              }, 800);

            // loadIframe(srcVid);
            // showModal();

            // запуск функції закриття
            // $(document).on('touchstart', function(e) {
            //     // confirm('click body')
            //     // console.log('click body')
            //     if ($(e.target).is(galleryModal) === false &&
            //         !galleryModal.is(e.target)
            //         && galleryModal.has(e.target).length === 0) {
            //         galleryModalMask.removeClass('animate');
            //         galleryModal.removeClass('animate');
            //         $('.wrapp_modal-gallery iframe').remove();
            //         $('body').removeClass('body_hidden');
            //     }
            // });

        });
    } ());

    //   video
    (function () {
        var zoomBtn = $('.video-btn-js');
        zoomBtn.on('click', function (e) {
            e.preventDefault();
            $(this).addClass('hide-btn');
            var srcVid = $(this).data('src');
            var contVid = $(this).next('.y-container');
            var posterVid = $(this).next('.y-container').children('.video-poster');
            var parentContVid = $(this).closest('.page');
            // console.log(posterVid)


            function loadIframe(srcVid) {
                $('<video>', {
                    src: srcVid,
                    id:  'myVideo',
                    controls: 'true',
                    autoplay: 'true'
                }).appendTo(contVid);
                return true;
            }
            loadIframe(srcVid);
            parentContVid.addClass('play-video');

            setTimeout(function(){
                posterVid.css('zIndex', '0');
            }, 800);


        });
    } ());
});
