const AuthLoginContent = () => {
  return `
                <h2 class="font-bold text-2xl max-sm:text-xl">Welcome Back</h2>
                <p class="text-text-secondary text-sm max-sm:text-xs">Glad to see you again! Please login to continue</p>

                <form class="mt-7">
                    <div class="relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
                        <svg class="absolute size-5 left-2 bottom-0 top-0 my-auto" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" id="email">
                            <g>
                                <path
                                    d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                        <input class="max-sm:text-xs pl-9 pr-6 h-full w-full rounded-xl outline-hidden placeholder:text-text-secondary login-email" placeholder="Enter your email" type="text">
                    </div>
                    <p class="ml-1 max-sm:text-[10px] mt-1 text-red-600 text-xs email-alert hidden">Enter a valid Email!</p>

                    <div
                        class="relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
                        <svg class="absolute left-2 size-5 top-0 bottom-0 my-auto" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32" id="lock">
                            <g>
                                <path
                                    d="M25 11h-1v-1a8 8 0 0 0-16 0v1H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V14a3 3 0 0 0-3-3Zm-15-1a6 6 0 0 1 12 0v1H10Zm16 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M16 16a2.993 2.993 0 0 0-1 5.816V24a1 1 0 0 0 2 0v-2.184A2.993 2.993 0 0 0 16 16Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                        <input class="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input login-password" placeholder="Enter your password" type="password">
                        <button class="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password">
                            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye">
                                <rect width="256" height="256" fill="none"></rect>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="12"
                                    d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z">
                                </path>
                                <circle cx="128" cy="128.001" r="40" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
                            </svg>
                        </button>
                    </div>
                    <p class="ml-1 max-sm:text-[10px] mt-1 text-red-600 text-xs password-alert hidden">Password must be at least 8 characters!</p>

                    <div class="mt-3 flex items-center justify-between">
                        <div class="flex items-center text-xs max-sm:text-[10px]">
                            <label class="mr-1.5 w-4 h-4 text-transparent block rounded-sm bg-input-border/50 cursor-pointer remember-checkbox transition-colors duration-300" for="remember-checkbox">
                                <input id="remember-checkbox" class="mr-2" type="checkbox" hidden>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check">
                                    <path
                                        d="M18.3 6.3 9.1 16.4l-2.3-3c-.3-.4-1-.5-1.4-.2-.4.3-.5 1-.2 1.4l3 4c.2.2.5.4.8.4.3 0 .5-.1.7-.3l10-11c.4-.4.3-1-.1-1.4-.3-.4-1-.4-1.3 0z"
                                        fill="currentColor"></path>
                                </svg>
                            </label>
                            Remember me
                        </div>
                        <span
                            class="text-xs max-sm:text-[10px] text-cta-primary hover:text-cta-hover transition-colors duration-300 cursor-pointer">Forgot
                            Password?</span>
                    </div>

                    <button class="font-bold max-sm:text-xs text-sm mt-4 text-center w-full h-12 rounded-xl bg-cta-primary hover:bg-cta-hover transform-colors duration-300 cursor-pointer disabled:bg-cta-primary/40 disabled:cursor-default login-btn" type="button">Login</button>
                </form>

                <p class="text-xs max-sm:text-[10px] mt-10 text-center">Don't have an account?<span class="ml-1.5 text-cta-primary hover:text-cta-hover transition-colors duration-300 cursor-pointer signup-footer-btn">Sign Up</span></p>
    `;
};
export default AuthLoginContent;
