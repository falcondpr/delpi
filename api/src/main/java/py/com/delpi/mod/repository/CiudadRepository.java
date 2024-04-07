package py.com.delpi.mod.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import py.com.delpi.mod.model.Ciudad;
import py.com.delpi.mod.model.Departamento;

import java.util.List;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Integer> {

    @Query("SELECT c FROM Ciudad c WHERE FUNCTION('unaccent', LOWER(c.departamento.nombre)) = FUNCTION('unaccent', LOWER(:departamento))")
    List<Ciudad> findByCiudadPorDepartamento(@Param("departamento") String departamento);

    @Query("SELECT c FROM Ciudad c WHERE FUNCTION('unaccent', LOWER(c.nombre)) = FUNCTION('unaccent', LOWER(:nombre))")
    Ciudad findByNombreIgnoreCase(@Param("nombre") String nombre);

}
