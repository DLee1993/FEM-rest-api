/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkMode: {
                    siteBG: "hsl(207, 26%, 17%)",
                    componentBG: "hsl(209, 23%, 22%)",
                    text: "hsl(0, 0%, 100%)",
                },
                lightMode: {
                    siteBG: "hsl(0, 0%, 98%)",
                    componentBG: "hsl(0, 0%, 100%)",
                    text: "hsl(207, 26%, 17%)",
                    input: "hsl(0, 0%, 52%)",
                },
            },
        },
        fluidTypography: {},
    },
    // eslint-disable-next-line no-undef
    plugins: [require("tailwind-fluid-typography")],
};
