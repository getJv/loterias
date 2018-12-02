export class Sorteio{
    
	id							:number;			
    created_at			        :string;
    updated_at			        :string;
    jogo_tipo_id		        :number;
    concurso			        :number;
    data_sorteio		        :string;
    arrecadacao_total	        :number;
    ganhadores_sena		        :number;
    cidade				        :string;
    uf					        :string;
    rateio_sena			        :number;
    ganhadores_quina	        :number;
    rateio_quina		        :number;
    ganhadores_quadra	        :number;
    rateio_quadra		        :number;
    acumulado	 		        :string;
    valor_acumulado		        :number;
    estimativa_prêmio	        :number;
    acumulado_mega_da_virada    :number;
	dezenas						:number[]

}