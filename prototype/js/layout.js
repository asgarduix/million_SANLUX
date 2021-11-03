var win = $(window);
var winHeight = win.height();
var winWidth = win.width();
var $canvas = document.getElementById("canvas");
var $menu = document.getElementById("left_menu");
var $cont = document.getElementById("right_content");
var $menuBtn = document.getElementById("menuBtn");

// notLogInContent height calculation //
var conHeight = $('.notLogInContainer').height();
if (conHeight < winHeight) {
    var headerHeight = $('.notLogInHeader').outerHeight();
    var footerHeight = $('.notLogInFooter').outerHeight();
    $('.notLogInContent').css('height', winHeight - (headerHeight + footerHeight));
}

// // page content height calculation //
// var pageWinPoint = true;

// function pageConHeight() {
//     var pageWinHeight = $(window).height();
//     var pageConHeight = $('.content').outerHeight();
//     var pageFooterHeight = $('.footer').outerHeight();
//     if (pageConHeight < pageWinHeight && pageWinPoint === true) {
//         console.log('too short!');
//         $('.content').css('height',pageWinHeight-pageFooterHeight);
//         pageWinPoint = false;
//     } else if (pageConHeight > pageWinHeight && pageWinPoint === false) {
//         console.log('enough!');
//         $('.content').css('height','auto');
//         pageWinPoint = true;
//     }
// };

// $(window).on('load', function() {
//     pageConHeight();
// });

// $(window).resize(function() {
//     var pageWinHeight = $(window).height();
//     var pageConHeight = $('.content').outerHeight();
//     var pageFooterHeight = $('.footer').outerHeight();
//     if (pageConHeight < pageWinHeight && pageWinPoint === true) {
//         console.log('too short!');
//         $('.content').css('height',pageWinHeight-pageFooterHeight);
//         pageWinPoint = false;
//     } else if (pageConHeight > pageWinHeight && pageWinPoint === false) {
//         console.log('enough!');
//         $('.content').css('height','auto');
//         pageWinPoint = true;
//     }

// });

// var pageWinPoint = true;
// $(window).resize(function() {
//     var pageConHeight = $('.content').height();
//     if (pageConHeight < winHeight && pageWinPoint === true) {
//         var pageConHeight = $('.content').height();
//         var pageFooterHeight = $('.footer').outerHeight();
//         $('.content').css('height', pageConHeight - pageFooterHeight);
//         pageWinPoint = false;
//         console.log('page too short!');
//     } else if (pageWinPoint === false){
//         $('.content').css('height', 'auto');
//         pageWinPoint = true;
//         console.log('page enough!');
//     }
// });

// $(window).resize(function() {
//     var pageWinW = $(window).width();
//     if (pageWinW <= 767 && pageWinPoint === true) {
//         var pageConHeight = $('.content').height();
//         if (pageConHeight < winHeight) {
//             var pageFooterHeight = $('.footer').outerHeight();
//             $('.content').css('height', winHeight - (pageFooterHeight));
//         } else {
//             $('.content').css('height', 'auto');
//         }
//         pageWinPoint = false;
//     } else if (pageWinW > 767 && pageWinPoint === false) {
//         $('.content').css('height', 'auto');
//         pageWinPoint = true;
//         console.log('>767');
//     }
// });

