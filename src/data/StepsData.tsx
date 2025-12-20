import { icons } from "../assets/assets";
import type { StepInterface } from "../Interfaces/StepInterface";

export const StepsData: StepInterface[] = [
    {
        title: "Schedule a Time",
        description: "Choose a convenient slot on our calendar to book your expert consultation",
        icon: icons.calendar
    },
    {
        title: "Meet a Consultant",
        description: "Schedule a one-on-one session with our experienced consultants to receive tailored advice and strategic solutions for your unique legal challenges.",
        icon: icons.consult
    },
    {
        title: "Successful Planning",
        description: "Strategic success begins with meticulous preparation, transforming your long-term vision into a clear and actionable roadmap for growth.",
        icon: icons.handshake
    },
    {
        title: "Successful Case",
        description: "Celebrating a proven track record of victory and justice through our history of landmark legal achievements.",
        icon: icons.order
    },
]