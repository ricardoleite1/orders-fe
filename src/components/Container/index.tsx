type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className  }: ContainerProps) {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-300 dark:text-white">
      <div className={`max-w-4xl p-4 mx-auto ${className}`}>
        {children}
      </div>
    </div>
  )
}