// include menu //
function includeMenu() {
    var menu_z, menu_i, menu_elmnt, menu_file, menu_xhttp;
    /* Loop through a collection of all HTML elements: */
    menu_z = document.getElementsByTagName("*");
    for (menu_i = 0; menu_i < menu_z.length; menu_i++) {
        menu_elmnt = menu_z[menu_i];
        /*search for elements with a certain atrribute:*/
        menu_file = menu_elmnt.getAttribute("menu-html");
        if (menu_file) {
            /* Make an HTTP request using the attribute value as the file name: */
            menu_xhttp = new XMLHttpRequest();
            menu_xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { menu_elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { menu_elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    menu_elmnt.removeAttribute("menu-html");
                    includeMenu();
                }
            }
            menu_xhttp.open("GET", menu_file, true);
            menu_xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// header search //
$('.header_searchBtn a').click(function() {
    $('.header_searchInput').stop(true, true).fadeToggle(200);
});

$(document).mouseup(function(e) {
    if ($(e.target).closest('.header_searchInput').length === 0 && $(e.target).closest('.header_searchBtn a').length === 0) {
        $('.header_searchInput').fadeOut(200);
    }
});

// left menu toggle //
function leftMenuToggle() {
    if ($canvas.classList) {
        $canvas.classList.toggle("jsCanvas");
    }

    if ($menu.classList && $cont.classList) {
        $menu.classList.toggle("jsMenuWidth");
        $cont.classList.toggle("jsContMargin");
        $cont.classList.toggle("jsTranslate");
    }
    if ($menuBtn.classList) {
        $menuBtn.classList.toggle("menuBtnToggle");
    }
}

function touchSreen() {
    $(document).mouseup(function(e) {
        if ($(e.target).closest('#left_menu').length === 0 && $(e.target).closest('#menuBtn').length === 0) {
            $('#left_menu').removeClass('jsMenuWidth');
            $("#right_content").removeClass('jsContMargin jsTranslate');
            $('#menuBtn').addClass("menuBtnToggle");
        }
    });
}

var winPoint = true;

function sizeCheck() {
    var winW = $(window).width();
    if (winW <= 767 && winPoint === true) {
        $('#left_menu').removeClass('jsMenuWidth');
        $("#right_content").removeClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').addClass("menuBtnToggle");
        winPoint = false;
    } else if (winW > 767 && winPoint === false) {
        $("#canvas").removeClass('jsCanvas');
        $('#left_menu').addClass('jsMenuWidth');
        $("#right_content").addClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').removeClass("menuBtnToggle");
        winPoint = true;
    }
}

$(window).on('load', function() {
    sizeCheck();
});

$(window).resize(function() {
    var winW = $(window).width();
    if (winW <= 767 && winPoint === true) {
        $('#left_menu').removeClass('jsMenuWidth');
        $("#right_content").removeClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').addClass("menuBtnToggle");
        winPoint = false;
    } else if (winW > 767 && winPoint === false) {
        $("#canvas").removeClass('jsCanvas');
        $('#left_menu').addClass('jsMenuWidth');
        $("#right_content").addClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').removeClass("menuBtnToggle");
        winPoint = true;
    }
});

$(document).ready(function() {
    $(".preventTransitions").each(function(index, element) {
        setTimeout(function() { $(element).removeClass("preventTransitions") }, 10);
    });
});

// show/hide header com info //
$('.comName a.moreLink').click(function() {
    $(this).stop(true, true).toggleClass('statusChange');
    $('.comDetail').stop(true, true).fadeToggle(200);
});

$(document).mouseup(function(e) {
    if ($(e.target).closest('.comDetail').length === 0 && $(e.target).closest('.comName a.moreLink').length === 0) {
        $('.comName a.moreLink').removeClass('statusChange');
        $('.comDetail').fadeOut(200);
    }
});

// jquery-ui datepicker //
$(function() {
    $(".searchDatepicker").datepicker({
        dateFormat: "t/mm/dd",
        changeMonth: true,
        changeYear: true,
        yearRange: "1911:+100"
    });
});


// clear tab a.active //
$('.tabSelectHeader a').click(function() {
    $(this).closest('.tabSelectHeader li').siblings().find('a').removeClass('active');
});

$(document).mouseup(function(e) {
    if ($(e.target).closest('.tabSelectHeader').length === 0 && $(e.target).closest('.tab-pane').length === 0) {
        $('.tab-pane').removeClass('show').removeClass('active');
        $('.nav-tabs a').removeClass('active');
    }
});

// checkbox detect //
$(document).on("change", ".tabSelectContent_Item input[type='checkbox']", function() {
    var checkedNum = $(".tabSelectContent_Item input[type='checkbox']:checked").length;
    if (checkedNum > 0) {
        $('.tabSelectHeader a.active').addClass('optionChecked');
        $('.tabSelect_cancel').prop('checked', '');
        $('.tabSelect_all').prop('checked', '');
    } else {
        $('.tabSelectHeader a.active').removeClass('optionChecked');
    }
});

$(".tabSelect_all").each(function() {
    $(this).click(function() {
        $(this).closest('.tabSelectContent_all').siblings('.tabSelectContent_Item').find('input').prop('checked', this.checked);
        $('.tabSelectHeader a.active').addClass('optionChecked');
    });
});

$(".tabSelect_cancel").each(function() {
    $(this).click(function() {
        $(this).closest('.tabSelectContent_all').siblings('.tabSelectContent_Item').find('input').prop('checked', '');
        $('.tabSelectHeader a.active').removeClass('optionChecked');
    });
});
