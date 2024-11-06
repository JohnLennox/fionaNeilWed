import { useEffect, useState } from "react";
import confetti from "canvas-confetti"; // Import canvas-confetti

function Countdown() {
    const calculateTimeLeft = () => {
        const endDate = new Date("November 17, 2024 14:00:00").getTime();
        const now = new Date().getTime();
        const difference = endDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [hasLaunchedConfetti, setHasLaunchedConfetti] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const updatedTimeLeft = calculateTimeLeft();
            setTimeLeft(updatedTimeLeft);

            // Check if the countdown has reached zero
            if (Object.keys(updatedTimeLeft).length === 0 && !hasLaunchedConfetti) {
                setHasLaunchedConfetti(true); // Set confetti launched flag

                // Launch confetti repeatedly for an extended celebration effect
                const confettiInterval = setInterval(() => {
                    confetti({
                        particleCount: 20,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        shapes: ["circle"], // Use circle to approximate heart shape
                        colors: ["#ff69b4", "#ff1493"], // Pink shades for a love theme
                    });
                    confetti({
                        particleCount: 40,
                        angle: 120,
                        spread: 45,
                        origin: { x: 1 },
                        shapes: ["circle"],
                        colors: ["#ff69b4", "#ff1493"],
                    });
                }, 250); // Every 250ms to create a longer, more constant flow of confetti

                // Stop confetti after 5 seconds
                setTimeout(() => {
                    clearInterval(confettiInterval);
                }, 5000);
            }
        }, 1000);

        // Clear the interval on component unmount
        return () => clearTimeout(timer);
    }, [timeLeft, hasLaunchedConfetti]);

    return (
        <div>
            <p style={{ fontSize: 'clamp(20px, 3vw, 35px)', marginBottom: 0 }}>
                {timeLeft.days || 0} days {timeLeft.hours || 0} hours {timeLeft.minutes || 0} minutes until
            </p>
            <p style={{ fontSize: 'clamp(20px, 4vw, 50px)', fontFamily: 'Dancing Script', fontWeight: 'bold' }}>
                "I do"
            </p>
        </div>
    );
}

export default Countdown;
