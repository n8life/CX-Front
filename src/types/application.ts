export interface Rule {
    id: string;
    type: string;
    value: string;
  }
  
  export interface Application {
    id: string;
    name: string;
    description: string;
    criticality: number;
    rules: Rule[];
    projectIds: string[];
    tags: Record<string, string>;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ApplicationsResponse {
    totalCount: number;
    filteredTotalCount: number;
    applications: Application[];
  }