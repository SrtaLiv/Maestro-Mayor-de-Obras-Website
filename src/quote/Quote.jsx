import AnimatedContent from '../components/animations/AnimatedContent';
import SplitText from '../components/animations/SplitText';
import { useEffect, useState } from 'react';
import './quote.css'

function StatCounter({ value, prefix = '', duration = 1500, className = '' }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const startTime = performance.now();

        const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(easedProgress * value);
            setDisplayValue(start);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        const animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return (
        <p className={className}>
            {prefix}{displayValue}
        </p>
    );
}

function Quote() {
    return (
        <section className="bg-[#0e0e10] px-6 md:px-24 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-5xl">
                {/* Name */}
                <AnimatedContent distance={40} threshold={0.2}>
                    <p className="text-orange-400 uppercase tracking-widest text-sm md:text-base mb-3 font-semibold">Maestro Mayor de Obras</p>
                </AnimatedContent>
                <SplitText
                    text="Marcelo Abel"
                    className="h1 text-white text-5xl md:text-7xl font-bebas"
                    delay={80}
                    duration={600}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
                <SplitText
                    text="Todesco"
                    className="h1 text-orange-400 text-5xl md:text-7xl font-bebas"
                    delay={80}
                    duration={600}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />

                <AnimatedContent direction="horizontal" distance={50} threshold={0.2} delay={120}>
                    <p className="text-gray-300 text-base md:text-xl leading-relaxed mt-4 max-w-4xl font-semibold">
                        Maestro Mayor de Obras en Olavarria, especializado en proyectos de construccion, planos municipales, direccion tecnica y asesoramiento para obras nuevas, ampliaciones y reformas.
                    </p>
                </AnimatedContent>
                <AnimatedContent direction="horizontal" distance={50} threshold={0.2} delay={180}>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed mt-3 max-w-4xl">
                        Desarrollo de planos y proyectos en Olavarria y zona, con experiencia en viviendas, locales comerciales, edificios y obras para inversionistas.
                    </p>
                </AnimatedContent>

                {/* Stats */}
                <AnimatedContent distance={40} delay={200} threshold={0.2}>
                    <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 mb-10 border-t border-b border-white/10 py-8">
                        <div className="text-center">
                            <StatCounter value={33} prefix="+" className="stat-glow-number text-4xl md:text-6xl font-bebas font-extrabold" />
                            <p className="stat-glow-label text-sm md:text-base uppercase tracking-wide mt-1 font-extrabold">años en el rubro</p>
                        </div>
                        <div className="text-center border-l border-r border-white/10">
                            <StatCounter value={300} prefix="+" className="stat-glow-number text-4xl md:text-6xl font-bebas font-extrabold" />
                            <p className="stat-glow-label text-sm md:text-base uppercase tracking-wide mt-1 font-extrabold">proyectos</p>
                        </div>
                        <div className="text-center">
                            <StatCounter value={1996} className="stat-glow-number text-4xl md:text-6xl font-bebas font-extrabold" />
                            <p className="stat-glow-label text-sm md:text-base uppercase tracking-wide mt-1 font-extrabold">desde el inicio</p>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Clients */}
                <AnimatedContent distance={30} delay={350} threshold={0.2}>
                    <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-4">trabaja con</p>
                    <div className="flex flex-wrap gap-3">
                        {["Inversionistas", "Constructores", "Propietarios", "Empresarios"].map((tag) => (
                            <span
                                key={tag}
                                className="border border-orange-400/50 text-orange-300 px-4 py-2 text-sm md:text-base uppercase tracking-wide font-semibold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}

export default Quote;