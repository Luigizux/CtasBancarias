import { JsonObject, JsonProperty} from 'json2typescript';
import { Cuenta } from './Cuenta';

@JsonObject('Usuario')
export class Usuario {
    @JsonProperty('rut', String, true)
    public rut: string = undefined;
    @JsonProperty('dv', String, true)
    public dv: string = undefined;
    @JsonProperty('nombre', String, true)
    public nombre: string = undefined;
    @JsonProperty('apellido', String, true)
    public apellido: string = undefined;
    public cuenta: Cuenta[];
}