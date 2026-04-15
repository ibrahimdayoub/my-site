export const theme = {
    colors: {
        primary: '#0f172a',
        primary_light: '#131b3080',
        secondary: '#7eadfc',
        white: '#ffffff',
        black: '#000000',
        gray: '#607c8c40',
        para_text_color: '#dcdcdc',
        error: '#ff6b6b',
        error_dark: '#c92a2a',
        success: '#51cf66',
        warning: '#ffd43b',
    },
    fonts: {
        family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        weight: {
            regular: 400,
            medium: 500,
            bold: 700,
        },
        size: {
            sm: '0.875rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
        }
    },
    breakpoints: {
        mobile: '(max-width: 720px)',
        tablet: '(min-width: 721px) and (max-width: 1024px)',
        desktop: '(min-width: 1025px)',
    },
    transitions: {
        default: '0.3s ease-in-out',
        fast: '0.15s ease-in-out',
        slow: '0.5s ease-in-out',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    }
}