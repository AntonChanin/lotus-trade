type ExecuteValue = {
  value: string | number 
  render?: (props: Record<string, string | number>) => JSX.Element ;
  renderProps?: Record<string, string | number>
};

export type { ExecuteValue };
