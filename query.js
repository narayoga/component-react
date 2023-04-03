/*
 * NOTICE OF LICENSE
 *
 * This file is licenced under the Software License Agreement.
 * With the purchase or the installation of the software in your application
 * you accept the licence agreement.
 *
 * You must not modify, adapt or create derivative works of this source code
 *
 *  @author    Ohm Conception
 *  @copyright 2016 Ohm Conception
 */

jQuery(function() {
    $(document).on('click', '#ohm-toggle-menu', function() {
      if ($('#ohm-side-menu-container').hasClass('moveLeft') || $('#ohm-side-menu-container').hasClass('moveRight')) {
        hideMenu();
      } else {
        showMenu();
      }
    });
  
    $(document).on('click', '#ohm-cont-overlay', function() {
      hideMenu();
    });
    
  // start new query 04/03/2023
  
      $(document).on('click', '.ohm-side-menu li:nth-child(3)', function() {
      hideMenuLi();
      });
      $(document).on('click', '.ohm-side-menu li:nth-child(4)', function() {
      hideMenuLi();
      });
      $(document).on('click', '.ohm-side-menu li:nth-child(5)', function() {
      hideMenuLi();
      });
  
    function hideMenuLi() {
        $('#ohm-cont-overlay').removeClass('ohm-side-menu-overlay')
        $('#ohm-toggle-menu').removeClass('rotate activeLy');
        $('#ohm-side-menu-container').removeClass($('#ohm-side-menu-container').data('move'));
        $('body').removeClass('moveLeft');
        $('body').removeClass('moveRight');
    }
    
  // end new query 04/03/2023
  
    function hideMenu() {
        $('#ohm-cont-overlay').removeClass('ohm-side-menu-overlay')
        $('#ohm-toggle-menu').removeClass('rotate activeLy');
        $('#ohm-side-menu-container').removeClass($('#ohm-side-menu-container').data('move'));
        $('body').removeClass('moveLeft');
        $('body').removeClass('moveRight');
    }
    function showMenu() {
        $('#ohm-cont-overlay').addClass('ohm-side-menu-overlay')
        $('#ohm-side-menu-container').addClass($('#ohm-side-menu-container').data('move'));
        $('#ohm-toggle-menu').addClass('rotate activeLy');
        if (typeof(menu_position) != 'undefined' && menu_position == 0) {
          $('body').addClass('moveLeft');
        } else {
          $('body').addClass('moveRight');
        }
    }
  });

// ======================================================================================================== batas suci 

/*
 * NOTICE OF LICENSE
 *
 * This file is licenced under the Software License Agreement.
 * With the purchase or the installation of the software in your application
 * you accept the licence agreement.
 *
 * You must not modify, adapt or create derivative works of this source code
 *
 *  @author    Ohm Conception
 *  @copyright 2016 Ohm Conception
 */

jQuery(function() {
    $(document).on('click', '#ohm-toggle-menu', function() {
      if ($('#ohm-side-menu-container').hasClass('moveLeft') || $('#ohm-side-menu-container').hasClass('moveRight')) {
        hideMenu();
      } else {
        showMenu();
      }
    });
  
    $(document).on('click', '#ohm-cont-overlay', function() {
      hideMenu();
    });
    
  // start new query 04/03/2023
  
      $(document).on('click', '.ohm-side-menu li:nth-child(3)', function() {
      hideMenuLi();
      });
      $(document).on('click', '.ohm-side-menu li:nth-child(4)', function() {
      hideMenuLi();
      });
      $(document).on('click', '.ohm-side-menu li:nth-child(5)', function() {
      hideMenuLi();
      });
  
    function hideMenuLi() {
        $('#ohm-cont-overlay').removeClass('ohm-side-menu-overlay')
        $('#ohm-toggle-menu').removeClass('rotate activeLy');
        $('#ohm-side-menu-container').removeClass($('#ohm-side-menu-container').data('move'));
        $('#body_wrapper').removeClass('moveLeft');
        $('#body_wrapper').removeClass('moveRight');
    }
    
  // end new query 04/03/2023
  
    function hideMenu() {
        $('#ohm-cont-overlay').removeClass('ohm-side-menu-overlay')
        $('#ohm-toggle-menu').removeClass('rotate activeLy');
        $('#ohm-side-menu-container').removeClass($('#ohm-side-menu-container').data('move'));
        $('#body_wrapper').removeClass('moveLeft');
        $('#body_wrapper').removeClass('moveRight');
    }
    function showMenu() {
        $('#ohm-cont-overlay').addClass('ohm-side-menu-overlay')
        $('#ohm-side-menu-container').addClass($('#ohm-side-menu-container').data('move'));
        $('#ohm-toggle-menu').addClass('rotate activeLy');
        if (typeof(menu_position) != 'undefined' && menu_position == 0) {
          $('#body_wrapper').addClass('moveLeft');
        } else {
          $('#body_wrapper').addClass('moveRight');
        }
    }
  });
  