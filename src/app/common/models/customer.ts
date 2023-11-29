export interface Customer {
    id: number;
    name: string;
    barangayId: number;
    accountNumber?: string;
    barangay?: string;
    contactNumber?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    municipality?: string;
    province?: string;
    street?: string;
  }

  export interface CustomerResponse {
    data?: Customer[];
    failed?: boolean;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    message?: string;
    page?: number;
    succeeded?: boolean;
    totalCount?: number;
    totalPages?: number;
  }