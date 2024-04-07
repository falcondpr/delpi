package py.com.delpi.mod.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "ciudad")
@Data
public class Ciudad {


    // ::: vars
    //

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String nombre;

    @ManyToOne
    @JsonIgnoreProperties("id")
    private Departamento departamento;

    @OneToMany(mappedBy = "ciudad")
    private Set<Barrio> barrios;
}
