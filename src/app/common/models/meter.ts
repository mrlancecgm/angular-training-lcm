export interface Meter {
    id: number;
    customerId: number;
    meterNumber: string;
    installationDate: string;
}

export interface MeterResponse {
    data?: Meter[];
    failed?: boolean;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    message?: string;
    page?: number;
    succeeded?: boolean;
    totalCount?: number;
    totalPages?: number;
  }
