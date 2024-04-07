package py.com.delpi.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import py.com.delpi.mod.model.Barrio;

import java.util.List;

@Data
public class ListaBarrios {

    @JsonProperty(value = "Response")
    private List<Barrio> response;
}
