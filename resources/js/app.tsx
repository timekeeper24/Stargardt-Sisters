import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import * as React from 'react';
import '../css/app.css';
import {ConfigProvider, theme} from "antd";


createInertiaApp({
    progress: {
        'color': "#cc5858"
    },
    title: title => `${title} - Webapps`,
    resolve: name => {
        // @ts-ignore
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        "colorPrimary": "#d71c40",
                        "colorInfo": "#d71c40",
                    },
                    components: {
                        Layout: {
                            "headerBg": "#d71c40"
                        }
                    }
                }}

            >
                <App {...props} />
            </ConfigProvider>
        )
    },
})
