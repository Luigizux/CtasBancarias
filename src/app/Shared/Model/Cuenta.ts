import { JsonObject, JsonProperty} from 'json2typescript';
import { TipoCuenta } from './TipoCuenta';

@JsonObject('Cuenta')
export class Cuenta {
    @JsonProperty('numeroCuenta', Number, true)
    public numeroCuenta: number = undefined;
    @JsonProperty('montoCuenta', Number, true)
    public montoCuenta: number = undefined;
    public tipoCuenta: TipoCuenta;
}