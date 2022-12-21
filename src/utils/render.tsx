

const vatCalc = (props: Record<string, string | number>) => {
  const { full, vat, withoutVAT, currency } = props;
  return (
    <div className="flex flex-col">
      <span className="text-blue-400 m-auto">{full} {currency}.</span>
      <span className="text-red-500 m-auto">{vat} {currency}.</span>
      <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
    </div>
  )
};

export { vatCalc };