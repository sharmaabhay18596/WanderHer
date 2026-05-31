(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('mainNav');
    var dropdowns = document.querySelectorAll('.has-dropdown');

    // ── Sticky nav on scroll
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('solid', window.scrollY > 60);
      });
    }

    // ── Mobile hamburger toggle
    if (nav) {
      var mobileBtn = nav.querySelector('.nav-mobile-btn');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          nav.classList.toggle('mobile-open');
        });
      }

      // Close mobile menu when any navigating link is clicked
      nav.querySelectorAll('a[href]:not([href="#"])').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('mobile-open');
        });
      });

      // Close mobile menu on Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          nav.classList.remove('mobile-open');
          closeAll();
        }
      });

      // Close mobile menu on outside click
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
          nav.classList.remove('mobile-open');
          closeAll();
        }
      });
    }

    // ── Dropdown: click to open/close
    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector(':scope > a');
      if (!trigger) return;

      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var wasOpen = dd.classList.contains('open');
        closeAll();
        if (!wasOpen) dd.classList.add('open');
      });

      // Close dropdown when a dropdown link is clicked
      dd.querySelectorAll('.dropdown a').forEach(function (link) {
        link.addEventListener('click', function () {
          closeAll();
        });
      });
    });

    function closeAll() {
      dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
  });
})();
