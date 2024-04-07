package py.com.delpi.mod.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import py.com.delpi.mod.model.Departamento;

import java.util.List;

@Repository
public interface DepartamentoRepository extends JpaRepository<Departamento, Integer> {

    @Query(value = "SELECT * FROM departamento d WHERE LOWER(unaccent(d.nombre)) LIKE LOWER(unaccent(CONCAT(:nombre, '%')))", nativeQuery = true)
    List<Departamento> findAllByNombreIgnoreCase(@Param("nombre") String nombre);

    @Query("SELECT d FROM Departamento d WHERE FUNCTION('unaccent', LOWER(d.nombre)) = FUNCTION('unaccent', LOWER(:nombre))")
    Departamento findByNombreIgnoreCase(@Param("nombre") String nombre);

}
