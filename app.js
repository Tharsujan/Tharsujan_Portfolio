document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
            header.style.backgroundColor = '#29323c';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    });

    function downloadResume() {
        const resumeURL = 'https://drive.google.com/file/d/1CK9oCiD23LoRjhhgLPsi79AjOabGIKBL/view?usp=sharing';
        const link = document.createElement('a');
        link.href = resumeURL;
        link.download = 'Kunarasa_Tharsujan.pdf'; // Set the desired filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const downloadButton = document.querySelector('.cta');
    downloadButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const target = this.getAttribute('href').substring(1); // Remove the "#" from the href attribute
        const section = document.getElementById(target);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
