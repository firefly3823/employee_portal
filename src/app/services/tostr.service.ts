import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class TostrService {
  constructor(private toastr: ToastrService) {}

  showSuccess(msg: any) {
    this.toastr.success('Success', msg);
  }
  showWarning(msg: any) {
    this.toastr.warning('Success', msg);
  }
  showerror(msg: any) {
    this.toastr.error('Success', msg);
  }
}
