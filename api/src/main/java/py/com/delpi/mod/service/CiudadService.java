package py.com.delpi.mod.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import py.com.delpi.mod.model.Ciudad;
import py.com.delpi.mod.repository.CiudadRepository;

import java.util.List;

@Service
public class CiudadService {

    @Autowired
    private CiudadRepository ciudadRepository;

    public List<Ciudad> obtenerCiudades(String departamento){
        return ciudadRepository.findByCiudadPorDepartamento(departamento);
    }

    public List<Ciudad> insertarCiudades(List<Ciudad> ciudades){
        return ciudadRepository.saveAll(ciudades);
    }

    public Ciudad obtenerCiudadPorNombre(String nombre){
        return ciudadRepository.findByNombreIgnoreCase(nombre);
    }

}
