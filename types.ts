export enum WorkflowNodeType {
  SOURCE = 'SOURCE',
  PROCESS = 'PROCESS',
  VECTOR_DB = 'VECTOR_DB',
  MODEL = 'MODEL'
}

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  label: string;
  icon: string;
  config?: Record<string, string>;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface MockContextItem {
  source: string;
  text: string;
}
