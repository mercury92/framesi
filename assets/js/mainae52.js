var isiPad = navigator.userAgent.match(/iPad/i) != null;
var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
var arrBoxOverlayToShow = new Array();

$(document).ready(function(){    
    if (!isMobile){
        $('.menu_top_clickarea').mouseenter(function(){
            $('.menu_top_clickarea_sf').fadeIn(100);
        })
        $('.menu_top_clickarea').mouseleave(function(){
            $('.menu_top_clickarea_sf').fadeOut(100);
        })
        //
        if ($('#homepage_top_banner').length){
            $('#homepage_top_banner').css('background-image','url("'+$('#homepage_top_banner').attr('urldesk')+'")');
        }
        if ($('#homepage_focus_framesi').length){
            $('#homepage_focus_framesi').css('background-image','url("'+$('#homepage_focus_framesi').attr('urldesk')+'")');
        }
        if ($('#footer1_cont_right').length){
            $('#footer1_cont_right').find('img').css('margin-right','auto').css('margin-top','auto');
        }
        if ($('#external_cont').hasClass('external_cont_downloadapp')){
            $('#external_cont').css('background-image','url("assets/images/banner_donloadapp.jpg")');
            $('#external_cont').css('background-position','top center');
            $('#external_cont').css('min-height',$(window).height()+'px');
            $('#btngoogleplay').attr('src','assets/images/btn_google_play.png');
            $('#btnapplestore').attr('src','assets/images/btn_apple_store.png');
        }
    }else{
        setTimeout('LoadAutoHighlightOverview()',500);
        setTimeout('LoadAutoHighlightOverview()',6000);
        //
        if ($('#homepage_top_banner').length){
            $('#homepage_top_banner').css('background-image','url("'+$('#homepage_top_banner').attr('urlmobile')+'")');
        }
        if ($('#homepage_focus_framesi').length){
            $('#homepage_focus_framesi').css('background-image','url("'+$('#homepage_focus_framesi').attr('urlmobile')+'")');
        }
        if ($('#footer1_cont_right').length){
            $('#footer1_cont_right').find('img').css('margin-right','100px').css('margin-top','10px');
        }
        if ($('#external_cont').hasClass('external_cont_downloadapp')){
            $('#external_cont').css('background-image','url("assets/images/banner_donloadapp_mobile.jpg")');
            $('#external_cont').css('background-position','top left');
            $('#external_cont').css('min-height',$(window).height()+'px');
            $('#btngoogleplay').attr('src','assets/images/btn_google_play_mobile.png');
            $('#btnapplestore').attr('src','assets/images/btn_apple_store_mobile.png');
        }
    }
    
    if ($(window).width() <= 980 && !isiPad){
        $("#mobile-stylesheet").attr("href", "assets/css/mobile.css");
    }else{
        $("#mobile-stylesheet").attr("href", "assets/css/empty.css");
    }

    ShowHideLogoFixed();
    ShowHideTrainingArea();
    ShowHideTopButton();
    $(window).scroll(function(){
        ShowHideLogoFixed();
        ShowHideTitlePage();
        ShowHideTrainingArea();
        ShowHideTopButton();
        if (isMobile){
            $('.box_overlay1').animate({width: '100%',height: '100%',bottom: 0,right: 0,opacity: 0.7}, 0);
            $('.box_overlay1').fadeOut(0);
            $('.box_overlay1').css('-webkit-transform','none');
            $('.box_overlay1').css('-moz-transform','none');
            $('.box_overlay1').css('-o-transform','none');
            $('.box_overlay1').css('-ms-transform','none');
            $('.box_overlay1').css('transform','none');
            AutoHighlightOverview(arrBoxOverlayToShow);
        }
    });
    
    if ($(window).width() < 1200){
        $('.menu_top_logo').animate({width: 150,left: 30});
        $('.menu_top_logo_fixed').animate({width: 150,left: 30});
        $('.menu_top_logo_fixed').attr('src','assets/images/logo_framesi.png');
        $('.menu_top_logo_fixed').css('top','initial');
        $('.menu_top_logo_fixed').css('bottom','-75px');
        $('.menu_top_element').css('font-size','14px');
    }else{
        $('.menu_top_logo').animate({width: 210,left: 50});
        $('.menu_top_logo_fixed').animate({width: 210,left: 50}, function(){

            $('.menu_top_logo_fixed').css('top','0');
            $('.menu_top_logo_fixed').css('bottom','initial');
            $('.menu_top_element').css('font-size','17px');
        });
    }

    $('.menu_top_clickarea_sf, .menu_top_btnmenu, .menu_top_titlemenu').on("mouseover", function(){
        /*if ($(window).width() < 1200){
            $('.menu_top_logo').animate({width: 126});
            $('.menu_top_logo_fixed').attr('src','assets/images/logo_framesi.png');
            $('.menu_top_logo_fixed').animate({width: 126});
            $('.menu_top_logo_fixed').css('top','initial');
            $('.menu_top_logo_fixed').css('bottom','-75px');
            $('.menu_top_element').css('font-size','14px');
        }else{
            $('.menu_top_logo_fixed').attr('src','assets/images/logo_framesi_small.png');
            $('.menu_top_logo_fixed').css('top','0');
            $('.menu_top_logo_fixed').css('bottom','initial');
            $('.menu_top_element').css('font-size','17px');
        } */
        $('.menu_top_elements_cont').fadeIn(100);
        $('.menu_top_elements_cont').addClass('menuopen');
      
        $('.menu_top_contmenu_top_btnmenuclose').fadeIn(100);
        if ($('.menu_top_open_submenu_cont_ext').hasClass('toshow')){
            $('.menu_top_open_submenu_cont_ext').animate({top: '0'},100,function(){
                $('.menu_top_open_submenu_cont_ext').addClass('opened');
                $('.menu_top_btnmenuclose').css(  "display", "block");
                $('.menu_top_open_products_cont_ext').animate({top: '0'},100);
                /*$('.menu_top_open_product_block').height($('.menu_top_open_products_cont_int.toshow .menu_top_open_product_block').width());
                $('.menu_top_open_product_mid_block').height($('#menu_top_open_products_cont_int.toshow .menu_top_open_product_mid_block').width());
                if ($(window).width() < 1200){
                    $('.menu_top_open_product_text').css('padding-top','50%');
                    $('.menu_top_open_product_text_title').css('font-size','12px');
                    $('.menu_top_open_product_block').css('font-size','9px');
                    $('.menu_top_open_product_image').css('height','75%');
                }else if ($(window).width() < 1320){
                    $('.menu_top_open_product_text').css('padding-top','55%');
                    $('.menu_top_open_product_text_title').css('font-size','13px');
                    $('.menu_top_open_product_block').css('font-size','10px');
                    $('.menu_top_open_product_image').css('height','82%');
                }else {
                    $('.menu_top_open_product_text').css('padding-top','62%');
                    $('.menu_top_open_product_text_title').css('font-size','16px');
                    $('.menu_top_open_product_block').css('font-size','11px');
                    $('.menu_top_open_product_image').css('height','90%');
                }*/
                //Cufon.replace('.menu_top_open_submenu_element.gotham,.menu_top_open_product_text .gotham', { fontFamily: 'Gotham' });
            });
        }
        //Cufon.replace('.menu_top_element.gothamlight', { fontFamily: 'GothamLight' });
    })

    $('.menu_top_btnmenuclose').click(function(){
        /*if ($(window).width() < 1200){
            $('.menu_top_logo').animate({width: 210});
            $('.menu_top_logo_fixed').animate({width: 210}, function(){
                $('.menu_top_logo_fixed').attr('src','assets/images/logo_framesi_small.png');
                $('.menu_top_logo_fixed').css('top','0');
                $('.menu_top_logo_fixed').css('bottom','initial');
            });
        }*/
      
        
        $('.menu_top_contmenu_top_btnmenuclose').fadeOut(100);

//        $('.menu_top_element').removeClass('selected');
        $('.menu_top_open_submenu_elements').css("display", 'none');
        $('.menu_top_open_products_cont_ext').animate({top: '-150%'},300);
        $('.menu_top_open_submenu_cont_ext').animate({top: '-150%'},200,function(){
            $('.menu_top_open_submenu_cont_ext').removeClass('opened');
            $('.menu_top_btnmenuclose').css("display", 'none');


            
//            $('.menu_top_open_submenu_elements').fadeOut(0);
        });
    })

    $('.menu_top_element').click(function(){
        menuTop = $(this);

        $('.menu_top_element').removeClass('selected');
        menuTop.addClass('selected');
        $('.menu_top_open_products_cont_int').fadeOut(0);

        if ($('#menu_top_open_submenu_elements_'+menuTop.attr('submenu')).length){
            if (!$('.menu_top_open_submenu_cont_ext').hasClass('opened')){
                $('.menu_top_open_submenu_cont_ext').fadeIn(0);
                $('.menu_top_open_submenu_cont_ext').animate({top: '0'},300,function(){
                    $('.menu_top_open_submenu_cont_ext').addClass('opened');
                    $('.menu_top_btnmenuclose').css(  "display", "block");
                    $('.menu_top_open_products_cont_ext').animate({top: '0'},200);
                    $('#menu_top_open_submenu_elements_'+menuTop.attr('submenu')).fadeIn(0);
                    firstSub = $('#menu_top_open_submenu_elements_'+menuTop.attr('submenu')+' .menu_top_open_submenu_elements_int .menu_top_open_submenu_element').first();
                    if (firstSub.hasClass('menu_top_open_submenu_element_proucts')){
                        firstSub.addClass('selected');
                        $('.menu_top_open_products_cont_int').fadeOut(0);
                        $('.menu_top_open_products_cont_int').removeClass('opened');
                        $('.menu_top_btnmenuclose').css("display", 'none');

                        $('.menu_top_btnmenuclose').css(  "display", "block");
                        $('#menu_top_open_products_cont_int_'+firstSub.attr('mp')).fadeIn(100);
                        $('#menu_top_open_products_cont_int_'+firstSub.attr('mp')).addClass('opened');
                        //$('.menu_top_open_products_cont_int').height($(window).height()-170);
                        /*$('.menu_top_open_product_block').height($('#menu_top_open_products_cont_int_'+firstSub.attr('mp')+' .menu_top_open_product_block').width());
                        $('.menu_top_open_product_mid_block').height($('#menu_top_open_products_cont_int_'+firstSub.attr('mp')+' .menu_top_open_product_mid_block').width());
                        if ($(window).width() < 1200){
                            $('.menu_top_open_product_text').css('padding-top','50%');
                            $('.menu_top_open_product_text_title').css('font-size','12px');
                            $('.menu_top_open_product_block').css('font-size','9px');
                            $('.menu_top_open_product_image').css('height','75%');
                        }else if ($(window).width() < 1320){
                            $('.menu_top_open_product_text').css('padding-top','55%');
                            $('.menu_top_open_product_text_title').css('font-size','13px');
                            $('.menu_top_open_product_block').css('font-size','10px');
                            $('.menu_top_open_product_image').css('height','82%');
                        }else {
                            $('.menu_top_open_product_text').css('padding-top','62%');
                            $('.menu_top_open_product_text_title').css('font-size','16px');
                            $('.menu_top_open_product_block').css('font-size','11px');
                            $('.menu_top_open_product_image').css('height','90%');
                        }*/
                    }
                    //Cufon.replace('.menu_top_open_submenu_element.gotham,.menu_top_open_product_text .gotham', { fontFamily: 'Gotham' });
                });
            }else{
                $('.menu_top_open_submenu_elements').fadeOut(0);
                $('#menu_top_open_submenu_elements_'+menuTop.attr('submenu')).fadeIn(0);
            }
        }else{
            $('.menu_top_open_submenu_cont_ext').fadeOut(0);
            $('.menu_top_open_submenu_cont_ext').removeClass('opened');
            $('.menu_top_btnmenuclose').css("display", 'none');


            $('.menu_top_open_submenu_elements').fadeOut(0);
            $('.menu_top_open_products_cont_int').fadeOut(0);
            $('.menu_top_open_submenu_element').removeClass('selected');
        }
    })

    $('.menu_top_open_submenu_element').click(function(){
        $('.menu_top_open_submenu_element').removeClass('selected');
        $(this).addClass('selected');
        
        $('.menu_top_open_products_cont_int').fadeOut(0);
        $('#menu_top_open_products_cont_int_'+$(this).attr('mp')).fadeIn(100);
        //$('.menu_top_open_products_cont_int').height($(window).height()-170);
        //$('.menu_top_open_product_block').height($('#menu_top_open_products_cont_int_'+$(this).attr('mp')+' .menu_top_open_product_block').width());
        //$('.menu_top_open_product_mid_block').height($('#menu_top_open_products_cont_int_'+$(this).attr('mp')+' .menu_top_open_product_mid_block').width());
        //Cufon.replace('.menu_top_open_submenu_element.gotham', { fontFamily: 'Gotham' });
    })

    if (!isMobile){
        $('.full_page_banner').height($(window).height());
        $('.full_page_banner_70').height($(window).height()*0.70);
        $('.full_page_banner_85').height($(window).height()*0.85);
        $('.full_page_banner_80').height($(window).height()*0.80);
    }else{
        $('.full_page_banner').height($(window).height()*0.70);
        $('.full_page_banner_70').height($(window).height()*0.50);
        $('.full_page_banner_85').height($(window).height()*0.60);
        $('.full_page_banner_80').height($(window).height()*0.55);
    }

    /*$('#homepage_top_banner_button').click(function(){
        $('html,body').animate({scrollTop: ($(window).height()-100)},200);
    })*/

    $('.proportional_element').each(function(){
        //$(this).height($(this).width());
    });
  
    if (!isMobile){
        $('.overlaid_box').mouseenter(function(){
            var overlaidbox = $(this);
            if (!overlaidbox.hasClass('stopanimopen')){
                overlaidbox.addClass('stopanimopen');
                if ($(this).children('.box_overlay1').length){
                    var ovH = $(this).height();
                    var ovW = $(this).width();
                    $(this).children('.box_overlay1').animate({bottom: -300,right: -300}, 300, function(){
                        overlaidbox.removeClass('stopanimopen');
                    });
                    $(this).children('.box_overlay').delay(100).fadeIn(200);
                }else{
                    $(this).children('.box_overlay').fadeIn(200, function(){
                        overlaidbox.removeClass('stopanimopen');
                    });
                    $(this).children('.box_overlay1').fadeIn(200);
                }
            }
        })

        $('.overlaid_box').mouseleave(function(){
            var overlaidbox = $(this);
            if (!overlaidbox.hasClass('stopanimclose')){
                overlaidbox.addClass('stopanimclose');
                if ($(this).children('.box_overlay1').length){
                    $(this).children('.box_overlay').fadeOut(100,function(){
                        $(this).parent().children('.box_overlay1').animate({bottom: -1015,right: -1015}, 500);
                        overlaidbox.removeClass('stopanimclose');
                    });
                }else{
                    $(this).children('.box_overlay').fadeOut(200,function(){
                        overlaidbox.removeClass('stopanimclose');
                    });
                    $(this).children('.box_overlay1').fadeOut(200);
                }
            }
        })

        $('.overlaid_box_tcck').mouseenter(function(){
            var overlaidbox = $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.overlaid_box');
            if (!overlaidbox.hasClass('stopanimopen')){
                overlaidbox.addClass('stopanimopen');
                var ovH = overlaidbox.height();
                var ovW = overlaidbox.width();
                $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.box_overlay1').animate({bottom: -300,right: -300}, 300, function(){
                    overlaidbox.removeClass('stopanimopen');
                });
                $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.box_overlay').delay(100).fadeIn(200);
            }
        })

        $('.overlaid_box_tcck').mouseleave(function(){
            var overlaidbox = $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.overlaid_box');
            var overlaybox = overlaidbox.find('.box_overlay');
            var overlay1box = overlaidbox.find('.box_overlay1');
            if (!overlaidbox.hasClass('stopanimclose')){
                overlaidbox.addClass('stopanimclose');
                overlaybox.fadeOut(100,function(){
                    overlay1box.animate({bottom: -1015,right: -1015}, 500);
                    overlaidbox.removeClass('stopanimclose');
                });
            }
        })
    }

    $('#products_line_banner').height($('#products_line_banner #products_line_banner_cont_right').width());

    if ($('#products_line_productslist_slider').width() < $('#products_line_productslist_cont').width()){
        $('#products_line_productslist_slider').css('margin-left',(($('#products_line_productslist_cont').width()-$('#products_line_productslist_slider').width())/2)+'px');
        $('#products_line_productslist_slider_prev').fadeOut(0);
        $('#products_line_productslist_slider_next').fadeOut(0);
    }else{
        $('#products_line_productslist_slider').css('margin-left','auto');
        $('#products_line_productslist_slider_prev').fadeIn(0);
        $('#products_line_productslist_slider_next').fadeIn(0);
    }

    $('#products_line_productslist_slider_prev').click(function(){
        sliderML = parseInt($('#products_line_productslist_slider').css('margin-left'));
        if (-(sliderML)-150 < 0) $('#products_line_productslist_slider').animate({marginLeft: 0},300);
        else $('#products_line_productslist_slider').animate({marginLeft: '+=150'},300);
    })

    $('#products_line_productslist_slider_next').click(function(){
        sliderML = parseInt($('#products_line_productslist_slider').css('margin-left'));
        sliderW = $('#products_line_productslist_slider').width();
        contW = $('#products_line_productslist_cont').width();
        if (contW-sliderML+150 > sliderW) $('#products_line_productslist_slider').animate({marginLeft: contW-sliderW},300);
        else $('#products_line_productslist_slider').animate({marginLeft: '-=150'},300);
    })

    $('.products_line_productslist_product').click(function(){
        $('.products_line_productslist_product').removeClass('selected');
        $(this).addClass('selected');
        ScrollToAnchor('product_detail_cont');
    })

    $('.overview_cont').each(function(){
        maxW = ($(this).parent().outerWidth()*0.98)/2;
        $(this).css('max-width',maxW+'px');
        $(this).children('.overview_img_box').children('.overview_img').css('max-width',maxW+'px');
    });

    $('.partnership_ext_closebtn').click(function(){
        var btn = $(this);
        if (btn.hasClass('lightbox_image_close_video')){
            var urlVideo = btn.parent().children('.lightbox_image').children('iframe').attr('src');
            btn.parent().children('.lightbox_image').children('iframe').attr('src','');
            btn.parent().fadeOut(200, function(){
                btn.parent().children('.lightbox_image').children('iframe').attr('src',urlVideo);
            });
        }else btn.parent().fadeOut(200);
    });

    $('.lightbox_image_close').click(function(){
        var btn = $(this);
        if (btn.hasClass('lightbox_image_close_video')){
            var urlVideo = btn.parent().children('.lightbox_image').children('iframe').attr('src');
            btn.parent().children('.lightbox_image').children('iframe').attr('src','');
            btn.parent().fadeOut(200, function(){
                btn.parent().children('.lightbox_image').children('iframe').attr('src',urlVideo);
            });
        }else btn.parent().fadeOut(200);
    });

    $('.lightbox_image_close_div').click(function(){
        var btn = $(this);
        if (btn.hasClass('lightbox_image_close_div_video')){
            var urlVideo = btn.parent().children('.lightbox_image').children('iframe').attr('src');
            btn.parent().children('.lightbox_image').children('iframe').attr('src','');
            btn.parent().fadeOut(200, function(){
                btn.parent().children('.lightbox_image').children('iframe').attr('src',urlVideo);
            });
        }else btn.parent().fadeOut(200);
    });

    $('.training_detail_show').click(function(){
        $(this).fadeOut(0);
        $(this).parent().children('.training_detail_hide').fadeIn(0);
        $(this).parent().parent().children('.training_detail_toshow').fadeIn(200);
    })

    $('.training_detail_hide').click(function(){
        $(this).fadeOut(0);
        $(this).parent().children('.training_detail_show').fadeIn(0);
        $(this).parent().parent().children('.training_detail_toshow').fadeOut(200);
    })

    $('.training_detail_area_fixed').click(function(){
        $('#training_detail_menu_fixed').fadeIn(100);
        $('.training_detail_menu_fixed_elem').removeClass('selected');
        $('#training_detail_menu_fixed_elem_'+$(this).attr('areaid')).addClass('selected');
        //Cufon.replace('.training_detail_menu_fixed_elem', { fontFamily: 'GothamBlack' });
    })

    $('.training_detail_menu_fixed_elem').click(function(){
        $('#training_detail_menu_fixed').fadeOut(100);
        //var top = document.getElementById('training_detail_area_title_'+$(this).attr('areaid')).offsetTop;
        //$('html,body').animate({scrollTop:(top+$(window).height())}, '500');
	var top = $('#training_detail_area_title_'+$(this).attr('areaid')).offset().top;
        $('html,body').animate({scrollTop:(top)}, '500');
    })

    ResizeArtisticTeamBlocks();
    ResizeKeyClientBlocks();
    ResizeHistorySpacer();
    ResizePartneshipsLogos();
    
    $(window).resize(function(){


        if (!isMobile){
            $('.full_page_banner').height($(window).height());
            $('.full_page_banner_70').height($(window).height()*0.70);
            $('.full_page_banner_85').height($(window).height()*0.85);
            $('.full_page_banner_80').height($(window).height()*0.80);
        }else{
            $('.full_page_banner').height($(window).height()*0.70);
            $('.full_page_banner_70').height($(window).height()*0.50);
            $('.full_page_banner_85').height($(window).height()*0.60);
            $('.full_page_banner_80').height($(window).height()*0.55);
        }

        $('.proportional_element').each(function(){
            $(this).height($(this).width());
        });

        $('#products_line_banner').height($('#products_line_banner #products_line_banner_cont_right').width());

        $('.overview_cont').each(function(){
            maxW = ($(this).parent().outerWidth()*0.98)/2;
            $(this).css('max-width',maxW+'px');
            $(this).children('.overview_img_box').children('.overview_img').css('max-width',maxW+'px');
        });

//        if ($(window).width() < 1200 && $('.menu_top_elements_cont').hasClass('menuopen')){
        if ($(window).width() < 1200){
            $('.menu_top_logo').animate({width: 150,left: 30});
            $('.menu_top_logo_fixed').animate({width: 150,left: 30});
            $('.menu_top_logo_fixed').attr('src','assets/images/logo_framesi.png');
            $('.menu_top_logo_fixed').css('top','initial');
            $('.menu_top_logo_fixed').css('bottom','-75px');
            $('.menu_top_element').css('font-size','14px');
        }else{
            $('.menu_top_logo').animate({width: 210,left: 50});
            $('.menu_top_logo_fixed').animate({width: 210,left: 50}, function(){
                $('.menu_top_logo_fixed').attr('src','assets/images/logo_framesi_small.png');
                $('.menu_top_logo_fixed').css('top','0');
                $('.menu_top_logo_fixed').css('bottom','initial');
            $('.menu_top_element').css('font-size','17px');
            });
        }
        //Cufon.replace('.menu_top_element.gothamlight', { fontFamily: 'GothamLight' });
             
        var menuProdOpen = $('.menu_top_open_products_cont_int.opened');
        if (menuProdOpen.length){
            //$('.menu_top_open_products_cont_int').height($(window).height()-170);
            //$('.menu_top_open_product_block').height(menuProdOpen.find('.menu_top_open_product_block').width());
            //$('.menu_top_open_product_mid_block').height(menuProdOpen.find('.menu_top_open_product_mid_block').width());
        }
        /*if ($(window).width() < 1200){
            $('.menu_top_open_product_text').css('padding-top','50%');
            $('.menu_top_open_product_text_title').css('font-size','12px');
            $('.menu_top_open_product_block').css('font-size','9px');
            $('.menu_top_open_product_image').css('height','75%');
        }else if ($(window).width() < 1320){
            $('.menu_top_open_product_text').css('padding-top','55%');
            $('.menu_top_open_product_text_title').css('font-size','13px');
            $('.menu_top_open_product_block').css('font-size','10px');
            $('.menu_top_open_product_image').css('height','82%');
        }else {
            $('.menu_top_open_product_text').css('padding-top','62%');
            $('.menu_top_open_product_text_title').css('font-size','16px');
            $('.menu_top_open_product_block').css('font-size','11px');
            $('.menu_top_open_product_image').css('height','90%');
        }*/
        //Cufon.replace('.menu_top_open_submenu_element.gotham,.menu_top_open_product_text .gotham', { fontFamily: 'Gotham' });
        
        if (!isMobile){
            /*if ($('#homepage_top_banner').length){
                if ($('#homepage_top_banner').attr('lang')){
                    $('#homepage_top_banner').css('background-image','url("uploads/banner_01_'+$('#homepage_top_banner').attr('lang')+'.jpg")');
                }else{
                    $('#homepage_top_banner').css('background-image','url("uploads/banner_01.jpg")');
                }
                $('#homepage_top_banner').css('background-position','76% 0%');
            }*/
            if ($('#footer1_cont_right').length){
                $('#footer1_cont_right').find('img').css('margin-right','auto').css('margin-top','auto');
            }
            if ($('#external_cont').hasClass('external_cont_downloadapp')){
                $('#external_cont').css('background-image','url("assets/images/banner_donloadapp.jpg")');
                $('#external_cont').css('background-position','top center');
                $('#external_cont').css('min-height',$(window).height()+'px');
                $('#btngoogleplay').attr('src','assets/images/btn_google_play.png');
                $('#btnapplestore').attr('src','assets/images/btn_apple_store.png');
            }
        }else{
            /*if ($('#homepage_top_banner').length){
                if ($('#homepage_top_banner').attr('lang')){
                    $('#homepage_top_banner').css('background-image','url("uploads/banner_01_mobile_'+$('#homepage_top_banner').attr('lang')+'.jpg")');
                }else{
                    $('#homepage_top_banner').css('background-image','url("uploads/banner_01_mobile.jpg")');
                }
                $('#homepage_top_banner').css('background-position','right top');
            }*/
            if ($('#footer1_cont_right').length){
                $('#footer1_cont_right').find('img').css('margin-right','100px').css('margin-top','10px');
            }
            if ($('#external_cont').hasClass('external_cont_downloadapp')){
                $('#external_cont').css('background-image','url("assets/images/banner_donloadapp_mobile.jpg")');
                $('#external_cont').css('background-position','top left');
                $('#external_cont').css('min-height',$(window).height()+'px');
                $('#btngoogleplay').attr('src','assets/images/btn_google_play_mobile.png');
                $('#btnapplestore').attr('src','assets/images/btn_apple_store_mobile.png');
            }
        }
        
        ResizeArtisticTeamBlocks();
        ResizeKeyClientBlocks();
        ResizeHistorySpacer();
        ResizePartneshipsLogos();
        LoadAutoHighlightOverview();
    })
    
        
    //if (isMobile){
