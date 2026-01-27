function GForce() {
    this.blackoutProgress = 0.0;
    this.isBlackingOut = false;
    this.FADE_SPEED = 0.01;
    this.blackoutColor = [0.0,0.0,0.0];
    this.softness = [0.5];
}   
GForce.prototype.onTick = function() {
    // interpolate inwards or outwards
    if (this.isBlackingOut) {
        if (this.blackoutProgress < 1.0) {
            this.blackoutProgress = Math.min(1.0, this.blackoutProgress + this.FADE_SPEED);
        }
    } else {
        if (this.blackoutProgress > 0.0) {
            this.blackoutProgress = Math.max(0.0, this.blackoutProgress - this.FADE_SPEED);
        }
    }

    // update the shader if the effect is visible
    if (this.blackoutProgress > 0.0) {
        VisualJS.applyEffect("gforce", true);

        let currentRadius = 1.2 - (this.blackoutProgress * 0.9);

        VisualJS.setUniform(0, "Radius", [currentRadius]);
        VisualJS.setUniform(0, "Softness", this.softness);
        VisualJS.setUniform(0, "Color", this.blackoutColor);
    } else {
        VisualJS.clearEffect();
    }
}

GForce.prototype.onLoggedOut = function() {
    this.blackoutProgress = 0.0;
    this.isBlackingOut = false;
    VisualJS.clearEffect();
}

GForce.prototype.startBlackout = function() { this.isBlackingOut = true; };
GForce.prototype.stopBlackout = function() { this.isBlackingOut = false; };
GForce.prototype.isBlackoutActive = function() { return this.isBlackingOut};
GForce.prototype.setBlackoutColor = function(r, g, b) {this.blackoutColor = [r, g, b]};
GForce.prototype.setBlackoutSoftness = function(softness) {this.softness = [softness]};

global.GForce = new GForce();
ClientEvents.tick(event => { global.GForce.onTick() });
ClientEvents.loggedOut(event => { global.GForce.onLoggedOut() });