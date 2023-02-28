import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SellerCategoryService } from '../services/seller-category.service';
import { ISellerCategory, ITax } from '../models';

interface Lookup {
  id: number;
  name: string;
}

const mapLookup = (obj: any) => ({
  id: obj.id,
  name: obj.name,
});

const nameValid = (control: AbstractControl): { [key: string]: any } | null => {
  const firstLetter = control.value.toString()[0];
  console.log(!!firstLetter && firstLetter !== firstLetter.toUpperCase());

  return !!firstLetter && firstLetter !== firstLetter.toUpperCase()
    ? { nameValid: 'invalid name' }
    : null;
};

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styles: [
    `
      em {
        color: #e05c65;
        padding-left: 10px;
      }
      .error {
        background-color: #e3c3c5;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error+select {
        background-color: #e3c3c5;
      }
      .error :: -webkit-input-placeholder {
        color: #999;
      }
      .error :: -moz-placeholder {
        color: #999;
      }
      .error :: -ms-input-placeholder {
        color: #999;
      }
    `,
  ],
  providers: [

  ]
})
export class CreateSellerComponent implements OnInit {
  categoryLookupCollection: Array<Lookup> = [];
  categoryTaxes: Array<{ categoryId: number; taxes: ITax[] }> = [];
  taxLookupCollection: Array<Lookup> = [];
  newSellerForm!: FormGroup;
  category!: FormControl;
  tax!: FormControl;
  name!: FormControl;

  constructor(private sellerCategoryService: SellerCategoryService) {}

  onChangeCategory(event: any) {
    const selectedCategoryId = event.target.value;
    if (selectedCategoryId) {
      const { taxes } = this.categoryTaxes.find(
        (ct) => ct.categoryId === +selectedCategoryId
      ) as { categoryId: number; taxes: ITax[] };
      this.taxLookupCollection = taxes.map(mapLookup);
      this.tax.enable();
    } else {
      this.tax.disable();
      this.tax.setValue('');
    }
  }

  saveSeller(formValues: any) {
    console.log(formValues);
  }

  ngOnInit(): void {
    const categories = this.sellerCategoryService.getSellerCategories();
    this.populateCategoryLookupCollection(categories);
    this.populateCategoryTaxes(categories);
    this.initForm();
  }

  private initForm() {
    this.category = new FormControl('', Validators.required);
    this.tax = new FormControl('', Validators.required);
    this.name = new FormControl('', [Validators.required, nameValid])
    this.newSellerForm = new FormGroup({
      category: this.category,
      tax: this.tax,
      name: this.name
    });
    this.tax.disable();
  }

  private populateCategoryLookupCollection(
    categories: ISellerCategory[]
  ): void {
    this.categoryLookupCollection = categories.map(mapLookup);
  }

  private populateCategoryTaxes(categories: ISellerCategory[]): void {
    this.categoryTaxes = categories.map((c) => ({
      categoryId: c.id,
      taxes: [...c.taxes],
    }));
  }
}