//        setTimeout("Cufon.replace('.gotham', { fontFamily: 'Gotham' })",800);
//        setTimeout("Cufon.replace('.gothamblack', { fontFamily: 'GothamBlack' })",800);
//        setTimeout("Cufon.replace('.gothamlight', { fontFamily: 'GothamLight' })",800);
//        setTimeout("Cufon.replace('.gothamlight strong, .gothamlight b', { fontFamily: 'GothamLightBold' })",800);
        
        $('.menu_topmobile_open').click(function(){
            $(this).fadeOut(0);
            $('.menu_topmobile_close').fadeIn(0);
            $('.menu_topmobile_cont').animate({height: '100%'},300);
            $('html,body').animate({scrollTop: 0},300);
        })
        $('.menu_topmobile_close').click(function(){
            $(this).fadeOut(0);
            $('.menu_topmobile_open').fadeIn(0);
            $('.menu_topmobile_cont').animate({height: 0},300);
        })
        $('.menu_topmobile_element').click(function(){
            if ($(this).attr('submenu') != undefined){
                if (!$(this).hasClass('selected')){
                    $(this).addClass('selected');
                    $(this).addClass('selectedg');
                    $('.menu_topmobile_element').addClass('unselected');
                    $(this).removeClass('unselected');
                    var submenu = $('#menu_topmobile_submenu_element_'+$(this).attr('submenu'));
                    submenu.animate({height: submenu.children('.menu_topmobile_submenu_elements_cont').outerHeight()},300,function(){
                        $(this).css('height','auto');
                    });
                }else{
                    $(this).removeClass('selected');
                    $(this).removeClass('selectedg');
                    $('.menu_topmobile_element').removeClass('unselected');
                    var submenu = $('#menu_topmobile_submenu_element_'+$(this).attr('submenu'));
                    submenu.animate({height: 0},300, function(){
                        $('.menu_topmobile_submenu_element').removeClass('unselected');
                        $('.menu_topmobile_submenu2_elements').animate({height: 0},0);
                    });
                }
//            Cufon.replace('.gotham', { fontFamily: 'Gotham' });
            }
        })
        $('.menu_topmobile_submenu_element').click(function(){
            if ($(this).attr('mp') != undefined){
                if (!$(this).hasClass('selected')){
                    $(this).addClass('selected');
                    $(this).addClass('selectedg');
                    $('.menu_topmobile_submenu_element').addClass('unselected');
                    $(this).removeClass('unselected');
                    var submenu = $('#menu_topmobile_submenu2_elements_'+$(this).attr('submenu')+'_'+$(this).attr('mp'));
                    submenu.animate({height: submenu.children('.menu_topmobile_submenu2_elements_cont').outerHeight()},300,function(){
                        $(this).css('height','auto');
                    });
                }else{
                    $(this).removeClass('selected');
                    $(this).removeClass('selectedg');
                    $('.menu_topmobile_submenu_element').removeClass('unselected');
                    var submenu = $('#menu_topmobile_submenu2_elements_'+$(this).attr('submenu')+'_'+$(this).attr('mp'));
                    submenu.animate({height: 0},300);
                }
//            Cufon.replace('.gotham', { fontFamily: 'Gotham' });
            }
        })
    //}
    
    $('.collection_link').click(function(){
        var kpopup = $(this).attr('kpopup');
        $('#collection_popup_'+kpopup).fadeIn(100);
    })
    
    $('.collections_ext_left').click(function(){
        var kpopup = $(this).attr('kpopup');
        $('#collection_popup_'+kpopup).fadeIn(100);
    })
    
    $('.collections_ext_right').click(function(){
        var kpopup = $(this).attr('kpopup');
        $('#collection_popup_'+kpopup).fadeIn(100);
    })
    
    $('.collection_popup_close').click(function(){
        $(this).parent().children('.collection_popup_img').html('');
        $(this).parent().parent().fadeOut(100);
    })
    
    $('.collection_popup_gallery_videoelem').click(function(){
        $(this).parent().parent().parent().parent().children('.collection_popup_img').css('background-image','none');
        $(this).parent().parent().parent().parent().children('.collection_popup_img').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).attr('srcto')+'?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        $(this).parent().parent().parent().parent().children('.collection_popup_img').find('.collection_popup_imgctrl').fadeOut(0);
    })
    
    $('.collection_popup_gallery_imgelem').click(function(){
        $(this).parent().parent().parent().parent().children('.collection_popup_img').css('background-image','url("'+$(this).attr('srcto')+'")');
        $(this).parent().parent().parent().parent().children('.collection_popup_img').find('.collection_popup_imgctrl').fadeIn(0);
        if ($(this).attr('srctocat')){
            $(this).parent().parent().parent().parent().children('.collection_popup_img').find('.collection_popup_imgctrl_logo').attr('src',$(this).attr('srctocat'));
        }
        var kprev = parseInt($(this).attr('key')) - 1;
        if (kprev < 0) kprev = $(this).attr('keymax');
        $(this).parent().parent().parent().parent().children('.collection_popup_img').find('.collection_popup_imgctrl_prev').attr('kto',kprev);
        var knext = parseInt($(this).attr('key')) + 1;
        if (knext > $(this).attr('keymax')) knext = 0;
        $(this).parent().parent().parent().parent().children('.collection_popup_img').find('.collection_popup_imgctrl_next').attr('kto',knext);
    })
    
    $('.collection_popup_imgctrl_prev, .collection_popup_imgctrl_next').click(function(){
        var elem = $(this).parent().parent().parent().find('.collection_popup_gallery_imgelem[key="'+$(this).attr('kto')+'"]');
        $(this).parent().parent().css('background-image','url("'+elem.attr('srcto')+'")');
        $(this).parent().find('.collection_popup_imgctrl_logo').attr('src',elem.attr('srctocat'));
        var kprev = parseInt(elem.attr('key')) - 1;
        if (kprev < 0) kprev = elem.attr('keymax');
        $(this).parent().find('.collection_popup_imgctrl_prev').attr('kto',kprev);
        var knext = parseInt(elem.attr('key')) + 1;
        if (knext > elem.attr('keymax')) knext = 0;
        $(this).parent().find('.collection_popup_imgctrl_next').attr('kto',knext);
    })
    
    $('.collection_popup_description_open').click(function(){
        var btnOpen = $(this);
        var btnClose = $(this).parent().children('.collection_popup_description_close');
        var pCont = $(this).parent();
        var descCont = $(this).parent().children('.collection_popup_description_cont');
        var desc = $(this).parent().children('.collection_popup_description_cont').children('.collection_popup_description');
        var gallCont = $(this).parent().parent().children('.collection_popup_gallery');
        
        pCont.animate({height: '+='+(desc.height()-65)}, 100);
        gallCont.animate({height: '-='+(desc.height()-65)}, 100);
        descCont.animate({height: desc.height()}, 100, function(){
            btnOpen.fadeOut(0);
            btnClose.fadeIn(0);
        })
    })
    
    $('.collection_popup_description_close').click(function(){
        var btnOpen = $(this).parent().children('.collection_popup_description_open');
        var btnClose = $(this);
        var pCont = $(this).parent();
        var descCont = $(this).parent().children('.collection_popup_description_cont');
        var desc = $(this).parent().children('.collection_popup_description_cont').children('.collection_popup_description');
        var gallCont = $(this).parent().parent().children('.collection_popup_gallery');
        
        pCont.animate({height: '40%'}, 100, function(){
            pCont.css('height','calc(40% - 75px)');
        });
        gallCont.animate({height: '60%'}, 100);
        descCont.animate({height: 65}, 100, function(){
            btnClose.fadeOut(0);
            btnOpen.fadeIn(0);
        })
    })
})

