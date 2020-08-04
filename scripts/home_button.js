/*

Return to top button animations

*/

window.onscroll = function() {
    //Start function on scroll
    scrollFunction()
};

function scrollFunction() {

    //Get the button:
    mybutton = document.getElementById("myBtn");

    if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
        mybutton.style.display = "block";

        // If fade out is added, remove it and add fade in

        if (document.getElementById("myBtn").classList.contains('elementToFadeOut')) {
            document.getElementById("myBtn").classList.remove('elementToFadeOut');
        }

        if (!document.getElementById("myBtn").classList.contains('elementToFadeIn')) {
            document.getElementById("myBtn").classList.add('elementToFadeIn');
        }
    } else {

        // If no fade in or fade out classes have been added, do nothing
        if (!document.getElementById("myBtn").classList.contains('elementToFadeOut') && !document.getElementById("myBtn").classList.contains('elementToFadeIn')) {

            // If fade in is added, remove it and add fade out
        } else if (document.getElementById("myBtn").classList.contains('elementToFadeIn')) {
            document.getElementById("myBtn").classList.remove('elementToFadeIn');
            document.getElementById("myBtn").classList.add('elementToFadeOut');

            // If fade out isn't added, add it
        } else if (!document.getElementById("myBtn").classList.contains('elementToFadeOut')) {
            document.getElementById("myBtn").classList.add('elementToFadeOut');
        }


        mybutton.style.display = "block";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}