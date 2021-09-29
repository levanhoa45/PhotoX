window.onscroll = function() {scrollFunction()};
//scrollspy
$('body').scrollspy({target: ".navbar.navbar-expand-lg.fixed-top.nav-menu", offset: 100});
function scrollFunction() 
{
    //scrollmenu
    if(($('html').scrollTop())>=300)
    {
        $('.nav-menu').addClass('scroll-nav');
    }
    else if(($('html').scrollTop())<300)
    {
        $('.nav-menu').removeClass('scroll-nav');
    };
    //animatenv
    if(($('html').scrollTop())>=(($('.camera-img').offset()).top)-750)
    {
        $('.camera-img').addClass('nvphai');
        $('.nhiemvu-text').addClass('nvtrai');
    }
    else
    {
        $('.camera-img').removeClass('nvphai');
        $('.nhiemvu-text').removeClass('nvtrai');
    };
    //animategia
    if(($('html').scrollTop())>=(($('.gia').offset()).top)-750)
    {
        $('.gia-trai').addClass('giatrai');
        $('.gia-giua').addClass('giagiua');
        $('.gia-phai').addClass('giaphai');
    }
    else
    {
        $('.gia-trai').removeClass('giatrai');
        $('.gia-giua').removeClass('giagiua');
        $('.gia-phai').removeClass('giaphai');
    };
}
//scroll
$('.photox').click(function()
{
    $('html').animate({scrollTop:0},1000);
    return false;			
});
$('#home').click(function()
{
    $('html').animate({scrollTop:0},1000);
    return false;			
});
$('#nhiemvu').click(function()
{
    $('html').animate({scrollTop:($('.nhiemvu').offset().top)-60},1000);
    return false;			
});
$('#sanpham').click(function()
{
    $('html').animate({scrollTop:($('.sanpham').offset().top)-80},1000);
    return false;			
});
$('#bosuutap').click(function()
{
    $('html').animate({scrollTop:(($('.bosuutap').offset().top)-60)},1000);
    return false;			
});
$('#thuvien').click(function()
{
    $('html').animate({scrollTop:(($('.thuvien').offset().top)-60)},1000);
    return false;			
});
$('#khachhang').click(function()
{
    $('html').animate({scrollTop:(($('.khachhang').offset().top)-60)},1000);
    return false;			
});
$('#gia').click(function()
{
    $('html').animate({scrollTop:(($('.gia').offset().top)-60)},1000);
    return false;			
});
$('#lienhe').click(function()
{
    $('html').animate({scrollTop:(($('.lienhe').offset().top)-60)},1000);
    return false;			
});
//activethuvien
$('.thuvien-list-item').click(function()
{
    $(this).addClass('active-item').siblings().removeClass('active-item');
});
//phanloaithuvien
$('.thuvien-list-item').click(function()
{
    var i = $(this).attr('img-phanloai');
    if( i == 'all')
    {   
        $('.loai').show(1000);
    }
    else
    {
        $('.loai').not('.'+i).hide(500);
        $('.loai').filter('.'+i).show(500);
    }
});



    


