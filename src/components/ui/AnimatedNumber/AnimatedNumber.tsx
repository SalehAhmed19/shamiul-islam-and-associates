import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef(null);

    // 'once: false' মানে হলো যতবার স্ক্রিনে আসবে ততবার অ্যানিমেশন ট্রিগার হবে
    // 'amount: 0.5' মানে হলো যখন সংখ্যার অর্ধেক অংশ স্ক্রিনে দেখা যাবে তখন শুরু হবে
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    const spring = useSpring(0, {
        mass: 0.8,
        stiffness: 75,
        damping: 15
    });

    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            // যখন স্ক্রিনে আসবে (In View), তখন ০ থেকে ভ্যালু পর্যন্ত যাবে
            spring.set(value);
        } else {
            // যখন স্ক্রিনের বাইরে চলে যাবে, তখন আবার ০-তে সেট হবে
            spring.set(0);
        }
    }, [isInView, spring, value]);

    return (
        <motion.span ref={ref} style={{ display: "inline-block" }} className="text-3xl md:text-[40px] font-bold">
            {display}
        </motion.span>
    );
}