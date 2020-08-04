/*

Side nav 

*/

function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



/*

Slide in elements animation + sticky nav


*/

window.addEventListener("scroll", function() {

    // If window is > 1950 px, unhide everything and have no animations
    if (window.innerHeight > 1950) {

        document.querySelectorAll('.hidden').forEach(x => x.classList.remove('hidden'));
        if (scrollY > window.innerHeight) {
            document.getElementsByClassName("nav")[0].classList.add("fixed");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("fixed");
        }

        // Else If window is in between , do animations with updated points
    } else if (window.innerHeight > 1440 && window.innerHeight <= 1950) {
        if (scrollY > window.innerHeight) {
            document.getElementsByClassName("nav")[0].classList.add("fixed");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("fixed");
        }
        //About Section

        if (scrollY > (innerHeight - 1100)) {
            document.getElementsByClassName("about_class")[0].classList.remove("hidden")
            document.getElementsByClassName("about_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("hori_line")[0].classList.remove("hidden")
            document.getElementsByClassName("hori_line")[0].classList.add("slide-in-right-element")

        }

        if (scrollY > (innerHeight - 1200)) {
            document.getElementsByClassName("slide-in-left")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-left")[0].classList.add("slide-in-element")

            document.getElementsByClassName("slide-in-right")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-right")[0].classList.add("slide-in-right-element")
        }

        // Skills section

        if (scrollY > (innerHeight - 800)) {
            document.getElementsByClassName("skills_class")[0].classList.remove("hidden")
            document.getElementsByClassName("skills_class")[0].classList.add("slide-in-right-element")

            document.getElementsByClassName("skills_line")[0].classList.remove("hidden")
            document.getElementsByClassName("skills_line")[0].classList.add("slide-in-element")

        }

        if (scrollY > (innerHeight - 790)) {
            document.getElementsByClassName("slide-in-left_skills")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-left_skills")[0].classList.add("slide-in-element")

            document.getElementsByClassName("slide-in-right_skills")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-right_skills")[0].classList.add("slide-in-right-element")
        }

        // Work Exp section

        if (scrollY > (innerHeight + 250)) {
            document.getElementsByClassName("work_exp_class")[0].classList.remove("hidden")
            document.getElementsByClassName("work_exp_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("work_exp_line")[0].classList.remove("hidden")
            document.getElementsByClassName("work_exp_line")[0].classList.add("slide-in-right-element")

        }

        if (scrollY > (innerHeight + 300)) {
            document.getElementsByClassName("ceridian_section")[0].classList.remove("hidden")
            document.getElementsByClassName("ceridian_section")[0].classList.add("fade-in-element")

        }
        if (scrollY > (innerHeight + 500)) {

            document.getElementsByClassName("roots_section")[0].classList.remove("hidden")
            document.getElementsByClassName("roots_section")[0].classList.add("fade-in-element")
        }
        if (scrollY > (innerHeight + 650)) {
            document.getElementsByClassName("waterloop_section")[0].classList.remove("hidden")
            document.getElementsByClassName("waterloop_section")[0].classList.add("fade-in-element")
        }

        // Education section

        if (scrollY > (innerHeight + 1700)) {
            document.getElementsByClassName("education_class")[0].classList.remove("hidden")
            document.getElementsByClassName("education_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("education_line")[0].classList.remove("hidden")
            document.getElementsByClassName("education_line")[0].classList.add("slide-in-right-element")

        }

        if (scrollY > (innerHeight + 1750)) {
            document.getElementsByClassName("slide-in-left_edu")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-left_edu")[0].classList.add("slide-in-element")

            document.getElementsByClassName("slide-in-right_edu")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-right_edu")[0].classList.add("slide-in-right-element")
        }

        // Contact section

        if (scrollY > (innerHeight + 1780)) {
            document.getElementsByClassName("contact_class")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("contact_line")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_line")[0].classList.add("slide-in-right-element")

            document.getElementsByClassName("contact_text")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_text")[0].classList.add("slide-in-right-element")
        }

        if (scrollY > (innerHeight + 1780)) {
            document.getElementsByClassName("contact_form_section")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_form_section")[0].classList.add("fade-in-element")
        }


        // If window is small, do animation with updated points
    } else {
        if (scrollY > (innerHeight - 10)) {
            document.getElementsByClassName("nav")[0].classList.add("fixed");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("fixed");
        }

        //About Section

        if (scrollY > (innerHeight - 250)) {
            document.getElementsByClassName("about_class")[0].classList.remove("hidden")
            document.getElementsByClassName("about_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("hori_line")[0].classList.remove("hidden")
            document.getElementsByClassName("hori_line")[0].classList.add("slide-in-right-element")

        }

        if (scrollY > (innerHeight - 100)) {
            document.getElementsByClassName("slide-in-left")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-left")[0].classList.add("slide-in-element")

            document.getElementsByClassName("slide-in-right")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-right")[0].classList.add("slide-in-right-element")
        }

        // Skills section

        if (scrollY > (innerHeight + 450)) {
            document.getElementsByClassName("skills_class")[0].classList.remove("hidden")
            document.getElementsByClassName("skills_class")[0].classList.add("slide-in-right-element")

            document.getElementsByClassName("skills_line")[0].classList.remove("hidden")
            document.getElementsByClassName("skills_line")[0].classList.add("slide-in-element")

        }

        if (scrollY > (innerHeight + 500)) {
            document.getElementsByClassName("slide-in-left_skills")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-left_skills")[0].classList.add("slide-in-element")

            document.getElementsByClassName("slide-in-right_skills")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-right_skills")[0].classList.add("slide-in-right-element")
        }

        // Work Exp section

        if (scrollY > (innerHeight + 1100)) {
            document.getElementsByClassName("work_exp_class")[0].classList.remove("hidden")
            document.getElementsByClassName("work_exp_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("work_exp_line")[0].classList.remove("hidden")
            document.getElementsByClassName("work_exp_line")[0].classList.add("slide-in-right-element")

        }

        if (scrollY > (innerHeight + 1200)) {
            document.getElementsByClassName("ceridian_section")[0].classList.remove("hidden")
            document.getElementsByClassName("ceridian_section")[0].classList.add("fade-in-element")

        }
        if (scrollY > (innerHeight + 1600)) {

            document.getElementsByClassName("roots_section")[0].classList.remove("hidden")
            document.getElementsByClassName("roots_section")[0].classList.add("fade-in-element")
        }
        if (scrollY > (innerHeight + 2050)) {
            document.getElementsByClassName("waterloop_section")[0].classList.remove("hidden")
            document.getElementsByClassName("waterloop_section")[0].classList.add("fade-in-element")
        }

        // Education section

        if (scrollY > (innerHeight + 2870)) {
            document.getElementsByClassName("education_class")[0].classList.remove("hidden")
            document.getElementsByClassName("education_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("education_line")[0].classList.remove("hidden")
            document.getElementsByClassName("education_line")[0].classList.add("slide-in-right-element")

        }

        if (scrollY > (innerHeight + 3000)) {
            document.getElementsByClassName("slide-in-left_edu")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-left_edu")[0].classList.add("slide-in-element")

            document.getElementsByClassName("slide-in-right_edu")[0].classList.remove("hidden")
            document.getElementsByClassName("slide-in-right_edu")[0].classList.add("slide-in-right-element")
        }

        // Contact section

        if (scrollY > (innerHeight + 3100)) {
            document.getElementsByClassName("contact_class")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_class")[0].classList.add("slide-in-element")

            document.getElementsByClassName("contact_line")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_line")[0].classList.add("slide-in-right-element")

            document.getElementsByClassName("contact_text")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_text")[0].classList.add("slide-in-right-element")
        }

        if (scrollY > (innerHeight + 3100)) {
            document.getElementsByClassName("contact_form_section")[0].classList.remove("hidden")
            document.getElementsByClassName("contact_form_section")[0].classList.add("fade-in-element")
        }
    }

});