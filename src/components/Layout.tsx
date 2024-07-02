import NavMenu from "./NavMenu";
import classNames from "classnames";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main
      className={classNames(
        "relative flex h-full flex-col",
        "lg:flex lg:h-screen lg:flex-row lg:items-start lg:gap-4",
      )}
    >
      <NavMenu />
      <div
        className={classNames("h-[1px] w-full bg-gray", "lg:h-full lg:w-[1px]")}
      />
      <div className="h-full flex-1">{children}</div>
    </main>
  );
}
