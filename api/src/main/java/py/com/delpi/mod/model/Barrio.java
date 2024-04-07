package py.com.delpi.mod.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "barrio")
@Data
public class Barrio {

    // ::: vars
    //

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String nombre;

    @ManyToOne
    @JsonIgnoreProperties("id")
    private Ciudad ciudad;

}
