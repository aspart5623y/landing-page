if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('preloader').classList.add('loaded');
        ready()
    });
} else {
    ready()
}


function ready() {
    // document.querySelector('.navbar-close').addEventListener('click', () => {
    //     document.querySelector('.navbar-collapse').classList.remove('show')
    // });


}