
const testimonialSliderButtons = document.querySelectorAll("[data-testimonial-slider-button]");

testimonialSliderButtons.forEach(button  => {
    button.addEventListener("click", () => {
        const testimonialSlidebars = document.querySelector("[data-testimonial-slidebars]")
        const offset = button.dataset.testimonialSliderButton === "next" ? 1 : -1;
        const activeTestimonialSlidebar = document.querySelector("[data-active-testimonial-slidebar]");
        let newIndex = [...testimonialSlidebars.children].indexOf(activeTestimonialSlidebar) + offset;
        if (newIndex < 0) newIndex = testimonialSlidebars.children.length - 1;
        if(newIndex >= testimonialSlidebars.children.length) newIndex = 0;

        testimonialSlidebars.children[newIndex].dataset.activeTestimonialSlidebar = true;
        delete activeTestimonialSlidebar.dataset.activeTestimonialSlidebar;
    })
})

/*Trip Slider*/
const tripSliderButtons = document.querySelectorAll("[data-trip-slider-button]");

tripSliderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.tripSliderButton === "next" ? 1 : -1
        const tripSlides = button.closest("[data-trip-slider]").querySelector("[data-slides]")
        const activeTripSlide = tripSlides.querySelector("[data-active-trip]")
        let newIndex = [...tripSlides.children].indexOf(activeTripSlide) + offset;
        if (newIndex < 0) newIndex = tripSlides.children.length - 1;
        if (newIndex >= tripSlides.children.length) newIndex = 0;

        tripSlides.children[newIndex].dataset.activeTrip = true
        delete activeTripSlide.dataset.activeTrip
    })
})