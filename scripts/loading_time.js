(function() {
    function load_time() {
        let time = performance.timing.loadEventStart - performance.timing.navigationStart;
        document.querySelector('#time').innerHTML +=
            `Page was loading ${time / 1000} seconds`;
    }

    window.addEventListener('load', load_time);
})();