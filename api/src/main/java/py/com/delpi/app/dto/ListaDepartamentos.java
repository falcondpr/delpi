package py.com.delpi.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import py.com.delpi.mod.model.Departamento;

import java.util.List;

@Data
public class ListaDepartamentos {

    @JsonProperty("Response")
    private List<Departamento> response;

}
