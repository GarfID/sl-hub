import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HTTPConnectorService {

    constructor( private http: HttpClient ) {
    }

    public getServerResponce( url: String, token: string, data?: Map<string, any> ) {
        return new Observable( observer => {
            let body = new FormData();
            body.append( 'token', token );
            if(data != null) {
                data.forEach((value: string, key: string) => {
                    body.append(key, JSON.stringify(value));
                })
            }
            const httpOptions = {
                headers: new HttpHeaders( {
                    'Origin': 'https://sl-hub.g-workshop.ru',
                    'Accept': 'application/json'
                } )
            };
            this.http.post( 'https://g-workshop.ru:8443/sl-hub-dev' + url, body, httpOptions ).subscribe( data => {
                observer.next( data );
            } );
        } );
    }
}