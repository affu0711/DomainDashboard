import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Domain {
  id?: number;
  name: string;
  expiry: string;
  status: string;
  registrar: string;
}

@Injectable({ providedIn: 'root' })
export class DomainService {
  private api = 'http://localhost:3000/domains';

  constructor(private http: HttpClient) {}

  getDomains(): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.api);
  }

  addDomain(domain: Domain): Observable<Domain> {
    return this.http.post<Domain>(this.api, domain);
  }

  deleteDomain(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
