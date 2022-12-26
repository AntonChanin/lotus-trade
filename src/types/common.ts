type ExecuteValue = {
  value: string | number;
  type?: 'string' | 'number';
  render?: (props: Record<string, string | number>) => JSX.Element;
  renderProps?: Record<string, string | number>;
};

type ServerValue = {
  value: string | number;
  type?: 'string' | 'number';
  render?: string;
  renderProps?: Record<string, string | number>;
}

export type { ExecuteValue, ServerValue };
