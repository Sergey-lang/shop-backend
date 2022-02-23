export class SearchCakeDto {
  title?: string;
  description?: string;
  views?: 'DESC' | 'ASC';
  limit?: number;
  take?: number;
  type?: string;
}
