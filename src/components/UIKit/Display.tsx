type Props = {
  when: Boolean;
  children: Element;
};

const Display = ({ when, children }: Props) => (when ? children : false);

Display.defaultProps = {
  children: false,
};

export default Display;