function ResizeArtisticTeamBlocks(){
    if ($('#artistic_team_detail').length){
        hToSet = parseInt($(window).width()/3.2);
        $('.artistic_team_cont1').height(hToSet);
        $('.artistic_team_cont2').height(hToSet);
        if ($(window).width() < 1200){
            $('.artistic_team_cont1_text').css('font-size','15px')
            $('.artistic_team_cont2_text12').css('font-size','15px')
            $('.artistic_team_cont2_text22').css('font-size','15px')
            $('.artistic_team_cont1_text').css('height','270px')
        }else if ($(window).width() < 1320){
            $('.artistic_team_cont1_text').css('font-size','16px')
            $('.artistic_team_cont2_text12').css('font-size','16px')
            $('.artistic_team_cont2_text22').css('font-size','16px')
            $('.artistic_team_cont1_text').css('height','395px')
        }else {
            $('.artistic_team_cont1_text').css('font-size','17px')
            $('.artistic_team_cont2_text12').css('font-size','17px')
            $('.artistic_team_cont2_text22').css('font-size','17px')
            $('.artistic_team_cont1_text').css('height','320px')
        }
        //Cufon.replace('.artistic_team_cont1_text .gotamblack', { fontFamily: 'GothamBlack' });
        //Cufon.replace('.artistic_team_cont1_text .gotamlight', { fontFamily: 'GothamLight' });
    }
}

