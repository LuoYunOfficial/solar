document.addEventListener("DOMContentLoaded", function() {
    const headerHtml = `
        <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center space-x-8">
                        <div class="flex items-center space-x-2">
                            <img src="https://luoyunofficial.github.io/solar/assets/solar-logo.png" alt="Solar" class="w-8 h-8 rounded" />
                            <span class="text-xl font-bold text-black-500 m-hidden">Solar</span>
                        </div>
                        
                        <nav class="hidden md:flex space-x-6">
                            <a href="https://luoyunofficial.github.io/solar/" class="text-gray-700 hover:text-blue-500 transition-colors lang" key="HOME">Home</a>
                            <a href="https://luoyunofficial.github.io/solar/shorts" class="text-gray-700 hover:text-blue-500 transition-colors lang" key="SHORTS">Shorts</a>
                            <a href="https://luoyunofficial.github.io/solar/trend" class="text-gray-700 hover:text-blue-500 transition-colors lang" key="TREND">Trending</a>
                            <a href="https://luoyunofficial.github.io/solar/gamecenter" class="text-gray-700 hover:text-blue-500 transition-colors lang" key="GAME_CENTER">Game Center</a>
                        </nav>
                    </div>

                    <div class="flex-1 max-w-md mx-8 m-hidden">
                        <div class="relative">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                            />
                            <button class="search-button absolute right-1 top-1 bottom-1 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <button class="icon-button m-display" style="display: none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        </button>
                        <div class="m-hidden">
                            <button class="icon-button m-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                            </button>
                        </div>
                        <div class="m-hidden">
                            <button class="icon-button m-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                            </button>
                        </div>
                        <div class="m-hidden">
                            <button class="icon-button m-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                            </button>
                        </div>
                        <div class="m-hidden">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                <p class="lang" key="LOGIN">Login</p>
                            </button>
                        </div>
                        <button class="mobile-menu-button md:hidden" id="mobile-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" class="md:hidden hidden">
                <nav class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="https://luoyunofficial.github.io/solar/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 lang" key="HOME">Home</a>
                    <a href="https://luoyunofficial.github.io/solar/shorts" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 lang" key="SHORTS">Shorts</a>
                    <a href="https://luoyunofficial.github.io/solar/trend" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 lang" key="TREND">Trending</a>
                    <a href="https://luoyunofficial.github.io/solar/gamecenter" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 lang" key="GAME_CENTER">Game Center</a>
                    <a href="https://luoyunofficial.github.io/solar/login" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 lang" key="LOGIN">Login</a>
                    <a href="https://luoyunofficial.github.io/solar/register" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 lang" key="REGISTER">Register</a>
                </nav>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Add event listener for mobile menu button
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", function() {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Adjust elements for mobile view
    function adjustElements() {
        if (window.innerWidth < 600) {
            const mHiddenElements = document.querySelectorAll(".m-hidden");
            mHiddenElements.forEach(el => el.style.display = "none");
            const mDisplayElements = document.querySelectorAll(".m-display");
            mDisplayElements.forEach(el => el.style.display = "block");
        } else {
            const mHiddenElements = document.querySelectorAll(".m-hidden");
            mHiddenElements.forEach(el => el.style.display = "block");
            const mDisplayElements = document.querySelectorAll(".m-display");
            mDisplayElements.forEach(el => el.style.display = "none");
        }
    }

    window.addEventListener("resize", adjustElements);
    adjustElements(); // Initial call to set correct display on load
});




