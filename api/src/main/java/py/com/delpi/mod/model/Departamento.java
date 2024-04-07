package py.com.delpi.mod.model;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "departamento")
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Departamento {

    // ::: vars
    //

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String nombre;

}
