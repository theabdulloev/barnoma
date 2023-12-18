import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                ibt: {
                    '50': '#f3f6fc',
                    '100': '#e7eef7',
                    '200': '#c9daee',
                    '300': '#99bce0',
                    '400': '#6299ce',
                    '500': '#3d7ab6',
                    '600': '#2d619c',
                    '700': '#264f7e',
                    '800': '#234469',
                    '900': '#213a59',
                    '950': '#16253b'
                },
            }
        }
    }
}