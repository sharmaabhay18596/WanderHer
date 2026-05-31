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

      // Close immediately when a dropdown link is clicked (navigation happens naturally)
      dd.querySelectorAll('.dropdown a').forEach(function (link) {
        link.addEventListener('click', function () {
          closeAll();
        });
      });
    });

    // ── Close on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.has-dropdown')) closeAll();
    });

    // ── Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });

    function closeAll() {
      dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
  });
})();
