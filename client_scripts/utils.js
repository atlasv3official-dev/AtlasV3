global.Utils = {
    lerp: (start, end, amt) => start + (end - start) * amt,
    
    calculateGravity: (dimension, height, radius, planets) => {
        let g0 = planets[dimension]?.surface_gravity ?? 0.08;
        let g = g0 * Math.pow(radius / (radius + height), 2);
        return Math.min(g, 10 * g0);
    },
    
    calculateRadius: (surface_gravity, sea_level, escape_height, planets) => {
        let h_max = escape_height - sea_level;
        const ratio = Math.sqrt(planets["cosmos:solar_system"].surface_gravity / surface_gravity);
        return (h_max * ratio) / (1 - ratio);
    },

    ltp: (player,item,message) => {
        if (player.mainHandItem == item) player.tell(message)
    },

    roundToPointFive: (num) => {
        return Math.round(num*2)/2
    }


}