import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Moment } from '../../Moment';

@Component({
  selector: 'app-moment-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})

export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string
  @Input() momentData: Moment | null = null

  momentForm!: FormGroup

  constructor() { }
  
  ngOnInit(): void {
      this.momentForm = new FormGroup({
        id: new FormControl(this.momentData? this.momentData.id : ''),
        title: new FormControl(this.momentData? this.momentData.title : '', [Validators.required]),
        description: new FormControl(this.momentData? this.momentData.description : '', [Validators.required]),
        image: new FormControl('')
      })
  }

  get title() {
    return this.momentForm.get('title')!
  }

  get description() {
    return this.momentForm.get('description')!
  }

  onFileSelected(event: any) {
    const file = File = event.target.files[0]
    this.momentForm.patchValue({
      image: file
    })
  }

  submit() {
    if(this.momentForm.invalid) {
      return
    }

    console.log(this.momentForm.value)

    this.onSubmit.emit(this.momentForm.value)
  }
  
}
