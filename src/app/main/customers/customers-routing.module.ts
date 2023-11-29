import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { BarangayResolver } from "app/common/resolvers/barangay.resolver";
import { CustomerResolver } from "app/common/resolvers/customer.resolver";

const routes: Routes = [
  {
    path: "",
    component: CustomersComponent,
  },
  {
    path: "add",
    component: CustomerFormComponent,
    data: {
      title: "Add New Customer",
      breadcrumb: "New",
    },
    resolve: { Barangays: BarangayResolver },
  },
  {
    path: "edit/:id",
    component: CustomerFormComponent,
    data: {
      title: "Edit Customer",
      breadcrumb: "Edit",
    },
    resolve: { Customer: CustomerResolver, Barangays: BarangayResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
