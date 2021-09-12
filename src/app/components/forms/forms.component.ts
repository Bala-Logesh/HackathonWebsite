import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  formNo: number = 1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('form_no')) {
        this.formNo = parseInt(params.get('form_no') || "1");
      }
    });
  }

  formSelect(id: number): void{
    this.formNo = id
    this.router.navigate([`forms/${id}`])
  }
}
