app.controller("headerController", function($scope,$http, $window, $location) {	
//	$scope.logout = function(){
//		firebase.auth().signOut();
//		localStorage.clear();
//		 $window.location.href = '#/';
//	}
//	
//	
//
//
//	 //get elements
//	 const txtEmail = document.getElementById('txtEmail');
//	 const txtPassword = document.getElementById('txtPassword');
//	 const btnLogin = document.getElementById('btnLogin');
//	 const btnSignUp = document.getElementById('btnSignUp');
////	 const btnLogout = document.getElementById('btnLogout');
//	 const navbar = document.getElementById('navbar')
//
//	 // add login event
//
//	btnLogin.addEventListener('click', e => {
//	 //get email and pass
//	 const email = txtEmail.value;
//	 const pass  = txtPassword.value;
//	 const auth = firebase.auth();
//	 //sing in
//	 const promise = auth.signInWithEmailAndPassword(email, pass);
//	 promise.catch (e => window.alert(e.message));
//	 
//	});
//
//	 // add signup event
//	 btnSignUp.addEventListener('click', e => {
//	 //get email and pass
//	 const email = txtEmail.value;
//	 const pass  = txtPassword.value;
//	 const auth = firebase.auth();
//	 //sing in
//	 const promise = auth.createUserWithEmailAndPassword(email, pass);
//	 promise.catch (e => window.alert(e.message));
//	 });
//
////	 btnLogout.addEventListener('click', e => {
////	   firebase.auth().signOut();
////	 });
//
//	//localStorage.setItem('firebase', JSON.stringify(firebase));
//	 firebase.auth().onAuthStateChanged(firebaseUser => {
//	   if(firebaseUser){
//	   
////	     console.log(firebaseUser);
//	     $window.location.href = '#/admin';
////	 	$location.path("#/admin")
//	     
//	    
//	     btnLogout.classList.remove('hide');
//
//	   } else {
//	     console.log('not logged in');
//	     btnLogout.classList.add('hide');
//	   }
//	 });


	
	var Layout = function () {

	    var layoutImgPath = 'layout2/img/';

	    var layoutCssPath = 'layout2/css/';

//	    var resBreakpointMd = app.getResponsiveBreakpoint('md');

	    var ajaxContentSuccessCallbacks = [];
	    var ajaxContentErrorCallbacks = [];

	    //* BEGIN:CORE HANDLERS *//
	    // this function handles responsive layout on screen size resize or mobile device rotate.

	    // Set proper height for sidebar and content. The content and sidebar height must be synced always.
	    var handleSidebarAndContentHeight = function () {
	        var content = $('.page-content');
	        var sidebar = $('.page-sidebar');
	        var body = $('body');
	        var height;

	        if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
	            var available_height = app.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight();
	            if (content.height() < available_height) {
	                content.css('min-height', available_height);
	            }
	        } else {
	            if (body.hasClass('page-sidebar-fixed')) {
	                height = _calculateFixedSidebarViewportHeight();
	                if (body.hasClass('page-footer-fixed') === false) {
	                    height = height - $('.page-footer').outerHeight();
	                }
	            } else {
	                var headerHeight = $('.page-header').outerHeight();
	                var footerHeight = $('.page-footer').outerHeight();

	                if (app.getViewPort().width < resBreakpointMd) {
	                    height = app.getViewPort().height - headerHeight - footerHeight;
	                } else {
	                    height = sidebar.height() + 20;
	                }

	                if ((height + headerHeight + footerHeight) <= app.getViewPort().height) {
	                    height = app.getViewPort().height - headerHeight - footerHeight;
	                }
	            }
	            content.css('min-height', height);
	        }
	    };

	    // Handle sidebar menu links
	    var handleSidebarMenuActiveLink = function (mode, el, $state) {
	        var url = location.hash.toLowerCase();
	        var menu = $('.page-sidebar-menu');
	 
	        if (mode === 'click' || mode === 'set') {
	            el = $(el);
	        } else if (mode === 'match') {
	            menu.find('li > a').each(function () {
	                var state = $(this).attr('ui-sref');
	                if ($state && state) {
	                    if ($state.is(state)) {
	                        el = $(this);
	                        return;
	                    }
	                } else {
	                    var path = $(this).attr('href');
	                    if (path) {
	                        // url match condition         
	                        path = path.toLowerCase();
	                        if (path.length > 1 && url.substr(1, path.length - 1) == path.substr(1)) {
	                            el = $(this);
	                            return;
	                        }
	                    }
	                }
	            });
	        }
	 
	        if (!el || el.size() == 0) {
	            return;
	        }
	 
	        if (el.attr('href') == 'javascript:;' ||
	            el.attr('ui-sref') == 'javascript:;' ||
	            el.attr('href') == '#' ||
	            el.attr('ui-sref') == '#'
	            ) {
	            return;
	        }
	 
	        var slideSpeed = parseInt(menu.data('slide-speed'));
	        var keepExpand = menu.data('keep-expanded');
	 
	        // begin: handle active state
	        if (menu.hasClass('page-sidebar-menu-hover-submenu') === false) {
	            menu.find('li.nav-item.open').each(function () {
	                var match = false;
	                $(this).find('li').each(function () {
	                    var state = $(this).attr('ui-sref');
	                    if ($state && state) {
	                        if ($state.is(state)) {
	                            match = true;
	                            return;
	                        }
	                    } else if ($(this).find(' > a').attr('href') === el.attr('href')) {
	                        match = true;
	                        return;
	                    }
	                });
	 
	                if (match === true) {
	                    return;
	                }
	 
	                $(this).removeClass('open');
	                $(this).find('> a > .arrow.open').removeClass('open');
	                $(this).find('> .sub-menu').slideUp();
	            });
	        } else {
	            menu.find('li.open').removeClass('open');
	        }
	 
	        menu.find('li.active').removeClass('active');
	        menu.find('li > a > .selected').remove();
	        // end: handle active state
	 
	        el.parents('li').each(function () {
	            $(this).addClass('active');
	            $(this).find('> a > span.arrow').addClass('open');
	 
	            if ($(this).parent('ul.page-sidebar-menu').size() === 1) {
	                $(this).find('> a').append('<span class="selected"></span>');
	            }
	 
	            if ($(this).children('ul.sub-menu').size() === 1) {
	                $(this).addClass('open');
	            }
	        });
	 
	        if (mode === 'click') {
	            if (app.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { // close the menu on mobile view while laoding a page 
	                $('.page-header .responsive-toggler').click();
	            }
	        }
	    };

	    // Handle sidebar menu
	    var handleSidebarMenu = function () {
	        // handle sidebar link click
	        $('.page-sidebar-menu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
	            var that = $(this).closest('.nav-item').children('.nav-link');

	            if (app.getViewPort().width >= resBreakpointMd && !$('.page-sidebar-menu').attr("data-initialized") && $('body').hasClass('page-sidebar-closed') &&  that.parent('li').parent('.page-sidebar-menu').size() === 1) {
	                return;
	            }

	            var hasSubMenu = that.next().hasClass('sub-menu');

	            if (app.getViewPort().width >= resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').size() === 1) { // exit of hover sidebar menu
	                return;
	            }

	            if (hasSubMenu === false) {
	                if (app.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
	                    $('.page-header .responsive-toggler').click();
	                }
	                return;
	            }
	            
	            var parent =that.parent().parent();
	            var the = that;
	            var menu = $('.page-sidebar-menu');
	            var sub = that.next();

	            var autoScroll = menu.data("auto-scroll");
	            var slideSpeed = parseInt(menu.data("slide-speed"));
	            var keepExpand = menu.data("keep-expanded");

	            if (keepExpand !== true) {
	                parent.children('li.open').children('a').children('.arrow').removeClass('open');
	                parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
	                parent.children('li.open').removeClass('open');
	            }

	            var slideOffeset = -200;

	            if (sub.is(":visible")) {
	                $('.arrow', the).removeClass("open");
	                the.parent().removeClass("open");
	                sub.slideUp(slideSpeed, function () {
	                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
	                        if ($('body').hasClass('page-sidebar-fixed')) {
	                            menu.slimScroll({
	                                'scrollTo': (the.position()).top
	                            });
	                        } else {
	                            app.scrollTo(the, slideOffeset);
	                        }
	                    }
	                    handleSidebarAndContentHeight();
	                });
	            } else if (hasSubMenu) {
	                $('.arrow', the).addClass("open");
	                the.parent().addClass("open");
	                sub.slideDown(slideSpeed, function () {
	                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
	                        if ($('body').hasClass('page-sidebar-fixed')) {
	                            menu.slimScroll({
	                                'scrollTo': (the.position()).top
	                            });
	                        } else {
	                            app.scrollTo(the, slideOffeset);
	                        }
	                    }
	                    handleSidebarAndContentHeight();
	                });
	            }

	            e.preventDefault();
	        });

	        // handle menu close for angularjs version
	        if (app.isAngularJsapp()) {
	            $(".page-sidebar-menu li > a").on("click", function(e) {
	                if (app.getViewPort().width < resBreakpointMd && $(this).next().hasClass('sub-menu') === false) {
	                    $('.page-header .responsive-toggler').click();
	                }
	            });
	        }

	        // handle ajax links within sidebar menu
	        $('.page-sidebar').on('click', ' li > a.ajaxify', function (e) {
	            e.preventDefault();
	            app.scrollTop();

	            var url = $(this).attr("href");
	            var menuContainer = $('.page-sidebar ul');

	            menuContainer.children('li.active').removeClass('active');
	            menuContainer.children('arrow.open').removeClass('open');

	            $(this).parents('li').each(function () {
	                $(this).addClass('active');
	                $(this).children('a > span.arrow').addClass('open');
	            });
	            $(this).parents('li').addClass('active');

	            if (app.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
	                $('.page-header .responsive-toggler').click();
	            }

	            Layout.loadAjaxContent(url, $(this));
	        });

	        // handle ajax link within main content
	        $('.page-content').on('click', '.ajaxify', function (e) {
	            e.preventDefault();
	            app.scrollTop();

	            var url = $(this).attr("href");

	            app.startPageLoading();

	            if (app.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
	                $('.page-header .responsive-toggler').click();
	            }

	            Layout.loadAjaxContent(url);
	        });

	        // handle scrolling to top on responsive menu toggler click when header is fixed for mobile view
	        $(document).on('click', '.page-header-fixed-mobile .page-header .responsive-toggler', function(){
	            app.scrollTop(); 
	        });      
	     
	        // handle sidebar hover effect        
	        handleFixedSidebarHoverEffect();

	        // handle the search bar close
	        $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
	            e.preventDefault();
	            $('.sidebar-search').removeClass("open");
	        });

	        // handle the search query submit on enter press
	        $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
	            if (e.which == 13) {
	                $('.sidebar-search').submit();
	                return false; //<---- Add this line
	            }
	        });

	        // handle the search submit(for sidebar search and responsive mode of the header search)
	        $('.sidebar-search .submit').on('click', function (e) {
	            e.preventDefault();
	            if ($('body').hasClass("page-sidebar-closed")) {
	                if ($('.sidebar-search').hasClass('open') === false) {
	                    if ($('.page-sidebar-fixed').size() === 1) {
	                        $('.page-sidebar .sidebar-toggler').click(); //trigger sidebar toggle button
	                    }
	                    $('.sidebar-search').addClass("open");
	                } else {
	                    $('.sidebar-search').submit();
	                }
	            } else {
	                $('.sidebar-search').submit();
	            }
	        });

	        // handle close on body click
	        if ($('.sidebar-search').size() !== 0) {
	            $('.sidebar-search .input-group').on('click', function(e){
	                e.stopPropagation();
	            });

	            $('body').on('click', function() {
	                if ($('.sidebar-search').hasClass('open')) {
	                    $('.sidebar-search').removeClass("open");
	                }
	            });
	        }
	    };

	    // Handles the horizontal menu
	    var handleHeader = function() {
	        // handle search box expand/collapse        
	        $('.page-header').on('click', '.search-form', function(e) {
	            $(this).addClass("open");
	            $(this).find('.form-control').focus();

	            $('.page-header .search-form .form-control').on('blur', function(e) {
	                $(this).closest('.search-form').removeClass("open");
	                $(this).unbind("blur");
	            });
	        });

	        // handle hor menu search form on enter press
	        $('.page-header').on('keypress', '.hor-menu .search-form .form-control', function(e) {
	            if (e.which == 13) {
	                $(this).closest('.search-form').submit();
	                return false;
	            }
	        });

	        // handle header search button click
	        $('.page-header').on('mousedown', '.search-form.open .submit', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            $(this).closest('.search-form').submit();
	        });
	    };

	    // Helper function to calculate sidebar height for fixed sidebar layout.
	    var _calculateFixedSidebarViewportHeight = function () {
	        var sidebarHeight = app.getViewPort().height - $('.page-header').outerHeight();
	        if ($('body').hasClass("page-footer-fixed")) {
	            sidebarHeight = sidebarHeight - $('.page-footer').outerHeight();
	        }

	        return sidebarHeight;
	    };

	    // Handles fixed sidebar
	    var handleFixedSidebar = function () {
	        var menu = $('.page-sidebar-menu');

	        app.destroySlimScroll(menu);

	        if ($('.page-sidebar-fixed').size() === 0) {
	            handleSidebarAndContentHeight();
	            return;
	        }

	        if (app.getViewPort().width >= resBreakpointMd) {
	            menu.attr("data-height", _calculateFixedSidebarViewportHeight());
	            app.initSlimScroll(menu);
	            handleSidebarAndContentHeight();
	        }
	    };

	    // Handles sidebar toggler to close/hide the sidebar.
	    var handleFixedSidebarHoverEffect = function () {
	        var body = $('body');
	        if (body.hasClass('page-sidebar-fixed')) {
	            $('.page-sidebar').on('mouseenter', function () {
	                if (body.hasClass('page-sidebar-closed')) {
	                    $(this).find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed');
	                }
	            }).on('mouseleave', function () {
	                if (body.hasClass('page-sidebar-closed')) {
	                    $(this).find('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
	                }
	            });
	        }
	    };

	    // Hanles sidebar toggler
	    var handleSidebarToggler = function () {
	        var body = $('body');

	        /**
	        if (Cookies && Cookies.get('sidebar_closed') === '1' && app.getViewPort().width >= resBreakpointMd) {
	            $('body').addClass('page-sidebar-closed');
	            $('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
	        }
	        */

	        // handle sidebar show/hide
	        $('body').on('click', '.sidebar-toggler', function (e) {
	            var sidebar = $('.page-sidebar');
	            var sidebarMenu = $('.page-sidebar-menu');
	            $(".sidebar-search", sidebar).removeClass("open");

	            if (body.hasClass("page-sidebar-closed")) {
	                body.removeClass("page-sidebar-closed");
	                sidebarMenu.removeClass("page-sidebar-menu-closed");
	                if (Cookies) {
	                    Cookies.set('sidebar_closed', '0');
	                }
	            } else {
	                body.addClass("page-sidebar-closed");
	                sidebarMenu.addClass("page-sidebar-menu-closed");
	                if (body.hasClass("page-sidebar-fixed")) {
	                    sidebarMenu.trigger("mouseleave");
	                }
	                if (Cookies) {
	                    Cookies.set('sidebar_closed', '1');
	                }
	            }

	            $(window).trigger('resize');
	        });
	    };

	    // Handles Bootstrap Tabs.
	    var handleTabs = function () {
	        // fix content height on tab click
	        $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
	            handleSidebarAndContentHeight();
	        });
	    };

	    // Handles the go to top button at the footer
	    var handleGoTop = function () {
	        var offset = 300;
	        var duration = 500;

	        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
	            $(window).bind("touchend touchcancel touchleave", function(e){
	               if ($(this).scrollTop() > offset) {
	                    $('.scroll-to-top').fadeIn(duration);
	                } else {
	                    $('.scroll-to-top').fadeOut(duration);
	                }
	            });
	        } else {  // general 
	            $(window).scroll(function() {
	                if ($(this).scrollTop() > offset) {
	                    $('.scroll-to-top').fadeIn(duration);
	                } else {
	                    $('.scroll-to-top').fadeOut(duration);
	                }
	            });
	        }
	        
	        $('.scroll-to-top').click(function(e) {
	            e.preventDefault();
	            $('html, body').animate({scrollTop: 0}, duration);
	            return false;
	        });
	    };

	    // Hanlde 100% height elements(block, portlet, etc)
	    var handle100HeightContent = function () {

	        $('.full-height-content').each(function(){
	            var target = $(this);
	            var height;

	            height = app.getViewPort().height -
	                $('.page-header').outerHeight(true) -
	                $('.page-footer').outerHeight(true) -
	                $('.page-title').outerHeight(true) -
	                $('.page-bar').outerHeight(true);

	            if (target.hasClass('portlet')) {
	                var portletBody = target.find('.portlet-body');

	                app.destroySlimScroll(portletBody.find('.full-height-content-body')); // destroy slimscroll 
	                
	                height = height -
	                    target.find('.portlet-title').outerHeight(true) -
	                    parseInt(target.find('.portlet-body').css('padding-top')) -
	                    parseInt(target.find('.portlet-body').css('padding-bottom')) - 2;

	                if (app.getViewPort().width >= resBreakpointMd && target.hasClass("full-height-content-scrollable")) {
	                    height = height - 35;
	                    portletBody.find('.full-height-content-body').css('height', height);
	                    app.initSlimScroll(portletBody.find('.full-height-content-body'));
	                } else {
	                    portletBody.css('min-height', height);
	                }
	            } else {
	               app.destroySlimScroll(target.find('.full-height-content-body')); // destroy slimscroll 

	                if (app.getViewPort().width >= resBreakpointMd && target.hasClass("full-height-content-scrollable")) {
	                    height = height - 35;
	                    target.find('.full-height-content-body').css('height', height);
	                    app.initSlimScroll(target.find('.full-height-content-body'));
	                } else {
	                    target.css('min-height', height);
	                }
	            }
	        });        
	    };
	    //* END:CORE HANDLERS *//

	    return {
	        // Main init methods to initialize the layout
	        //IMPORTANT!!!: Do not modify the core handlers call order.

	        initHeader: function() {
	             handleHeader();
	        },

	        setSidebarMenuActiveLink: function(mode, el) {
	            handleSidebarMenuActiveLink(mode, el);
	        },

	        setAngularJsSidebarMenuActiveLink: function(mode, el, $state) {
	            handleSidebarMenuActiveLink(mode, el, $state);
	        },

	        initSidebar: function($state) {
	            //layout handlers
	            handleFixedSidebar(); // handles fixed sidebar menu
	            handleSidebarMenu(); // handles main menu
	            handleSidebarToggler(); // handles sidebar hide/show

	            if (app.isAngularJsapp()) {      
	                handleSidebarMenuActiveLink('match', null, $state); // init sidebar active links 
	            }

	            app.addResizeHandler(handleFixedSidebar); // reinitialize fixed sidebar on window resize
	        },

	        initContent: function() {
	            handle100HeightContent(); // handles 100% height elements(block, portlet, etc)
	            handleTabs(); // handle bootstrah tabs

	            app.addResizeHandler(handleSidebarAndContentHeight); // recalculate sidebar & content height on window resize
	            app.addResizeHandler(handle100HeightContent); // reinitialize content height on window resize 
	        },

	        initFooter: function() {
	            handleGoTop(); //handles scroll to top functionality in the footer
	        },

	        init: function () {            
	            this.initHeader();
	            this.initSidebar();
	            this.initContent();
	            this.initFooter();
	        },

	        loadAjaxContent: function(url, sidebarMenuLink) {
	            var pageContent = $('.page-content .page-content-body');    

	            app.startPageLoading({animate: true});
	            
	            $.ajax({
	                type: "GET",
	                cache: false,
	                url: url,
	                dataType: "html",
	                success: function (res) {    
	                    app.stopPageLoading();
	                    pageContent.html(res);

	                    for (var i = 0; i < ajaxContentSuccessCallbacks.length; i++) {
	                        ajaxContentSuccessCallbacks[i].call(res);
	                    }

	                    if (sidebarMenuLink.size() > 0 && sidebarMenuLink.parents('li.open').size() === 0) {
	                        $('.page-sidebar-menu > li.open > a').click();
	                    }
	                    
	                    Layout.fixContentHeight(); // fix content height
	                    app.initAjax(); // initialize core stuff
	                },
	                error: function (res, ajaxOptions, thrownError) {
	                    app.stopPageLoading();
	                    pageContent.html('<h4>Could not load the requested content.</h4>');

	                    for (var i = 0; i < ajaxContentErrorCallbacks.length; i++) {
	                        ajaxContentErrorCallbacks[i].call(res);
	                    }                    
	                }
	            });
	        },

	        addAjaxContentSuccessCallback: function(callback) {
	            ajaxContentSuccessCallbacks.push(callback);
	        },

	        addAjaxContentErrorCallback: function(callback) {
	            ajaxContentErrorCallbacks.push(callback);
	        },

	        //public function to fix the sidebar and content height accordingly
	        fixContentHeight: function () {
	            handleSidebarAndContentHeight();
	        },

	        initFixedSidebarHoverEffect: function() {
	            handleFixedSidebarHoverEffect();
	        },

	        initFixedSidebar: function() {
	            handleFixedSidebar();
	        },

	        getLayoutImgPath: function () {
	            return app.getAssetsPath() + layoutImgPath;
	        },

	        getLayoutCssPath: function () {
	            return app.getAssetsPath() + layoutCssPath;
	        }
	    };

	}();
});