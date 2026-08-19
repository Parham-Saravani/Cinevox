const AuthSignupContent = () => {
  return `
                <h2 class="font-bold text-2xl max-sm:text-xl">Create Your Account</h2>
                <p class="text-text-secondary text-sm max-sm:text-xs">Join Cinevo and start exploring</p>

                <form class="mt-6">
                    <div class="relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
                        <svg class="absolute size-5 left-2 bottom-0 top-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="user">
                            <path d="M670.1 278.4c0 8.8-.6 17.6-1.7 26.3.5-3.5 1-7.1 1.4-10.6-2.4 17.4-7 34.3-13.7 50.5 1.3-3.2 2.7-6.4 4-9.6-6.7 15.8-15.3 30.6-25.8 44.2l6.3-8.1c-10.4 13.4-22.5 25.5-35.9 35.9l8.1-6.3c-13.6 10.4-28.4 19.1-44.2 25.8 3.2-1.3 6.4-2.7 9.6-4-16.2 6.7-33.1 11.3-50.5 13.7 3.5-.5 7.1-1 10.6-1.4-17.5 2.3-35.1 2.3-52.6 0 3.5.5 7.1 1 10.6 1.4-17.4-2.4-34.3-7-50.5-13.7 3.2 1.3 6.4 2.7 9.6 4-15.8-6.7-30.6-15.3-44.2-25.8l8.1 6.3c-13.4-10.4-25.5-22.5-35.9-35.9l6.3 8.1c-10.4-13.6-19.1-28.4-25.8-44.2 1.3 3.2 2.7 6.4 4 9.6-6.7-16.2-11.3-33.1-13.7-50.5.5 3.5 1 7.1 1.4 10.6-2.3-17.5-2.3-35.1 0-52.6-.5 3.5-1 7.1-1.4 10.6 2.4-17.4 7-34.3 13.7-50.5-1.3 3.2-2.7 6.4-4 9.6 6.7-15.8 15.3-30.6 25.8-44.2l-6.3 8.1c10.4-13.4 22.5-25.5 35.9-35.9l-8.1 6.3c13.6-10.4 28.4-19.1 44.2-25.8-3.2 1.3-6.4 2.7-9.6 4 16.2-6.7 33.1-11.3 50.5-13.7-3.5.5-7.1 1-10.6 1.4 17.5-2.3 35.1-2.3 52.6 0-3.5-.5-7.1-1-10.6-1.4 17.4 2.4 34.3 7 50.5 13.7-3.2-1.3-6.4-2.7-9.6-4 15.8 6.7 30.6 15.3 44.2 25.8l-8.1-6.3c13.4 10.4 25.5 22.5 35.9 35.9l-6.3-8.1c10.4 13.6 19.1 28.4 25.8 44.2-1.3-3.2-2.7-6.4-4-9.6 6.7 16.2 11.3 33.1 13.7 50.5-.5-3.5-1-7.1-1.4-10.6 1.1 8.7 1.6 17.5 1.7 26.3.1 20.9 18.3 41 40 40 21.6-1 40.1-17.6 40-40-.2-47.9-14.6-96.9-42.8-135.9-7.6-10.5-15.7-20.8-24.7-30.1-9.1-9.4-19.1-17.5-29.5-25.4-18.9-14.4-40-25-62.4-33.2-90.3-33.1-199.2-3.6-260.3 70.8-8.4 10.2-16.4 20.8-23.2 32.2-6.8 11.3-12.1 23.3-17 35.5-9.2 22.6-13.9 46.6-15.8 70.9-3.7 47.6 8.7 97.3 33.5 138.1 23.9 39.4 60 73.2 102.2 92.3 12.4 5.6 25.1 10.8 38.3 14.5 13.1 3.6 26.4 5.6 39.9 7.2 24.6 2.9 49.7.9 74-4 92.3-18.8 169.6-98.3 183.9-191.6 2.1-13.6 3.7-27.2 3.7-41 .1-20.9-18.5-41-40-40-21.6.7-39.8 17.3-39.8 39.7zm132.7 625.3H289.7c-22.7 0-45.4.2-68.1 0-2.5 0-5-.2-7.4-.5 3.5.5 7.1 1 10.6 1.4-4-.6-7.8-1.7-11.5-3.2 3.2 1.3 6.4 2.7 9.6 4-4-1.7-7.7-3.9-11.2-6.6l8.1 6.3c-3-2.5-5.8-5.2-8.2-8.2l6.3 8.1c-2.7-3.5-4.8-7.2-6.6-11.2 1.3 3.2 2.7 6.4 4 9.6-1.5-3.7-2.5-7.6-3.2-11.5.5 3.5 1 7.1 1.4 10.6-1.6-12.1-.5-24.9-.5-37.1v-42.8c0-10.7.6-21.3 2-31.9-.5 3.5-1 7.1-1.4 10.6 2.8-20.5 8.2-40.6 16.3-59.7-1.3 3.2-2.7 6.4-4 9.6 7.8-18.2 17.8-35.3 29.9-51l-6.3 8.1c12.1-15.5 26-29.5 41.6-41.6L283 673c15.7-12.1 32.8-22.1 51-29.9-3.2 1.3-6.4 2.7-9.6 4 19.1-8 39.1-13.5 59.7-16.3-3.5.5-7.1 1-10.6 1.4 14.8-1.9 29.5-2 44.4-2h183c16.5 0 32.9-.1 49.4 2-3.5-.5-7.1-1-10.6-1.4 20.5 2.8 40.6 8.2 59.7 16.3-3.2-1.3-6.4-2.7-9.6-4 18.2 7.8 35.3 17.8 51 29.9l-8.1-6.3c15.5 12.1 29.5 26 41.6 41.6l-6.3-8.1c12.1 15.7 22.1 32.8 29.9 51-1.3-3.2-2.7-6.4-4-9.6 8 19.1 13.5 39.1 16.3 59.7-.5-3.5-1-7.1-1.4-10.6 1.9 15.1 2 30.1 2 45.3v49.5c0 5.7.2 11.4-.5 17 .5-3.5 1-7.1 1.4-10.6-.6 4-1.7 7.8-3.2 11.5 1.3-3.2 2.7-6.4 4-9.6-1.7 4-3.9 7.7-6.6 11.2l6.3-8.1c-2.5 3-5.2 5.8-8.2 8.2l8.1-6.3c-3.5 2.7-7.2 4.8-11.2 6.6 3.2-1.3 6.4-2.7 9.6-4-3.7 1.5-7.6 2.5-11.5 3.2 3.5-.5 7.1-1 10.6-1.4-2.2.3-4.5.4-6.8.5-10.3.1-20.9 4.4-28.3 11.7-6.9 6.9-12.2 18.3-11.7 28.3 1 21.4 17.6 40.3 40 40 38.9-.6 73.1-26 84.5-63.3 4.5-14.8 3.5-30.7 3.5-45.9 0-34.8 1.1-69.3-4.9-103.8-8.8-50.5-34.2-98-69-135.3-34.8-37.3-81.6-64.7-131.1-76.9-28.4-7-57-8.1-86-8.1H422.4c-29.7 0-59.2 1.4-88.1 9.1-49.1 13-95.3 40.7-129.4 78.3-34.4 37.9-59.3 85.5-67.4 136.3-5.4 34.1-4.3 68.3-4.3 102.7 0 15.8-.9 32.3 4.8 47.4 7.4 19.4 19.2 34.7 36.5 46.2 13.5 8.9 30.6 13.2 46.6 13.4 7.8.1 15.6 0 23.4 0h558.4c20.9 0 41-18.4 40-40-1-21.8-17.6-40.1-40.1-40.1z" fill="currentColor"></path>
                        </svg>
                        <input class="max-sm:text-xs px-6 h-full w-full ml-3 outline-hidden placeholder:text-text-secondary signup-username" placeholder="Enter your Username" type="text">
                    </div>
                    <p class="max-sm:text-[10px] ml-1 mt-1 text-red-600 text-xs hidden username-alert">Username must be at least 4 characters!</p>
                    <div class="relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
                        <svg class="absolute size-5 left-2 bottom-0 top-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email">
                                <g>
                                    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" fill="currentColor"></path>
                                </g>
                        </svg>
                        <input class="max-sm:text-xs pl-9 pr-6 h-full w-full rounded-xl outline-hidden placeholder:text-text-secondary signup-email" placeholder="Enter your email" type="text">
                    </div>
                    <p class="max-sm:text-[10px] ml-1 mt-1 text-red-600 text-xs hidden email-alert">Enter a valid Email!</p>
                    <div class="relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
                        <svg class="absolute left-2 size-5 top-0 bottom-0 my-auto" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32" id="lock">
                            <g>
                                <path d="M25 11h-1v-1a8 8 0 0 0-16 0v1H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V14a3 3 0 0 0-3-3Zm-15-1a6 6 0 0 1 12 0v1H10Zm16 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z" fill="currentColor"></path>
                                <path d="M16 16a2.993 2.993 0 0 0-1 5.816V24a1 1 0 0 0 2 0v-2.184A2.993 2.993 0 0 0 16 16Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" fill="currentColor"></path>
                            </g>
                        </svg>
                        <input class="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input signup-password" placeholder="Create a password" type="password">
                        <button type="button" class="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password">
                            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye">
                                <rect width="256" height="256" fill="none"></rect>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z">
                                </path>
                                <circle cx="128" cy="128.001" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
                            </svg>
                        </button>
                    </div>
                    <p class="max-sm:text-[10px] ml-1 mt-1 text-red-600 text-xs hidden password-alert">Password must be at least 8 characters!</p>

                    <div class="relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
                        <svg class="absolute left-2 size-5 top-0 bottom-0 my-auto" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32" id="lock">
                            <g>
                                <path d="M25 11h-1v-1a8 8 0 0 0-16 0v1H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V14a3 3 0 0 0-3-3Zm-15-1a6 6 0 0 1 12 0v1H10Zm16 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z"
                                    fill="currentColor"></path>
                                <path d="M16 16a2.993 2.993 0 0 0-1 5.816V24a1 1 0 0 0 2 0v-2.184A2.993 2.993 0 0 0 16 16Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" fill="currentColor"></path>
                            </g>
                        </svg>
                        <input class="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input signup-configm-password" placeholder="Confirm your password" type="password">
                        <button type="button" class="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password">
                            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye">
                                <rect width="256" height="256" fill="none"></rect>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z">
                                </path>
                                <circle cx="128" cy="128.001" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
                            </svg>
                        </button>
                    </div>
                    <p class="max-sm:text-[10px] ml-1 mt-1 text-red-600 text-xs hidden confirm-password-alert">Password does't match!</p>

                    <button class="max-sm:text-xs mt-5 font-bold text-sm text-center w-full h-12 rounded-xl bg-cta-primary hover:bg-cta-hover transform-colors duration-300 cursor-pointer signup-btn disabled:bg-cta-primary/40 disabled:cursor-default" type="button">Sign Up</button>
                </form>

                <p class="max-sm:text-[10px] text-xs mt-10 text-center">Already have an account?<span class="ml-1.5 text-cta-primary hover:text-cta-hover transition-colors duration-300 cursor-pointer">Login</span>
                </p>
  `;
};

export default AuthSignupContent;
