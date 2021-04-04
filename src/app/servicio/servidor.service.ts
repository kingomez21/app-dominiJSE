import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  serverUrl = 'http://192.168.11.3:4100/gql'

  constructor() { }

  async Querys(query: any, token?: string){
    return await fetch(this.serverUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        "authorization": `${token}` 
      },
      body: JSON.stringify(query),
    })
  }

}