function ResizeKeyClientBlocks(){
    if ($('#key_client_detail').length){
        hToSet = parseInt($(window).width()/3.2);
	$('.keyclient_cont').height(hToSet);
        if ($(window).width() < 1200){
            $('.keyclient_cont_text').css('right','10%');
            $('.keyclient_cont_button1').css('margin-right','150px');
            $('.keyclient_cont_button2').css('margin-right','150px');
            $('.keyclient_cont_button').css('right','10%');
	    $('.keyclient_cont_button3').css('right','8%');
        }else if ($(window).width() < 1320){
            $('.keyclient_cont_text').css('right','11%');
            $('.keyclient_cont_button1').css('margin-right','145px');
            $('.keyclient_cont_button2').css('margin-right','145px');
            $('.keyclient_cont_button').css('right','11%');
	    $('.keyclient_cont_button3').css('right','8%');
        }else if ($(window).width() < 1450){
            $('.keyclient_cont_text').css('right','12%');
            $('.keyclient_cont_button1').css('margin-right','145px');
            $('.keyclient_cont_button2').css('margin-right','145px');
            $('.keyclient_cont_button').css('right','12%');
	    $('.keyclient_cont_button3').css('right','8%');
        }else {
            $('.keyclient_cont_text').css('right','13%');
            $('.keyclient_cont_button1').css('margin-right','150px');
            $('.keyclient_cont_button2').css('margin-right','150px');
            $('.keyclient_cont_button').css('right','13%');
	    $('.keyclient_cont_button3').css('right','11%');
        }
        //Cufon.replace('.keyclient_cont_text .gotamblack', { fontFamily: 'GothamBlack' });
        //Cufon.replace('.keyclient_cont_text .gotamlight', { fontFamily: 'GothamLight' });
    }
}

