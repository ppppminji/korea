var swiper = new Swiper(".related-slide", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }, 
    slidesPerView: 5,
    spaceBetween: 0,
    
    hashNavigation: true,
    autoplay:true,
});

var sw = 0;
$('.btn-play').click(function(){
    if(sw==0){
        $(this).attr({class:"btn-pause"});
        swiper.autoplay.stop();
        sw = 1;
    }else{
      $(this).attr({class:"btn-play"});
        swiper.autoplay.start();
        sw = 0;
    }
});

$('.section-body .slide').click(function(){
  $('.section-body .slide').removeClass('active')
  $(this).addClass('active')
})

var swiper = new Swiper(".newsBox", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination-fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  autoplay:true,
  loop:true,
});


$('#navWrap #nav').hover(function(){
  $('#navWrap').css({background:'#fff', borderBottom:'1px solid #ddd'})
  $('#navWrap').find('a').css('color','#000')
  $('#header').css({background:'#fff', borderBottom:'1px solid #ddd'})
  $('#header').find('a').css('color','#000')
/*   $('#header').find('img').attr('src',"") */
}, function(){
  $('#navWrap').css({background:'transparent', borderBottom:'1px solid transparent'})
  $('#navWrap').find('a').css('color','#fff')
  $('#header').css({background:'transparent', borderBottom:'1px solid transparent'})
  $('#header').find('a').css('color','#fff')
});