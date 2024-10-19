import '../css/app.css';
import './bootstrap';

import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {createRoot} from 'react-dom/client';
import ThemeCustomization from "./Layouts/UserLayout/Theme/index.jsx";
import {DrawerProvider} from "@/Contexts/Drawer/DrawerContext.jsx";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <ThemeCustomization>
                <DrawerProvider>
                    <App {...props} />
                </DrawerProvider>
            </ThemeCustomization>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
