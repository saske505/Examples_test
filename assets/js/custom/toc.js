
// removed from application.js
// back to top button
$(function () {
  if ($('.docs-top').length) {
    _backToTopButton()
    $(window).on('scroll', _backToTopButton)
    function _backToTopButton () {
      if ($(window).scrollTop() > $(window).height()) {
        $('.docs-top').fadeIn()
      } else {
        $('.docs-top').fadeOut()
      }
    }
  }
})

$(function () {
    // doc nav js
    var $toc = $('.section-nav')
    $('.section-nav').addClass('card')
    $('.section-nav').addClass('hidden-sm-down')
    $('.section-nav').addClass('bg-faded')
    $('.section-nav li').addClass('nav-item')
    $('.section-nav li > a').addClass('nav-link')
    var $window = $(window)

    if ($toc[0]) {

      maybeActivateDocNavigation()
      $window.on('resize', maybeActivateDocNavigation)

      function maybeActivateDocNavigation () {
        if ($window.width() > 768) {
          activateDocNavigation()
        } else {
          deactivateDocNavigation()
        }
      }

      function deactivateDocNavigation() {
        $window.off('resize.theme.nav')
        $window.off('scroll.theme.nav')
        $toc.css({
          position: 'fixed',
          right: '',
          top: '',
          border: 'none'
        })
      }

      function activateDocNavigation() {

        var cache = {}

        function updateCache() {
          cache.containerTop   = $('.docs-content').offset().top - 20
          cache.containerRight = $('.docs-content').offset().left + $('.docs-content').width() + 45
          measure()
        }

        function measure() {
          var scrollTop = $window.scrollTop()
          var distance =  Math.max(scrollTop - cache.containerTop, 0)

          if (!distance) {
            $($toc.find('li a')[0]).addClass('active')
            return $toc.css({
              position: 'fixed',
              right: '0px',
              top: '100px'
              // border: 'solid 1px red'
            })
          }

          $toc.css({
            position: 'fixed',
            left: cache.containerRight,
            top: '10px'
            // border: 'solid 1px blue'
          })
        }

        updateCache()

        $(window)
          .on('resize.theme.nav', updateCache)
          .on('scroll.theme.nav', measure)

        $('body').scrollspy({
          target: '.section-nav',
          children: 'li > a'
        })

        setTimeout(function () {
          $('body').scrollspy('refresh')
        }, 1000)
      }
    }
})
