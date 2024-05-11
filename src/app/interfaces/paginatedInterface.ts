export interface paginatedInterface<T> {
  count: number;
  data: T[];
  page: number;
  pageSize: number;
  totalCount: number;
}
