// Translations just so I wouldnt have to change the values in the db or make crazy algorithims to format text or whatever
// sometimes handiwork is the fastest and easiest
export const translations = {
    'Vanilla JS': 'javascript',
    'React Native': 'react',
    CSS: 'css3',
    HTML: 'html5',
    'React.js': 'react',
    'Node.js': 'node-dot-js',
    'Next.js': 'next-dot-js',
    'Express.js': 'express',
};

/* Animation Configs: */

// Projects Page Background
export const projectsPageBgConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
};

// Featured Projects Background
export const featuredProjectsBgConfig = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 500,
            },
        },
        color: {
            value: '#e8e8e8',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 1.5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: [],
                parallax: {
                    enable: true,
                    force: 5,
                    smooth: 5,
                },
            },
            resize: false,
        },
    },
};

// Featured Projects Card Background
export const featuredProjectCardBgConfig = {
    background: {
        color: {
            value: 'transparent',
        },
        repeat: 'no-repeat',
        size: 'cover',
    },
    fullScreen: {
        enable: true,
        zIndex: 0,
    },
    particles: {
        opacity: {
            value: 0.5,
        },
        collisions: {
            enable: true,
        },
        shape: {
            type: 'images',
            fill: true,
            // image: {
            //     src:
            //         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-eyeseyesorgans-of-the-visual-systemorganisms-visionoptical-systemlightfocuseslensclipart-14215268836709ozgj.png&f=1&nofb=1', // any path or url to your image that will be used as a particle
            //     width: 100, // the pixel width of the image, you can use any value, the image will be scaled
            //     height: 100, // the pixel height of the image, you can use any value, the image will be scaled
            //     replaceColor: true, // if true and the image type is SVG, it will replace all the colors with the particle color
            // },
        },
        color: {
            value: '#e8e6e3',
        },
        move: {
            angle: {
                offset: 0,
                value: 0,
            },
            direction: 'bottom',
            enable: true,
            path: {
                clamp: false,
            },
            outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
            },
            speed: 3.5,
        },
        number: {
            value: 50,
        },
        size: {
            random: {
                enable: true,
            },
            value: {
                min: 14,
                max: 18,
            },
        },
    },
};
