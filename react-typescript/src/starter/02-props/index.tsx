type PropsWithChildren = {
  name: string;
  id: number;
  children?: React.ReactNode;
};

// type ComponentProps = PropsWithChildren<{
//   name: string;
//   id: number;
// }>;

function Component({
  name,
  id,
  children,
}: PropsWithChildren): JSX.Element | null | string {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
