import './Square.css';

function Square({ value, onClick, index }) {
  const isFilled = Boolean(value);
  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;

  function handleClick() {
    if (isFilled) {
      return;
    }
    onClick();
  }

  const className = [
    'square',
    isFilled ? 'square--filled' : 'square--empty',
    value === 'X' && 'square--x',
    value === 'O' && 'square--o',
  ]
    .filter(Boolean)
    .join(' ');

  const ariaLabel = isFilled 
    ? `Row ${row}, Column ${col}: ${value}` 
    : `Row ${row}, Column ${col}: Empty square`;

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={isFilled}
      aria-label={ariaLabel}
      aria-pressed={isFilled}
    >
      {value}
    </button>
  );
}

export default Square;
