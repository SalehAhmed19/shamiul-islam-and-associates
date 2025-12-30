import { type Variants } from "framer-motion"

export const navbarVariants: Variants = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    menuHover: {
        scale: 1.2,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        }
    },
}

export const bannerVariants: Variants = {
    inital: {
        opacity: 0
    },
    whileInView: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    headingInitial: {
        opacity: 0,
        y: 30,
    },
    headingWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
    paragraphInitial: {
        opacity: 0,
    },
    paragraphWhileInView: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
        },
    }
}

export const buttonVariants: Variants = {
    hover: {
        scale: 1.2,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        }
    },
    initial: {
        y: 100,
        opacity: 0
    },
    whileInView: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
}

export const headingVariants: Variants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
}

export const messageSectionVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    paragraphInitial: {
        opacity: 0,
        y: 100,
        fontSize: "16px",
    },
    paragraphWhileInView: {
        opacity: 1,
        y: 0,
        fontSize: "18px",
        transition: {
            delay: 0.5,
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    signatureInitial: {
        opacity: 0,
        y: 100,
    },
    signatureWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    imageInitial: {
        opacity: 0,
        y: 100,
    },
    imageWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        },
    }
}

export const serviceCardVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    whileInView: {
        opacity: 1, scale: 1, transition: {
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    whileHover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        }
    },
    zoomInital: { opacity: 0, scale: 0.5 },
    zoomWhileInview: {
        opacity: 1, scale: 1, transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    paragraphInitial: {
        opacity: 0,
        y: 100
    },
    paragraphWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const headOfLegalVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
        }
    },
    topLeftInitial: {
        opacity: 0,
        x: -100
    },
    topLeftWhileInView: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    bottomRightInitial: {
        opacity: 0,
        x: 100
    },
    bottomRightWhileInView: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    imageInitial: {
        opacity: 0,
        y: 100
    },
    imageWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    imageHover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        }
    },
    chipsInitial: {
        opacity: 0,
        x: -100
    },
    chipsWhileInView: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    headingInitial: {
        opacity: 0,
        y: 100
    },
    headingWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    contentInitial: {
        opacity: 0,
        y: 100
    },
    contentWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    quoteInitial: {
        opacity: 0,
        x: -100
    },
    quoteWhileInView: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const askVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    headingInitial: {
        opacity: 0,
        y: 100
    },
    headingWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const ourAssociatesVariants: Variants = {
    paragraphInitial: {
        opacity: 0,
        y: 100
    },
    paragraphWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    associatesInitial: {
        opacity: 0,
        scale: 0.5
    },
    associatesWhileInView: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    nameInitial: {
        opacity: 0,
        y: 20
    },
    nameWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    positionInitial: {
        opacity: 0,
        y: 20
    },
    positionWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    courtInitial: {
        opacity: 0,
        y: 20
    },
    courtWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2.3,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const legalExcellenceVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    imageInitial: {
        opacity: 0,
        y: 100
    },
    imageWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    imageHover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        }
    },
    paragraphInitial: {
        opacity: 0,
        y: 100
    },
    paragraphWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const consultationVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    whileInView: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    titleInitial: {
        opacity: 0,
        y: -20
    },
    titleWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    contentInitial: {
        opacity: 0,
        y: 20
    },
    contentWhileInView: {
        opacity: 1.5,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    logoRotation: {
        rotate: 360,
        transition: { delay: 1.2, duration: 1, ease: "linear" }
    },
    formFieldInitial: {
        opacity: 0,
        y: -20
    },
    formFieldWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const FAQVariants: Variants = {
    headingInitial: {
        opacity: 0,
        y: 100
    },
    headingWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    faqInitial: {
        opacity: 0,
        y: 100
    },
    faqWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const OurBlogsVariants: Variants = {
    paragraphInitial: {
        opacity: 0,
        y: 20
    },
    paragraphWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    zoomInitial: {
        scale: 0.5,
    },
    zoomWhileInView: {
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    imageHover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        }
    },
    titleInitial: {
        opacity: 0,
        y: 20
    },
    titleWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.2,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    textInitial: {
        opacity: 0,
        y: 20
    },
    textWhileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const footerVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}