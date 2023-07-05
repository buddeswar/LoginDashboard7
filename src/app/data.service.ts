import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getnumbers() {
    return this.http.get<any>("http://localhost:3000/numbers")
  }
  meeting() {
    return this.http.get<any>("http://localhost:3000/meeting")
  }
  getgraphdetails() {
    return this.http.get<any>("http://localhost:3000/graphdetails")

  }
  getgraphdetails2() {
    return this.http.get<any>("http://localhost:3000/graphdetails2")
  }
  getsidegraph1() {
    return this.http.get<any>("http://localhost:3000/sidegraph1")
  }
  getsidegraph2() {
    return this.http.get<any>("http://localhost:3000/sidegraph2")
  }
  getmeetingtime() {
    return this.http.get<any>("http://localhost:3000/meetingtime")
  }
  getmeeting2() {
    return this.http.get<any>("http://localhost:3000/meeting2")

  }
  getexpenses() {
    return this.http.get<any>("http://localhost:3000/expenses")
  }
  gettable1() {
    return this.http.get<any>("http://localhost:3000/table1")
  }
  getcharttarget() {
    return this.http.get<any>("http://localhost:3000/charttarget")
  }
  getthisyeargd() {
    return this.http.get<any>("http://localhost:3000/thisyeargd")
  }
  getgraphvp() {
    return this.http.get<any>("http://localhost:3000/graphvp")
  }
  getyouradu(){
    return this.http.get<any>("http://localhost:3000/youradu")
  }
  getstatements() {
    return this.http.get<any>("http://localhost:3000/statements")
  }
  getbalence() {
    return this.http.get<any>("http://localhost:3000/balence")
  }
  gettransactions() {
    return this.http.get<any>("http://localhost:3000/transactions")
  }
  getBudget() {
    return this.http.get<any>("http://localhost:3000/Budget")
  }
}