function ResizeHistorySpacer(){
    $('.history_spacer_box').each(function(){
        if ($(this).attr('orheight') == undefined) $(this).attr('orheight',$(this).height());
        if ($(window).width() < 1200){
            $(this).height($(this).attr('orheight')*0.95);
        }else{
            $(this).height($(this).attr('orheight'));
        }
    })
}

function ResizePartneshipsLogos(){
    $('.affiliations_logo2_cont').each(function(){
        $(this).width($(this).parent().outerWidth()-$(this).parent().children('.affiliations_cont_text').outerWidth());
        $(this).fadeIn(200);
    })
}

function ShowHideLogoFixed(){
//    if ($(window).width() < 1200 && $('.menu_top_elements_cont').hasClass('menuopen')){
    if ($(window).width() < 1200){
        if ($(window).scrollTop() >= 75){
            $('.menu_top_logo_fixed').fadeIn(0);
        }else{
            $('.menu_top_logo_fixed').fadeOut(0);
        }
    }else{
        if ($(window).scrollTop() >= 165){
            $('.menu_top_logo_fixed').fadeIn(0);
        }else{
            $('.menu_top_logo_fixed').fadeOut(0);
        }
    }
}

function ShowHideTitlePage(){
    if ($(window).scrollTop() > $(window).height()){
        $('.menu_top_titlemenu').fadeOut(200);
    }
}

