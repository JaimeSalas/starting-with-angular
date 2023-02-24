import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SellerCategoryService } from '../services/seller-category.service';
import { ISellerCategory } from '../models';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styles: [
    `
      em {
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
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
})
export class CreateSellerComponent implements OnInit {
  categoryLookupCollection: Array<any> = [];
  newSellerForm!: FormGroup;
  category!: FormControl;

  constructor(private sellerCategoryService: SellerCategoryService) {}

  onChangeCategory(event: any) {
    console.log(event.target.value);
  }

  saveSeller(formValues: any) {
    console.log(formValues);
  }

  ngOnInit(): void {
    this.initForm();
    const categories = this.sellerCategoryService.getSellerCategories();
    this.populateCategoryLookupCollection(categories);
  }

  private initForm() {
    this.category = new FormControl('', Validators.required);
    this.newSellerForm = new FormGroup({
      category: this.category
    });
  }

  private populateCategoryLookupCollection(
    categories: ISellerCategory[]
  ): void {
    this.categoryLookupCollection = categories.map((category) => ({
      id: category.id,
      name: category.name,
    }));
  }
}
