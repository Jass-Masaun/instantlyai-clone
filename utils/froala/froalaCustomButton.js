import Froalaeditor from 'froala-editor';

export const createFroalaCustomButton = ({
  icon,
  iconName,
  title,
  callback,
  additionalOptions = {},
}) => {
  Froalaeditor.DefineIcon(icon, {
    NAME: iconName,
    template: 'font_awesome',
  });
  Froalaeditor.RegisterCommand(icon, {
    title,
    focus: false,
    undo: false,
    refreshAfterCallback: false,
    callback,
    ...additionalOptions,
  });
};
