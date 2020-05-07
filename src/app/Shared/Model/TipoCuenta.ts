import { JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('TipoCuenta')
export class TipoCuenta {
    @JsonProperty('idCuenta', Number, true)
    public idCuenta: Number = undefined;
    @JsonProperty('nombreCuenta', String, true)
    public nombreCuenta?: Number = undefined;
}