package py.com.delpi.mod.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import py.com.delpi.app.dto.ListaBarrios;
import py.com.delpi.app.dto.ListaCiudades;
import py.com.delpi.app.dto.ListaDepartamentos;
import py.com.delpi.mod.model.Barrio;
import py.com.delpi.mod.model.Ciudad;
import py.com.delpi.mod.model.Departamento;
import py.com.delpi.mod.repository.DepartamentoRepository;
import py.com.delpi.mod.service.BarrioService;
import py.com.delpi.mod.service.CiudadService;
import py.com.delpi.mod.service.DepartamentoService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin(origins = {"http://localhost:5173"})
public class DelpiEndpoint {

    // :::
    //

    @Autowired
    private DepartamentoService departamentoService;
    @Autowired
    private CiudadService ciudadService;
    @Autowired
    private BarrioService barrioService;

    // :::
    //

    @GetMapping("/departamentos")
    public ResponseEntity<?> obtenerDepartamentos() {
        return ResponseEntity.ok(departamentoService.obtenerDepartamento());
    }

    @GetMapping("/departamentos/{departamento}")
    public ResponseEntity<?> obtenerDepartamentosPorNombre(
            @PathVariable("departamento") String nombreDepartamento){
        return ResponseEntity.ok(departamentoService.obtenerListaDepartamentosPorNombre(nombreDepartamento));
    }

    @PostMapping("/departamentos")
    public ResponseEntity<?> insertarDepartamentos(
            @RequestBody ListaDepartamentos listaDepartamentos) {
        return ResponseEntity.ok(departamentoService.insertarDepartamentos(listaDepartamentos.getResponse()));
    }

    @PostMapping("/{departamento}/ciudades")
    public ResponseEntity<?> insertarCiudades(
            @PathVariable("departamento") String nombreDepartamento,
            @RequestBody ListaCiudades ciudades) {
        Departamento departamento = departamentoService.obtenerDepartamentoPorNombre(nombreDepartamento);

        if (departamento != null) {
            ciudades.getResponse().forEach(ciudad -> ciudad.setDepartamento(departamento));

            List<Ciudad> ciudadesInsertadas = ciudadService.insertarCiudades(ciudades.getResponse());

            return ResponseEntity.ok(ciudadesInsertadas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{departamento}/ciudades")
    public ResponseEntity<?> listaDeCiudades(@PathVariable("departamento") String departamento){
        return ResponseEntity.ok(ciudadService.obtenerCiudades(departamento));
    }

    @GetMapping("/{ciudad}/barrios")
    public ResponseEntity<?> listaDeBarrios(
            @PathVariable("ciudad") String ciudad){
        return ResponseEntity.ok(barrioService.obtenerBarriosPorCiudad(ciudad));
    }

    @PostMapping("/{ciudad}/barrios")
    public ResponseEntity<?> insertarBarrios(@PathVariable("ciudad") String nombreCiudad,
                                             @RequestBody ListaBarrios barrios){
        Ciudad ciudad = ciudadService.obtenerCiudadPorNombre(nombreCiudad);

        if (nombreCiudad != null) {
            barrios.getResponse().forEach(barrio -> barrio.setCiudad(ciudad));

            List<Barrio> barriosInsertadas = barrioService.insertarBarrios(barrios.getResponse());

            return ResponseEntity.ok(barriosInsertadas);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
