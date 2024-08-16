/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723793413", {
    template: `
    <section id="cta-component" class="flex-1 min-h-[550px] bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600" style="min-height: 630px;"><div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style=""><div id="cta-title-container" class="flex"><h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white" style="" data-mf-new="true">Craft Your Perfect Writing Instrument's</h2></div> <div id="cta-subtitle-container" class="flex"><p id="cta-subtitle" class="flex-1 mb-6 font-light text-white md:text-lg">Design, customize, and create unique pens with our intuitive pen-making app</p></div> <div id="cta-button-container" class="flex"><a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Start Designing Now</a></div></div></div></section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
