import { SVGProps } from 'react';
import Close from './components/Close';

/**
 * Объект с компонентами иконок
 * @example
 * <Icons.Socket />
 * <Icons.Chandelier />
 */
export const Icons = {
  Close
};

export type IconsType = keyof typeof Icons;

export interface IconProps extends SVGProps<SVGElement> {
  name: IconsType;
}

/**
 * Компонент принимает пропс name и возвращает иконку с таким названием
 * @param name - название иконки
 * @extends SVGProps<SVGElement>
 */
export const Icon: IFC<IconProps> = (props) => {
  const { name, ...other } = props;

  if (!Icons[name]) {
    return null;
  }

  return Icons[name]({ ...other });
};
