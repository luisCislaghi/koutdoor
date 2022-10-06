export const toForm = config => ({
  text: config.text,
  textColor: config.textStyle.color,
  textSize: config.textStyle.fontSize,
  backgroundColor: config.background,
  speed: config.speed,
});

export const toConfig = form => ({
  text: form.text,
  textStyle: {
    fontSize: form.textSize,
    backgroundColor: 'transparent',
    color: form.textColor,
  },
  speed: form.speed,
  backgroundProps: {
    background: form.backgroundColor,
  },
});
