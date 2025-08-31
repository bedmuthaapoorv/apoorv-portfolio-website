export default interface IMenuOption {
  title: string;
  action: () => void;
  onDesktop: boolean;
}
