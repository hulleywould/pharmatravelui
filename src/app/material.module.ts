import { NgModule } from "@angular/core";
import { 
    MatButtonModule,
    MatIconModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatAutocompleteModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatListModule,
    MatCardModule,
    MatDividerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDividerModule
    ]
})
export class MaterialModule { }