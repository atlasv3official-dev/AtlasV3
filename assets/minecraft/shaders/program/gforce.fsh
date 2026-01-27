#version 150

// The sampler, this is specified in gforce.json
uniform sampler2D DiffuseSampler;

// These are uniforms that we defined in the gforce.json
uniform vec2 ScreenSize;
uniform float Radius;
uniform float Softness;
uniform vec3 Color;
// Define the output
// Since we are computing the color here, it's a vector of 4 floats,
// representing r, g, b, and a.
out vec4 fragColor;

vec4 applyVignette(vec4 color) {
    vec2 position = (gl_FragCoord.xy / ScreenSize) - vec2(0.5);
    float dist = length(position);

    float vignette = smoothstep(Radius, Radius - Softness, dist);

    color.rgb = mix(Color, color.rgb, vignette);
    color.a = 1.0;
    return color;
}

void main() {
    vec2 texCoord = gl_FragCoord.xy / ScreenSize;
    vec4 color = texture(DiffuseSampler, texCoord);
    fragColor = applyVignette(color);
}