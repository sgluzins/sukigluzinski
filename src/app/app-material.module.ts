import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatTabsModule, MatGridListModule,
MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatTabsModule, MatGridListModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatTabsModule, MatGridListModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule { }