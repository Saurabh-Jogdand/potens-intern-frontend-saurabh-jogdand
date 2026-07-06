function Button({ children, variant = 'primary', onClick, disabled = false }) {
  const base = 'px-3 py-1.5 rounded-md text-xs font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-700',
    secondary: 'border border-neutral-300 text-neutral-700 hover:bg-neutral-100',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;