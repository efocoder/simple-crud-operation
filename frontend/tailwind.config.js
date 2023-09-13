/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                whitesmoke: {
                    "100": "#f3f4f6",
                    "200": "#f3f3f4",
                    "300": "#ececeb",
                },
                stroke: "rgba(204, 207, 206, 0.24)",
                gainsboro: {
                    "100": "#e5e5e4",
                    "200": "#d9d9d9",
                },
                white: "#fff",
                darkslategray: {
                    "100": "#404040",
                    "200": "#2b3834",
                    "300": "#004741",
                },
                lightgray: "rgba(204, 207, 206, 0.4)",
                "primary-colour-3": "#808785",
                "gray-6": "#f2f2f2",
                "primary-colour-4": "#55605c",
                "primary-colour-6": "#00100b",
                darkgray: "#a6a6a5",
            },
            spacing: {},
            fontFamily: {
                matter: "Matter",
            },
            borderRadius: {
                "81xl": "100px",
                "981xl": "1000px",
            },
            fontSize: {
                xs: "12px",
                sm: "14px",
                smi: "13px",
                inherit: "inherit",
            },

        },
        corePlugins: {
            preflight: false,
        },
    },
    plugins: [require('flowbite/plugin')],
}

