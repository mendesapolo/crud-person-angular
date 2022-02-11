import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.css']
})
export class ModalConfirmarComponent implements OnInit {

  @Input() modalName: string = 'modal-confimar'
  @Input() title: string = 'Confimar acção'
  @Input() message: string = 'Desejas executar esta acção?'
  @Output() event: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public execute() {
    this.event.emit('Executado!')
  }

}
