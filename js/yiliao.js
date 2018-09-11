window.onload = function () {

    init();

    //初始化
    function init() {
        $(".goto").click(function(){
            $(".rightnav").toggleClass("active");
        });
        $(".beginmask").click(function(){
            $(this).remove();
        });
        
        goDiv("pt-page-quan", 22);
        $(".nav-down").click(function () {
            var img = document.querySelector(".nav-down img");
            if (img.src.indexOf("down") != -1) {
                img.src = "./img/up.png";
            } else {
                img.src = "./img/down.png";
            }
            $(".nav-down").toggleClass("down");
            $(".nav").toggleClass("down");
            $(".back-main").toggleClass("down");
        });
        window.onresize = function () {
            window.location.reload();
        }

        registSwiper();
        registClick();
    }

    //注册滑动组件
    function registSwiper() {
        window.navSwiper = new Swiper('.swiper-container', {
            slidesPerView: 7,
            freeMode: true,
            slideToClickedSlide: true,
            centeredSlides: true,
        });

        var swiperConfig = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        };

        window.dianxian_dpSwiper = new Swiper('.swiper-container-dianxian-dp', swiperConfig);
        window.jingxia_dpSwiper = new Swiper('.swiper-container-jingxia-dp', swiperConfig);
        window.jiayong_sbSwiper = new Swiper('.swiper-container-jiayong-sb', swiperConfig);
        window.jiayong_xlSwiper = new Swiper('.swiper-container-jiayong-xl', swiperConfig);
        window.jiayong_kkSwiper = new Swiper('.swiper-container-jiayong-kk', swiperConfig);
        window.fenguang_wqSwiper = new Swiper('.swiper-container-fenguang-wq', swiperConfig);
        window.fenguang_kxSwiper = new Swiper('.swiper-container-fenguang-kx', swiperConfig);
        window.fenguang_jjSwiper = new Swiper('.swiper-container-fenguang-jj', swiperConfig);
        window.guangjiao_jjSwiper = new Swiper('.swiper-container-guangjiao-jj', swiperConfig);
        window.guangjiao_wqSwiper = new Swiper('.swiper-container-guangjiao-wq', swiperConfig);
        window.zhifang_sbSwiper = new Swiper('.swiper-container-zhifang-sb', swiperConfig);
        window.zhifang_dpSwiper = new Swiper('.swiper-container-zhifang-dp', swiperConfig);
        window.zhifang_neibu_sbSwiper = new Swiper('.swiper-container-zhifang-neibu-sb', swiperConfig);
        window.zhifang_neibu_dpSwiper = new Swiper('.swiper-container-zhifang-neibu-dp', swiperConfig);
        window.zhifang_neibu_wqSwiper = new Swiper('.swiper-container-zhifang-neibu-wq', swiperConfig);
        window.jizhan_pdgSwiper = new Swiper('.swiper-container-jizhan-pdg', swiperConfig);
        window.xudian_sbSwiper = new Swiper('.swiper-container-xudian-sb', swiperConfig);
        window.xudian_gpSwiper = new Swiper('.swiper-container-xudian-gp', swiperConfig);
        window.zouxian_zxjSwiper = new Swiper('.swiper-container-zouxian-zxj', swiperConfig);
        window.zouxian_gpSwiper = new Swiper('.swiper-container-zouxian-gp', swiperConfig);
        window.weiqian_wqSwiper = new Swiper('.swiper-container-weiqian-wq', swiperConfig);
        window.weiqian_jgSwiper = new Swiper('.swiper-container-weiqian-jg', swiperConfig);
        window.huanjingSwiper = new Swiper('.swiper-container-huanjing', swiperConfig);
        window.jigui_jgSwiper = new Swiper('.swiper-container-jigui-jg', swiperConfig);
        window.jigui_sbSwiper = new Swiper('.swiper-container-jigui-sb', swiperConfig);
        window.jigui_dbSwiper = new Swiper('.swiper-container-dibiao', swiperConfig);
        window.bangong_kgSwiper = new Swiper('.swiper-container-bangong-kg', swiperConfig);
        window.bangong_zcSwiper = new Swiper('.swiper-container-bangong-zc', swiperConfig);
        window.jiankong_wqSwiper = new Swiper('.swiper-container-jiankong-wq', swiperConfig);
        window.ddfSwiper = new Swiper('.swiper-container-ddf-ddf', swiperConfig);

    }

    //注册进入和返回事件
    function registClick() {
        registGoClick();
        registBackClick();
        registTagClick();
    }

    //注册进入事件
    function registGoClick() {
        doClick(1, ["back-main", "s1"], "pt-page-quan", 0);
        //分光房
        doClick(1, ["quan-fgf", "s2"], "pt-page-fenguang", 1);
        //光交箱
        doClick(1, ["quan-gjx", "s6"], "pt-page-guangjiao", 1);
        //井下光缆
        doClick(1, ["quan-jxgl", "s7"], "pt-page-jingxia", 1);
        //电线杆
        doClick(1, ["quan-dxg", "s3"], "pt-page-dianxian", 1);
        //家庭
        doClick(1, ["quan-jt", "s9"], "pt-page-jiating", 1);
        doClick(1, ["jiating-jy", "s10"], "pt-page-jiayong", 1);
        //直放站
        doClick(1, ["quan-zfz", "s4"], "pt-page-zhifang", 1);
        doClick(1, ["zhifang-nb", "s11"], "pt-page-zhifang-neibu", 1);
        //基站
        doClick(1, ["quan-jz", "s8"], "pt-page-jizhan", 1);
        doClick(1, ["jizhan-nb", "s12"], "pt-page-jizhan-neibu", 1);
        doClick(1, ["jizhan-neibu-dcz", "s23"], "pt-page-xudian2", 1);
        doClick(1, ["jizhan-neibu-zxj", "s24"], "pt-page-zouxian2", 1);
        doClick(1, ["jizhan-neibu-wq", "s25"], "pt-page-weiqian2", 1);
        doClick(1, ["jizhan-neibu-jg", "s26"], "pt-page-jigui2", 1);
        //移动大厦
        doClick(1, ["quan-ydds", "s5"], "pt-page-yidong", 1);
        doClick(1, ["yidong-bgs", "s14"], "pt-page-bangong", 1);
        doClick(1, ["yidong-dt", "s15"], "pt-page-dating", 1);
        doClick(1, ["yidong-sj", "s13"], "pt-page-shuju", 1);

        doClick(1, ["shuju-jks", "s17"], "pt-page-jiankong", 1);
        doClick(1, ["shuju-jf", "s16"], "pt-page-gongdian", 1);

        doClick(1, ["gongdian-xdc", "s22"], "pt-page-xudian", 1);

        doClick(1, ["shuju-jj", "s20"], "pt-page-jigui", 1);
        doClick(1, ["shuju-wq", "s21"], "pt-page-weiqian", 1);
        doClick(1, ["shuju-ddf", "s18"], "pt-page-ddf", 1);
        doClick(1, ["shuju-zxj", "s19"], "pt-page-zouxian", 1);
    }

    //注册返回事件
    function registBackClick() {
        //城市全景
        doClick(-1, ["back-fenguang", "back-guangjiao", "back-jingxia", "back-dianxian", "back-jiating", "back-zhifang", "back-jizhan", "back-yidong"], "pt-page-quan", 0);
        //家庭
        doClick(-1, ["back-jiayong"], "pt-page-jiating", 0);
        //直放站
        doClick(-1, ["back-zhifang-neibu"], "pt-page-zhifang", 0);
        //基站
        doClick(-1, ["back-jizhan-neibu"], "pt-page-jizhan", 0);
        doClick(-1, ["back-xudian2"], "pt-page-jizhan-neibu", 0);
        doClick(-1, ["back-zouxian2"], "pt-page-jizhan-neibu", 0);
        doClick(-1, ["back-weiqian2"], "pt-page-jizhan-neibu", 0);
        doClick(-1, ["back-jigui2"], "pt-page-jizhan-neibu", 0);
        //移动大厦
        doClick(-1, ["back-bangong"], "pt-page-yidong", 0);
        doClick(-1, ["back-dating"], "pt-page-yidong", 0);
        doClick(-1, ["back-shuju"], "pt-page-yidong", 0);

        doClick(-1, ["back-jiankong"], "pt-page-shuju", 0);
        doClick(-1, ["back-gongdian"], "pt-page-shuju", 0);

        doClick(-1, ["back-xudian"], "pt-page-gongdian", 0);

        doClick(-1, ["back-jigui"], "pt-page-shuju", 0);
        doClick(-1, ["back-weiqian"], "pt-page-shuju", 0);
        doClick(-1, ["back-ddf"], "pt-page-shuju", 0);
        doClick(-1, ["back-zouxian"], "pt-page-shuju", 0);
    }

    //注册事件封装
    function doClick(type, objs, goDivName, slideIndex) {
        if (type == 1) {
            for (var i = 0; i < objs.length; i++) {
                (function (i) {
                    $("." + objs[i]).click(function () {
                        goDiv(goDivName, 22);
                        // navSwiper.slideTo(slideIndex, 500, false);
                    });
                })(i);
            }
        } else if (type == -1) {
            for (var i = 0; i < objs.length; i++) {
                (function (i) {
                    backDiv(objs[i], function () {
                        goDiv(goDivName, 22);
                        // navSwiper.slideTo(slideIndex, 500, false);
                    });
                })(i);
            }
        }
    }

    //注册标签事件
    function registTagClick() {
        showTag({ "dianxian-dp": 0 }, "mask-dianxian-dp", dianxian_dpSwiper);
        showTag({ "jingxia-dp": 0 }, "mask-jingxia-dp", jingxia_dpSwiper);
        showTag({ "jiayong-sb": 0 }, "mask-jiayong-sb", jiayong_sbSwiper);
        showTag({ "jiayong-xl": 0 }, "mask-jiayong-xl", jiayong_xlSwiper);
        showTag({ "jiayong-kk": 0 }, "mask-jiayong-kk", jiayong_kkSwiper);
        showTag({ "fenguang-wq": 0 }, "mask-fenguang-wq", fenguang_wqSwiper);
        showTag({ "fenguang-kx": 0 }, "mask-fenguang-kx", fenguang_kxSwiper);
        showTag({ "fenguang-jj": 0 }, "mask-fenguang-jj", fenguang_jjSwiper);
        showTag({ "guangjiao-jj": 0 }, "mask-guangjiao-jj", guangjiao_jjSwiper);
        showTag({ "guangjiao-wq": 0 }, "mask-guangjiao-wq", guangjiao_wqSwiper);
        showTag({ "zhifang-sb": 0 }, "mask-zhifang-sb", zhifang_sbSwiper);
        showTag({ "zhifang-dp": 0 }, "mask-zhifang-dp", zhifang_dpSwiper);
        showTag({ "zhifang-neibu-sb": 0 }, "mask-zhifang-neibu-sb", zhifang_neibu_sbSwiper);
        showTag({ "zhifang-neibu-dp": 0 }, "mask-zhifang-neibu-dp", zhifang_neibu_dpSwiper);
        showTag({ "zhifang-neibu-wq": 0 }, "mask-zhifang-neibu-wq", zhifang_neibu_wqSwiper);
        showTag({ "jizhan-neibu-pdg": 0, "gongdian-pd": 0 }, "mask-jizhan-pdg", jizhan_pdgSwiper);
        showTag({ "xudian-sb": 0 }, "mask-xudian-sb", xudian_sbSwiper);
        showTag({ "xudian-gp": 0 }, "mask-xudian-gp", xudian_gpSwiper);
        showTag({ "zouxian-zxj": 0 }, "mask-zouxian-zxj", zouxian_zxjSwiper);
        showTag({ "zouxian-gp": 0 }, "mask-zouxian-gp", zouxian_gpSwiper);
        showTag({ "weiqian-wq": 0 }, "mask-weiqian-wq", weiqian_wqSwiper);
        showTag({ "weiqian-jg": 0 }, "mask-weiqian-jg", weiqian_jgSwiper);
        showTag({ "jizhan-neibu-hj": 0, "dating-hj": 0, "shuju-hj": 0 }, "mask-huanjing", huanjingSwiper);
        showTag({ "jigui-jg": 0 }, "mask-jigui-jg", jigui_jgSwiper);
        showTag({ "jigui-sb": 0 }, "mask-jigui-sb", jigui_sbSwiper);
        showTag({ "jigui-db": 0 }, "mask-dibiao", jigui_dbSwiper);
        showTag({ "bangong-kg": 0, "dating-kg": 0, "jiankong-kg": 0 }, "mask-bangong-kg", bangong_kgSwiper);
        showTag({ "bangong-zc": 0, "dating-zc": 0, "jiankong-zc": 0 }, "mask-bangong-zc", bangong_zcSwiper);
        showTag({ "jiankong-xl": 0 }, "mask-jiankong-wq", jiankong_wqSwiper);
        showTag({ "ddf-ddf": 0 }, "mask-ddf-ddf", ddfSwiper);

        $(".mask").click(function () {
            $(".mask").hide();
        });
        $(".sc").click(function (e) {
            e.stopPropagation();
        });
    }

    //显示标签
    function showTag(data, sobj, swiper) {
        for (var j in data) {
            (function (j) {
                $("." + j).click(function () {
                    $(".mask." + sobj).show();
                    $(".mask." + sobj).addClass("pt-page-scaleUp");
                    swiper.slideTo(data[j], 500, false);
                    swiper.update();
                });
            })(j)
        }
    }

    //返回页面
    function backDiv(obj, fun) {
        $("." + obj).click(function () {
            fun();
        });
    }

    //离开页面
    function leaveDiv(obj, type) {
        var animationName = "";
        switch (type) {
            case 2:
                animationName = "pt-page-moveToRight";
                break;
            case 22:
                animationName = "pt-page-scaleDownUp";
                break;
        }
        $("." + obj).attr("class", "pt-page pt-page-current " + obj);
        $("." + obj).addClass(animationName);
        $("." + obj).attr("class", "pt-page " + obj);
    }

    //进入页面
    function goDiv(obj, type) {
        var now = document.querySelector(".pt-page-current");
        var current = "";
        if (now != null) {
            current = now.className.split(" ")[2];
            leaveDiv(current, 22);
        }
        var animationName = "";
        switch (type) {
            case 2:
                animationName = "pt-page-moveFromLeft";
                break;
            case 22:
                animationName = "pt-page-scaleUp";
                break;
        }
        $("." + obj).attr("class", "pt-page pt-page-current " + obj);
        $("." + obj).addClass(animationName);
    }
}