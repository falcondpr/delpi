package py.com.delpi.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import py.com.delpi.mod.model.Ciudad;

import java.util.List;

@Data
public class ListaCiudades {

    @JsonProperty("Response")
    private List<Ciudad> response;

}
