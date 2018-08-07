import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routes } from "./test.async.routers";
import { TAsyncComponent } from "./test-async-component/t.async.component";
import { TestAsyncService } from "./test.async.service";

@NgModule({
  imports: [CommonModule, routes],
  declarations: [TAsyncComponent],
  providers: [TestAsyncService]
})
export class TestAsyncModule {}
