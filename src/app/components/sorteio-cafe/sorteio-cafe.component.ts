import { Component, OnInit } from '@angular/core';
import { Nomes } from 'src/app/models/Nomes';

interface Sorteados {
  Id: number;
  Nome: string;
  Hora: string;
}

@Component({
  selector: 'app-sorteio-cafe',
  templateUrl: './sorteio-cafe.component.html',
  styleUrls: ['./sorteio-cafe.component.css']
})
export class SorteioCafeComponent implements OnInit {
  public ListaNome: Nomes[];
  public Sorteado: string;

  public listaDeSorteados: Sorteados[] = [];

  public SorteioRealizado: boolean = false;

  constructor() {
    this.ListaNome = [
      { Id: 1, Nome: "Gabriel" },
      { Id: 2, Nome: "Claudinei" },
      { Id: 3, Nome: "Patrick" }
    ];
  }

  ngOnInit(): void {

  }

  voltar(){
    this.SorteioRealizado = false;
  }

  sortear(){
    const sorteio = this.escolherIdAleatorio();
    const Sorteado = this.ListaNome.find(x => x.Id == sorteio);
    this.Sorteado = Sorteado.Nome;

    const now = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const horaFormatada = formatter.format(now);

    const sorteadoComHora: Sorteados = {
      Id: Sorteado.Id,
      Nome: Sorteado.Nome,
      Hora: horaFormatada,
    };

    this.listaDeSorteados.push(sorteadoComHora);
    console.clear()
    console.log(this.listaDeSorteados);

    this.SorteioRealizado = true;
  }

  escolherIdAleatorio(): number {
    const Aleatorio = Math.floor(Math.random() * this.ListaNome.length);
    return this.ListaNome[Aleatorio].Id;
  }

}
