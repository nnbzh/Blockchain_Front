import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  CRP: number

  USD: any
  ETH: any 
  ETC: any
  
  type: any
  
  etc_url = 'http://localhost:8000/ethereum/classic/'
  eth_url = 'http://localhost:8000/ethereum/'
  
  constructor(private http: HttpClient) {
    
  }
  
  ngOnInit(): void {
    
  }
  
  getType(choice) {
    if (choice === '1') {this.type = 1}
    else if (choice === '2') {this.type = 2}
  }
  
  countResult() {
    if (this.type == 1) {
      this.http.get(this.eth_url).toPromise().then(data=> {
        this.ETH = data['USD']
        this.USD = data['USD'] * this.CRP
        console.log(this.USD)
      })
      // this.USD = this.ETH * this.CRP
    } else if (this.type == 2) {
      this.http.get(this.etc_url).toPromise().then(data=> {
        this.ETC = data['USD']
        this.USD = data['USD'] * this.CRP
        console.log(this.USD)
      })
      // this.USD = this.ETC * this.CRP
    }
  }
  
}
