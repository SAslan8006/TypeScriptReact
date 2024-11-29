type PropsWithChildren = {
  name: string;
  type: "basic" | "advanced";
  email?: string;
};
function Component(props: PropsWithChildren): JSX.Element | null | string {
  const { name, type, email } = props;
  const alertType = type === "basic" ? "alert-success" : "alert-danger";
  return (
    <article className={`alert ${alertType}`}>
      <h2>user: {name}</h2>
      {email && <h2>email: {email}</h2>}
    </article>
  );
}
export default Component;
