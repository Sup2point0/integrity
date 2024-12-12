const presets: {
  [preset: string]: (desmos: object) => void,
} = {
  int: preset_integral,
};


export function set_preset(desmos: object, preset: string)
{
  presets[preset].call(desmos);
}

function preset_integral(desmos: object)
{
  desmos.add({
    latex: "f(x) ="
  })
}