function ShowHideTrainingArea(){
    if ($('#training_detail').length){
        var scrollTop = $(document).scrollTop();
        var lastArea = -1;

        $('.training_detail_area_title').each(function(){
            //pos = $(this).position().top + $(window).height();
	    var pos = $(this).offset().top - $(window).scrollTop();
	    //if (pos <= scrollTop) lastArea = $(this).attr('kid');
	    if (pos-70 < 0){
		lastArea = $(this).attr('kid');
	    }
        })

        $('.training_detail_area_fixed').fadeOut(0);
        if (lastArea != -1){
            $('#training_detail_area_fixed_'+lastArea).fadeIn(0);
            $('.fixed_top_btn').fadeIn(0);
        }else{
            $('.fixed_top_btn').fadeOut(0);
        }
    }
}

function ShowHideTopButton(){
    if ($('.fixed_top_btn2').length){
        if ($(window).scrollTop() >= 500){
            $('.fixed_top_btn2').fadeIn(0);
        }else{
            $('.fixed_top_btn2').fadeOut(0);
        }
    }
}

function _g(selector){
    return document.querySelector(selector);
} function _ga(selector){
    return document.querySelectorAll(selector);
}


function GetPageAjax(page, queryString, elementId, showWaiticon, callback){
    if(showWaiticon == undefined){
        showWaiticon = true;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("get", page + "?nocache=" + Date.now() + "&" + queryString);
    xhr.onreadystatechange = function(e){
        if(xhr.readyState == 4){
            var element = document.getElementById(elementId);
            element.innerHTML = xhr.responseText;
            var scripts = element.innerHTML.match(/<script[^>]*>[^<]*<\/script>/g);
            var script = "";
            if(scripts){
                for(var i=0; i<scripts.length;i++)
                {
                    script = scripts[i];
                    script = script.toString().replace('<script type="text/javascript">', '');
                    script = script.toString().replace('<script>', '');
                    script = script.replace('</script>', '');
                    eval(script);
                }
            }
            if(callback != undefined){
                window[callback]();
            }
            $("#waitIcon").fadeOut(200);
        }
    };
    if(showWaiticon){
        $("#waitIcon").fadeIn(200);
    }
    xhr.send();
}

function Redirect(url,blank){
    if (!blank){
        document.location = url;
    }else{
        window.open(url,'_blank');
    }
}

function OpenLightboxImage(id,idCloseFirst){
    if (idCloseFirst !== undefined){
        $('#'+idCloseFirst).fadeOut(200);
        $('#'+id).fadeIn(200);
    }
    else $('#'+id).fadeIn(200);
}

function ScrollToAnchor(id){
    var top = document.getElementById(id).offsetTop;
    $('html,body').animate({scrollTop:top}, '500');
}

function GetElementsByAttribute(attributeName, attributeValue, tagName){
    var elements = document.getElementsByTagName(tagName);
    var foundElements = [];
    for(var i=0; i<elements.length; i++){
        if(elements[i].getAttribute(attributeName) == attributeValue){
            foundElements.push(elements[i]);
        }
    }
    return foundElements;
}

function SelectMapListElement(id){
    $('.salonlocator_map_list_element').removeClass('selected');
    $('#'+id).addClass('selected');
    var top = document.getElementById(id).offsetTop;
    $('.salonlocator_map_list_cont_scrollable').animate({scrollTop:top}, '500');
}

function LoadAutoHighlightOverview(){
    var countId = 0;
    $('.box_overlay').each(function(){
        id = $(this).attr('id');
        if (id == undefined){
            id = 'overlay_'+countId;
            $(this).attr('id',id);
            countId++;
        }
        var top = $(this).parent().offset().top;
        var height = $(this).parent().outerHeight();
        var center = top + (height/2);
        arrBoxOverlayToShow.push(id+'|'+center);
    })
}

function AutoHighlightOverview(arrBoxOverlayToShow){
    var pageTop = $(window).scrollTop();
    var pageHeight = $(window).height();
    var rangeTop = pageTop + (pageHeight/4);
    var rangeBot = rangeTop + (pageHeight/2);
    for (var i = 0; i < arrBoxOverlayToShow.length; i++){
        arrKeyVal = arrBoxOverlayToShow[i].split('|');
        id = arrKeyVal[0];
        pos = arrKeyVal[1];
        if (pos > rangeTop && pos < rangeBot){
            $('#'+id).fadeIn(0);
            $('#'+id).parent().children('.box_overlay1').fadeIn(0);
        }else{
            $('#'+id).fadeOut(0);
            $('#'+id).parent().children('.box_overlay1').fadeOut(0);
        }
    }
}

function ReloadProductDetailFuncion(){
    if (!isMobile){
        $('.overlaid_box').mouseenter(function(){
            var overlaidbox = $(this);
            if (!overlaidbox.hasClass('stopanimopen')){
                overlaidbox.addClass('stopanimopen');
                if ($(this).children('.box_overlay1').length){
                    var ovH = $(this).height();
                    var ovW = $(this).width();
                    $(this).children('.box_overlay1').animate({bottom: -300,right: -300}, 300, function(){
                        overlaidbox.removeClass('stopanimopen');
                    });
                    $(this).children('.box_overlay').delay(100).fadeIn(200);
                }else{
                    $(this).children('.box_overlay').fadeIn(200, function(){
                        overlaidbox.removeClass('stopanimopen');
                    });
                    $(this).children('.box_overlay1').fadeIn(200);
                }
            }
        })

        $('.overlaid_box').mouseleave(function(){
            var overlaidbox = $(this);
            if (!overlaidbox.hasClass('stopanimclose')){
                overlaidbox.addClass('stopanimclose');
                if ($(this).children('.box_overlay1').length){
                    $(this).children('.box_overlay').fadeOut(100,function(){
                        $(this).parent().children('.box_overlay1').animate({bottom: -1015,right: -1015}, 500);
                        overlaidbox.removeClass('stopanimclose');
                    });
                }else{
                    $(this).children('.box_overlay').fadeOut(200,function(){
                        overlaidbox.removeClass('stopanimclose');
                    });
                    $(this).children('.box_overlay1').fadeOut(200);
                }
            }
        })

        $('.overlaid_box_tcck').mouseenter(function(){
            var overlaidbox = $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.overlaid_box');
            if (!overlaidbox.hasClass('stopanimopen')){
                overlaidbox.addClass('stopanimopen');
                var ovH = overlaidbox.height();
                var ovW = overlaidbox.width();
                $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.box_overlay1').animate({bottom: -300,right: -300}, 300, function(){
                    overlaidbox.removeClass('stopanimopen');
                });
                $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.box_overlay').delay(100).fadeIn(200);
            }
        })

        $('.overlaid_box_tcck').mouseleave(function(){
            var overlaidbox = $(this).parent().parent().parent().children('.trendcoll_cont_cx').find('.overlaid_box');
            var overlaybox = overlaidbox.find('.box_overlay');
            var overlay1box = overlaidbox.find('.box_overlay1');
            if (!overlaidbox.hasClass('stopanimclose')){
                overlaidbox.addClass('stopanimclose');
                overlaybox.fadeOut(100,function(){
                    overlay1box.animate({bottom: -1015,right: -1015}, 500);
                    overlaidbox.removeClass('stopanimclose');
                });
            }
        })
    }

    $('.lightbox_image_close').off('click');
    $('.lightbox_image_close').click(function(){
        var btn = $(this);
        if (btn.hasClass('lightbox_image_close_video')){
            var urlVideo = btn.parent().children('.lightbox_image').children('iframe').attr('src');
            btn.parent().children('.lightbox_image').children('iframe').attr('src','');
            btn.parent().fadeOut(200, function(){
                btn.parent().children('.lightbox_image').children('iframe').attr('src',urlVideo);
            });
        }else btn.parent().fadeOut(200);
    });
    
    $('.overview_cont').each(function(){
        maxW = ($(this).parent().outerWidth()*0.98)/2;
        $(this).css('max-width',maxW+'px');
        $(this).children('.overview_img_box').children('.overview_img').css('max-width',maxW+'px');
    });
}

