import { useEffect, useState } from 'react';
import SplitText from '../components/animations/SplitText';

function Quote() {
    const [showSecondText, setShowSecondText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondText(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-[#0e0e10] px-6 md:px-24 flex items-center justify-center min-h-screen">
            <div className="text-center">
                <SplitText
                    text="Transformamos"
                    className="h1 text-white text-5xl md:text-7xl font-bebas"
                    delay={100}
                    duration={800}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
                {showSecondText && (
                    <SplitText
                        text="Ideas en Realidad"
                        className="h1 text-white text-5xl md:text-7xl font-bebas mt-2"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                )}
                <p className="mt-8 text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto">
                    Cada proyecto es una oportunidad para crear espacios que inspiran y perduran en el tiempo.
                </p>
            </div>
        </section>
    );
}

export default Quote;