#version 450

layout(location = 0) out vec4 outColor;
layout(location = 0) in vec2 position;

layout(push_constant) uniform Push {
	float time;
};

//fragment shader for the background
void main() {
	outColor = vec4(fract(position.x + time), position.y, 0.0, 1.0);

    // Generate a sine wave based on the x position and time
    float wave_x = sin(position.x * 10.0 - time);
    float wave_y = sin(position.y * 10.0 + time);

    // Normalize the wave value to be between 0 and 1
    float normalizedWave_x = 0.5 * (wave_x + 1.0);
    float normalizedWave_y = 0.5 * (wave_y + 1.0);


    // Create the color using the sine wave for the red component,
    // the y position for the green component, and a constant for the blue component
    outColor = vec4(normalizedWave_x, normalizedWave_y, 0.9, 1.0);
}