import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface IUrl {
  longUrl: string;
  shortUrl: string;
  urlCode: string;
  date?: Date;
}


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }
  // apiUrl: string[] = ["https://urlshortener-n8hp.onrender.com/","http://localhost:3000/","https://u.srg.buzz/"]
  private apiUrl: string = environment.apiURL
  shortenUrl(longUrl: string): Observable<IUrl>{
    return this.http.post<IUrl>(`${this.apiUrl}api/urls/shorten`,{longUrl})
  }

}
