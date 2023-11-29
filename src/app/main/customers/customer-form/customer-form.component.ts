import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { contactNumberValidator } from "app/common/directives/contact-number.directive";
import { Barangay } from "app/common/models/barangay";
import { Customer } from "app/common/models/customer";
import { CustomerService } from "app/common/services/customer.service";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
  styleUrls: ["./customer-form.component.scss"],
})
export class CustomerFormComponent implements OnInit {
  public contentHeader: object;
  public customerForm: FormGroup;
  public submitted: boolean = false;
  public barangays: Barangay[] = [];
  public unsubscribeAll: Subject<any>;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.unsubscribeAll = new Subject();
  }

  get f() {
    return this.customerForm.controls;
  }

  ngOnInit(): void {
    const title = this.activatedRoute.snapshot.data.title;
    const breadcrumb = this.activatedRoute.snapshot.data.breadcrumb;
    const customer: Customer = this.activatedRoute.snapshot.data.Customer;
    this.barangays = this.activatedRoute.snapshot.data.Barangays;
 
    console.log("customer", customer);

    this.contentHeader = {
      headerTitle: title,
      actionButton: false,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Customers",
            isLink: true,
            link: "/customers",
          },
          {
            name: breadcrumb,
            isLink: false,
          },
        ],
      },
    };
    this.customerForm = this.formBuilder.group({
      id: [customer ? customer.id : null, []],
      firstName: [customer ? customer.firstName : null, [Validators.required]],
      middleName: [customer ? customer.middleName : null, []],
      lastName: [customer ? customer.lastName : null, [Validators.required]],
      street: [customer ? customer.street : null, [Validators.required]],
      barangayId: [
        customer ? customer.barangayId : null,
        [Validators.required],
      ],
      municipality: [
        customer ? customer.municipality : null,
        [Validators.required],
      ],
      province: [customer ? customer.province : null, [Validators.required]],
      email: [
        customer ? customer.email : null,
        [Validators.required, Validators.email],
      ],
      contactNumber: [
        customer ? customer.contactNumber : null,
        [Validators.required, contactNumberValidator()],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }

    this.blockUI.start();

    if (this.f.id.value) {
      this.customerService
        .putCustomer(this.customerForm.getRawValue())
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe(
          (response) => {
            this.blockUI.stop(), this.router.navigate(["/customers"]);
          },
          () => {
            this.blockUI.stop();
          }
        );
    } else {
      console.log(this.customerForm.getRawValue());
      this.customerService
        .postCustomer(this.customerForm.getRawValue())
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe(
          (response) => {
            this.blockUI.stop(), this.router.navigate(["/customers"]);
          },
          () => {
            this.blockUI.stop();
          }
        );
      console.log(this.barangays);
    }
  }
}
