import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../constants/interface';
import {Api} from '../constants/api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  activeModal: boolean = false

  constructor(private http: HttpClient) {}

  public fetchInfo(): Observable<Info> {
    return this.http
      .get<Info>(Api.info)
  }

  showModal() {
    this.activeModal = !this.activeModal
  }

}