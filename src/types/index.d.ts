export declare global {
  /**
   * @param className - string;
   * @param style - React.CSSProperties
   */
  type ExtendedFC = { className?: string; style?: React.CSSProperties };
  /**
   * Функциональный компонент React
   * @param className - string;
   * @param style - React.CSSProperties
   * @extends React.FC
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type IFC<T = {}> = React.FC<ExtendedFC & T>;

  /**
   * Тип определяет тип любого из ключей интерфейса и его значения
   */
  type AnyKeyOf<T> = Partial<Record<keyof T, T[keyof T]>>;

  interface IButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      React.AriaAttributes {}

  interface IInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
      React.AriaAttributes {}

  type SizeType = 'small' | 'large' | 'medium';
}
