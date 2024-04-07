package py.com.delpi.mod.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import py.com.delpi.mod.model.Barrio;
import py.com.delpi.mod.model.Ciudad;

import java.util.List;

@Repository
public interface BarrioRepository extends JpaRepository<Barrio, Integer> {

    @Query("SELECT b FROM Barrio b WHERE FUNCTION('unaccent', LOWER(b.ciudad.nombre)) = FUNCTION('unaccent', LOWER(:departamento))")
    List<Barrio> findByCiudadPorDepartamento(@Param("departamento") String departamento);

}
