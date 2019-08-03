import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ColorpickerModule } from "colorpicker";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ColorpickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
