import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dash board model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit{
  employeeData: any;

  formValue!: FormGroup
  employeeModelObj: EmployeeModel = new EmployeeModel();



  constructor(private formbuilder: FormBuilder,private api: ApiService) {

  }




  ngOnInit(): void {
  this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary:['']

  })
    this. getAllEmployee()

}
  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

this.api.postEmployee(this.employeeModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Employee added successfully")
        let ref = document.getElementById("cancel")
        ref?.click()
        this.formValue.reset()
        this.getAllEmployee()
    })


  }

  getAllEmployee() {
    this.api.getEmployee().subscribe(res => {
      this.employeeData = res


    })
  }


  deleteEmployee(row: any) {
    this.api.deleteEmployee(row.id).subscribe(
      res => {
        alert("delete")
        this.getAllEmployee()
      }
    )

  }

onEdit(row: any) {
    this.employeeModelObj.id = row.id
    this.formValue.controls['firstName'].setValue(row.firstName)
    this.formValue.controls['lastName'].setValue(row.lastName)
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['salary'].setValue(row.salary)

  }

  updateEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully")
        let ref = document.getElementById("cancel")
        ref?.click()
        this.formValue.reset()
        this.getAllEmployee()
      })
  }

}
