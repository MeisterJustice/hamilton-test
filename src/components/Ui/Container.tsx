interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => (
  <div className="container xl:mx-auto px-5 font-serif">{children}</div>
);

export default Container;
