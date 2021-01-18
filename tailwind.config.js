const colors = require('tailwindcss/colors')
const svgToDataUri = require('mini-svg-data-uri')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base
const { spacing, borderWidth, borderRadius, outline } = defaultTheme

module.exports = {
    purge: {
        mode: 'all',
        content: [
            './vendor/laravel/jetstream/**/*.blade.php',
            './storage/framework/views/*.php',
            './resources/views/**/*.blade.php',
            './resources/js/**/*.{vue,js}',
        ],
        options: {
            safelist: {
                standard: [/cm|CodeMirror|splitpanes/],
            },
        },
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.gray,
                orange: colors.orange,
                primary: colors.yellow,
            },
            cursor: {
                'col-resize': 'col-resize',
                'row-resize': 'row-resize',
            },
            fontFamily: {
                mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                'inherit': 'inherit',
                '2xs': '0.625rem',
                '3xs': '0.5rem',
            },
            height: {
                'px': '1px',
                '14.5': '3.625rem',
            },
            lineHeight: {
                'inherit': 'inherit',
            },
            spacing: {
                '10.5': '2.625rem',
                'safe-top': 'env(safe-area-inset-top)',
                'safe-bottom': 'env(safe-area-inset-bottom)',
                'safe-left': 'env(safe-area-inset-left)',
                'safe-right': 'env(safe-area-inset-right)',
            },
            width: {
                'px': '1px',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['focus-within'],
            backgroundOpacity: ['dark'],
            display: ['group-hover', 'group-focus'],
            opacity: ['disabled', 'group-focus'],
            ringColor: ['focus-within'],
            ringOffsetColor: ['focus-within'],
            ringOffsetWidth: ['focus-within'],
            ringWidth: ['focus-within'],
            scale: ['focus-within'],
            width: ['hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addBase, theme }) {
            addBase({
                [`
                    [type='text'],
                    [type='email'],
                    [type='url'],
                    [type='password'],
                    [type='number'],
                    [type='date'],
                    [type='datetime-local'],
                    [type='month'],
                    [type='search'],
                    [type='tel'],
                    [type='time'],
                    [type='week'],
                    [multiple],
                    textarea,
                    select
                `]: {
                    appearance: 'none',
                    'font-size': baseFontSize,
                    'line-height': baseLineHeight,
                },
                'input::placeholder, textarea::placeholder': {
                    color: theme('colors.gray.500', colors.gray[500]),
                    opacity: '1',
                },
                '::-webkit-datetime-edit-fields-wrapper': {
                    padding: '0',
                },
                '::-webkit-date-and-time-value': {
                    'min-height': '1.5em',
                },
                select: {
                    'background-image': `url("${svgToDataUri(
                        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
                            'colors.gray.500',
                            colors.gray[500]
                        )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8l4 4 4-4"/></svg>`
                    )}")`,
                    'background-position': `right center`,
                    'background-repeat': `no-repeat`,
                    'background-size': `1em`,
                    'padding-right': spacing[8],
                    'color-adjust': `exact`,
                },
                '[multiple]': {
                    'background-image': 'initial',
                    'background-position': 'initial',
                    'background-repeat': 'unset',
                    'background-size': 'initial',
                    'padding-right': spacing[3],
                    'color-adjust': 'unset',
                },
                [`
                    [type='checkbox'],
                    [type='radio']
                `]: {
                    appearance: 'none',
                    padding: '0',
                    'color-adjust': 'exact',
                    display: 'inline-block',
                    'vertical-align': 'middle',
                    'background-origin': 'border-box',
                    'user-select': 'none',
                    'flex-shrink': '0',
                    height: spacing[4],
                    width: spacing[4],
                    color: theme('colors.blue.600', colors.blue[600]),
                    'background-color': '#fff',
                    'border-color': theme('colors.gray.500', colors.gray[500]),
                    'border-width': borderWidth['DEFAULT'],
                },
                [`[type='checkbox']`]: {
                    'border-radius': borderRadius['none'],
                },
                [`[type='radio']`]: {
                    'border-radius': '100%',
                },
                [`
                    [type='checkbox']:focus,
                    [type='radio']:focus
                `]: {
                    outline: outline.none[0],
                    'outline-offset': outline.none[1],
                    '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
                    '--tw-ring-offset-width': '2px',
                    '--tw-ring-offset-color': '#fff',
                    '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
                    '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                    '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-color)`,
                    'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`,
                },
                [`
                    [type='checkbox']:checked,
                    [type='radio']:checked
                `]: {
                    'background-size': `100% 100%`,
                    'background-position': `center`,
                    'background-repeat': `no-repeat`,
                },
                [`[type='checkbox']:checked`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg viewBox="0 0 16 16" fill="${theme(
                            'colors.gray.500',
                            colors.gray[500]
                        )}" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
                    )}")`,
                },
                [`[type='radio']:checked`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg viewBox="0 0 16 16" fill="${theme(
                            'colors.gray.500',
                            colors.gray[500]
                        )}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
                    )}")`,
                },
                [`[type='checkbox']:indeterminate`]: {
                    'background-image': `url("${svgToDataUri(
                        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
                    )}")`,
                    'background-size': `100% 100%`,
                    'background-position': `center`,
                    'background-repeat': `no-repeat`,
                },
                [`
                    [type='checkbox']:indeterminate:hover,
                    [type='checkbox']:indeterminate:focus
                `]: {
                    'background-color': 'currentColor',
                },
                [`[type='file']`]: {
                    background: 'unset',
                    'border-color': 'inherit',
                    'border-width': '0',
                    'border-radius': '0',
                    padding: '0',
                    'font-size': 'unset',
                    'line-height': 'inherit',
                },
                [`[type='file']:focus`]: {
                    outline: `1px solid ButtonText`,
                    outline: `1px auto -webkit-focus-ring-color`,
                },
            })
        })
    ],
};
