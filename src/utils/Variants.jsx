const commonTransition = {
    type: 'tween',
    duration: 1,
    ease: "easeInOut"
};

export const fadeInLeftVariant = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: commonTransition
    }
}

export const fadeInRightVariant = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: commonTransition
    }
}

export const fadeInTopVariant = {
    hidden: {
        y: -25,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: commonTransition
    }
}

export const fadeInBottomVariant = {
    hidden: {
        y: 25,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: commonTransition
    }
}

export const zoomInVariant = {
    hidden: {
        opacity: 0,
        scale: 0.75
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: commonTransition
    }
}

export const blurVariant = {
    hidden: {
        opacity: 0,
        y: 25,
        filter: "blur(2.5px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: commonTransition
    }
}

export const flipVariant = {
    hidden: {
        opacity: 0,
        rotateY: 90
    },
    visible: {
        opacity: 1,
        rotateY: 0,
        transition: commonTransition
    }
}