type ContainerProps = { children: React.ReactNode };

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1440px] min-w-[500px] mx-auto ">
      {children}
    </div>
  );
}