function SetMenuBlockSize(){
    /*$('.menu_top_open_product_block').height($('.menu_top_open_products_cont_int.toshow .menu_top_open_product_block').width());
    $('.menu_top_open_product_mid_block').height($('#menu_top_open_products_cont_int.toshow .menu_top_open_product_mid_block').width());
    if ($(window).width() < 1200){
        $('.menu_top_open_product_text').css('padding-top','50%');
        $('.menu_top_open_product_text_title').css('font-size','12px');
        $('.menu_top_open_product_block').css('font-size','9px');
        $('.menu_top_open_product_image').css('height','75%');
    }else if ($(window).width() < 1320){
        $('.menu_top_open_product_text').css('padding-top','55%');
        $('.menu_top_open_product_text_title').css('font-size','13px');
        $('.menu_top_open_product_block').css('font-size','10px');
        $('.menu_top_open_product_image').css('height','82%');
    }else {
        $('.menu_top_open_product_text').css('padding-top','62%');
        $('.menu_top_open_product_text_title').css('font-size','16px');
        $('.menu_top_open_product_block').css('font-size','11px');
        $('.menu_top_open_product_image').css('height','90%');
    }*/
}

if (!isMobile){
    window.addEventListener("scroll", function(){
        var bodies = document.getElementsByTagName("body");
        var body = bodies[0];

        var boxes = GetElementsByAttribute("class", "history_text_box", "div");
        var lastFixed = null;
        for(var i=0; i<boxes.length; i++){
            boxes[i].style.position = "relative";
            boxes[i].style.top = 0;
            boxes[i].style.left = 0;
            var left = $j(boxes[i]).offset().left;
            var top = $j(boxes[i]).offset().top;
            var width = $j(boxes[i]).width();
            if(top <= $j(document).scrollTop()){
                boxes[i].style.position = "fixed";
                boxes[i].style.top = "0px";
                boxes[i].style.left = left + "px";
                boxes[i].style.width = width + "px";
                // boxes[i].style.height = "500px";
                lastFixed = i;
            }

            for(var j=0; j<lastFixed;j++){
                boxes[j].style.position = "relative";
                boxes[j].style.top = 0;
                boxes[j].style.left = 0;
            }
        }

    });
    
    function redirectToPage(id) {
        var link = '';
        switch (id) {
            case 1:
                link = 'campaign';
                break;
            case 2:
                link = 'product-framcolor-2001-intense';
                break;
            case 3:
                link = 'productl-morphosis-brunette';
                break;
            default:
                link = 'home';
                break;
        }
        console.log(link);
        Redirect(link);
    }
}
