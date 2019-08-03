import { NgModule } from "@angular/core";
import { ColorpickerComponent } from "./colorpicker.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [ColorpickerComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ColorpickerComponent]
})
export class ColorpickerModule {}
