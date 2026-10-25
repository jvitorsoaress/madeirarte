import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  readonly questions = [
    'Quanto custa um móvel planejado?',
    'Qual o prazo de entrega e instalação?',
    'Qual a garantia dos móveis planejados?',
    'Vocês atendem fora de Nova Lima?',
    'Como funciona o pagamento?',
    'Posso visitar a marcenaria antes de fechar?',
    'A Madeirarte faz a instalação ou só a fabricação?',
    'Como funciona o processo de orçamento?',
  ];

  openQuestion: number | null = null;

  toggleQuestion(index: number): void {
    this.openQuestion = this.openQuestion === index ? null : index;
  }
}
